@extends('layouts.admin')
@section('content')

<div class="card">
    <div class="card-header">
        {{ trans('global.show') }} {{ trans('cruds.tambahTagihan.title') }}
    </div>

    <div class="card-body">
        <div class="form-group">
            <div class="form-group">
                <a class="btn btn-default" href="{{ route('admin.tambah-tagihans.index') }}">
                    {{ trans('global.back_to_list') }}
                </a>
            </div>
            <table class="table table-bordered table-striped">
                <tbody>
                    <tr>
                        <th>
                            {{ trans('cruds.tambahTagihan.fields.id') }}
                        </th>
                        <td>
                            {{ $tambahTagihan->id }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.tambahTagihan.fields.nama') }}
                        </th>
                        <td>
                            {{ $tambahTagihan->nama }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.tambahTagihan.fields.amount') }}
                        </th>
                        <td>
                            {{ $tambahTagihan->amount }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.tambahTagihan.fields.entry_date') }}
                        </th>
                        <td>
                            {{ $tambahTagihan->entry_date }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.tambahTagihan.fields.description') }}
                        </th>
                        <td>
                            {{ $tambahTagihan->description }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.tambahTagihan.fields.tagihan_status') }}
                        </th>
                        <td>
                            {{ App\Models\TambahTagihan::TAGIHAN_STATUS_SELECT[$tambahTagihan->tagihan_status] ?? '' }}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="form-group">
                <a class="btn btn-default" href="{{ route('admin.tambah-tagihans.index') }}">
                    {{ trans('global.back_to_list') }}
                </a>
            </div>
        </div>
    </div>
</div>



@endsection