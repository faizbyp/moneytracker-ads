<?php

namespace App\Http\Requests;

use App\Models\Pendapatan;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Symfony\Component\HttpFoundation\Response;

class MassDestroyPendapatanRequest extends FormRequest
{
    public function authorize()
    {
        abort_if(Gate::denies('pendapatan_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return true;
    }

    public function rules()
    {
        return [
            'ids'   => 'required|array',
            'ids.*' => 'exists:pendapatans,id',
        ];
    }
}