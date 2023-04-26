<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\MassDestroyTambahTagihanRequest;
use App\Http\Requests\StoreTambahTagihanRequest;
use App\Http\Requests\UpdateTambahTagihanRequest;
use App\Models\TambahTagihan;
use App\Models\User;
use Gate;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class TambahTagihanController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('tambah_tagihan_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $tambahTagihans = TambahTagihan::with(['username'])->get();

        return view('admin.tambahTagihans.index', compact('tambahTagihans'));
    }

    public function create()
    {
        abort_if(Gate::denies('tambah_tagihan_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $usernames = User::pluck('name', 'id')->prepend(trans('global.pleaseSelect'), '');

        return view('admin.tambahTagihans.create', compact('usernames'));
    }

    public function store(StoreTambahTagihanRequest $request)
    {
        $tambahTagihan = TambahTagihan::create($request->all());

        return redirect()->route('admin.tambah-tagihans.index');
    }

    public function edit(TambahTagihan $tambahTagihan)
    {
        abort_if(Gate::denies('tambah_tagihan_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $tambahTagihan->load('username');

        return view('admin.tambahTagihans.edit', compact('tambahTagihan'));
    }

    public function update(UpdateTambahTagihanRequest $request, TambahTagihan $tambahTagihan)
    {
        $tambahTagihan->update($request->all());

        return redirect()->route('admin.tambah-tagihans.index');
    }

    public function show(TambahTagihan $tambahTagihan)
    {
        abort_if(Gate::denies('tambah_tagihan_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $tambahTagihan->load('username');

        return view('admin.tambahTagihans.show', compact('tambahTagihan'));
    }

    public function destroy(TambahTagihan $tambahTagihan)
    {
        abort_if(Gate::denies('tambah_tagihan_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $tambahTagihan->delete();

        return back();
    }

    public function massDestroy(MassDestroyTambahTagihanRequest $request)
    {
        $tambahTagihans = TambahTagihan::find(request('ids'));

        foreach ($tambahTagihans as $tambahTagihan) {
            $tambahTagihan->delete();
        }

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
