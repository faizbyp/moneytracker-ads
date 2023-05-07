<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\MassDestroyPengeluaranRequest;
use App\Http\Requests\StorePengeluaranRequest;
use App\Http\Requests\UpdatePengeluaranRequest;
use App\Models\Pengeluaran;
use App\Models\User;
use Gate;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class PengeluaranController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('pengeluaran_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $pengeluarans = Pengeluaran::with(['username'])->get();

        return view('admin.pengeluarans.index', compact('pengeluarans'));
    }

    public function create()
    {
        abort_if(Gate::denies('pengeluaran_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $usernames = User::pluck('name', 'id')->prepend(trans('global.pleaseSelect'), '');

        return view('admin.pengeluarans.create', compact('usernames'));
    }

    public function store(StorePengeluaranRequest $request)
    {
        $pengeluaran = Pengeluaran::create($request->all());

        return redirect()->route('admin.pengeluarans.index');
    }

    public function edit(Pengeluaran $pengeluaran)
    {
        abort_if(Gate::denies('pengeluaran_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $pengeluaran->load('username');

        return view('admin.pengeluarans.edit', compact('pengeluaran'));
    }

    public function update(UpdatePengeluaranRequest $request, Pengeluaran $pengeluaran)
    {
        $pengeluaran->update($request->all());

        return redirect()->route('admin.pengeluarans.index');
    }

    public function show(Pengeluaran $pengeluaran)
    {
        abort_if(Gate::denies('pengeluaran_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $pengeluaran->load('username');

        return view('admin.pengeluarans.show', compact('pengeluaran'));
    }

    public function destroy(Pengeluaran $pengeluaran)
    {
        abort_if(Gate::denies('pengeluaran_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $pengeluaran->delete();

        return back();
    }

    public function massDestroy(MassDestroyPengeluaranRequest $request)
    {
        $pengeluarans = Pengeluaran::find(request('ids'));

        foreach ($pengeluarans as $pengeluaran) {
            $pengeluaran->delete();
        }

        return response(null, Response::HTTP_NO_CONTENT);
    }
}