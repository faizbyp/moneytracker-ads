<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePendapatanRequest;
use App\Http\Requests\UpdatePendapatanRequest;
use App\Http\Resources\Admin\PendapatanResource;
use App\Models\Pendapatan;
use Gate;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class PendapatanApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('pendapatan_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new PendapatanResource(Pendapatan::with(['username'])->get());
    }

    public function store(StorePendapatanRequest $request)
    {
        $pendapatan = Pendapatan::create($request->all());

        return (new PendapatanResource($pendapatan))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function show(Pendapatan $pendapatan)
    {
        abort_if(Gate::denies('pendapatan_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new PendapatanResource($pendapatan->load(['username']));
    }

    public function update(UpdatePendapatanRequest $request, Pendapatan $pendapatan)
    {
        $pendapatan->update($request->all());

        return (new PendapatanResource($pendapatan))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function destroy(Pendapatan $pendapatan)
    {
        abort_if(Gate::denies('pendapatan_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $pendapatan->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}