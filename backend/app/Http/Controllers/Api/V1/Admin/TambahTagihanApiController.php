<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTambahTagihanRequest;
use App\Http\Requests\UpdateTambahTagihanRequest;
use App\Http\Resources\Admin\TambahTagihanResource;
use App\Models\TambahTagihan;
use Gate;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class TambahTagihanApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('tambah_tagihan_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new TambahTagihanResource(TambahTagihan::with(['username'])->get());
    }

    public function store(StoreTambahTagihanRequest $request)
    {
        $tambahTagihan = TambahTagihan::create($request->all());

        return (new TambahTagihanResource($tambahTagihan))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function show(TambahTagihan $tambahTagihan)
    {
        abort_if(Gate::denies('tambah_tagihan_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new TambahTagihanResource($tambahTagihan->load(['username']));
    }

    public function update(UpdateTambahTagihanRequest $request, TambahTagihan $tambahTagihan)
    {
        $tambahTagihan->update($request->all());

        return (new TambahTagihanResource($tambahTagihan))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function destroy(TambahTagihan $tambahTagihan)
    {
        abort_if(Gate::denies('tambah_tagihan_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $tambahTagihan->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}