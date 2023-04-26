<?php

namespace App\Http\Requests;

use App\Models\TambahTagihan;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Symfony\Component\HttpFoundation\Response;

class MassDestroyTambahTagihanRequest extends FormRequest
{
    public function authorize()
    {
        abort_if(Gate::denies('tambah_tagihan_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return true;
    }

    public function rules()
    {
        return [
            'ids'   => 'required|array',
            'ids.*' => 'exists:tambah_tagihans,id',
        ];
    }
}