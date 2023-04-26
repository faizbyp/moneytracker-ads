<?php

namespace App\Http\Requests;

use App\Models\Pengeluaran;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StorePengeluaranRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('pengeluaran_create');
    }

    public function rules()
    {
        return [
            'username_id' => [
                'required',
                'integer',
            ],
            'amount' => [
                'required',
            ],
            'entry_date' => [
                'required',
                'date_format:' . config('panel.date_format'),
            ],
            'akun' => [
                'required',
            ],
            'kategori' => [
                'string',
                'required',
            ],
            'description' => [
                'string',
                'nullable',
            ],
        ];
    }
}