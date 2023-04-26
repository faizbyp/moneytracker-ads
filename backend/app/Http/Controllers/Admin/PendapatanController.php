<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\MassDestroyPendapatanRequest;
use App\Http\Requests\StorePendapatanRequest;
use App\Http\Requests\UpdatePendapatanRequest;
use App\Models\Pendapatan;
use App\Models\User;
use Gate;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class PendapatanController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('pendapatan_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $pendapatans = Pendapatan::with(['username'])->get();

        return view('admin.pendapatans.index', compact('pendapatans'));
    }

    public function create()
    {
        abort_if(Gate::denies('pendapatan_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $usernames = User::pluck('name', 'id')->prepend(trans('global.pleaseSelect'), '');

        return view('admin.pendapatans.create', compact('usernames'));
    }

    public function store(StorePendapatanRequest $request)
    {
        $pendapatan = Pendapatan::create($request->all());

        return redirect()->route('admin.pendapatans.index');
    }

    public function edit(Pendapatan $pendapatan)
    {
        abort_if(Gate::denies('pendapatan_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $pendapatan->load('username');

        return view('admin.pendapatans.edit', compact('pendapatan'));
    }

    public function update(UpdatePendapatanRequest $request, Pendapatan $pendapatan)
    {
        $pendapatan->update($request->all());

        return redirect()->route('admin.pendapatans.index');
    }

    public function show(Pendapatan $pendapatan)
    {
        abort_if(Gate::denies('pendapatan_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $pendapatan->load('username');

        return view('admin.pendapatans.show', compact('pendapatan'));
    }

    public function destroy(Pendapatan $pendapatan)
    {
        abort_if(Gate::denies('pendapatan_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $pendapatan->delete();

        return back();
    }

    public function massDestroy(MassDestroyPendapatanRequest $request)
    {
        $pendapatans = Pendapatan::find(request('ids'));

        foreach ($pendapatans as $pendapatan) {
            $pendapatan->delete();
        }

        return response(null, Response::HTTP_NO_CONTENT);
    }
}