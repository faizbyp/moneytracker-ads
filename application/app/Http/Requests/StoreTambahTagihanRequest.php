<?php

namespace App\Http\Requests;

use App\Models\TambahTagihan;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreTambahTagihanRequest extends FormRequest
{
    // public function authorize()
    // {
    //     return Gate::allows('tambah_tagihan_create');
    // }

    public function rules()
    {
        return [
            'username_id' => [
                'required',
                'integer',
            ],
            'nama' => [
                'string',
                'required',
            ],
            'amount' => [
                'required',
            ],
            'entry_date' => [
                'required',
                'date_format:' . config('panel.date_format'),
            ],
            'description' => [
                'string',
                'nullable',
            ],
        ];
    }
}