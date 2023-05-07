@extends('layouts.admin')
@section('content')

<div class="card">
    <div class="card-header">
        {{ trans('global.show') }} {{ trans('cruds.pendapatan.title') }}
    </div>

    <div class="card-body">
        <div class="form-group">
            <div class="form-group">
                <a class="btn btn-default" href="{{ route('admin.pendapatans.index') }}">
                    {{ trans('global.back_to_list') }}
                </a>
            </div>
            <table class="table table-bordered table-striped">
                <tbody>
                    <tr>
                        <th>
                            {{ trans('cruds.pendapatan.fields.id') }}
                        </th>
                        <td>
                            {{ $pendapatan->id }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.pendapatan.fields.amount') }}
                        </th>
                        <td>
                            {{ $pendapatan->amount }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.pendapatan.fields.entry_date') }}
                        </th>
                        <td>
                            {{ $pendapatan->entry_date }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.pendapatan.fields.akun') }}
                        </th>
                        <td>
                            {{ App\Models\Pendapatan::AKUN_SELECT[$pendapatan->akun] ?? '' }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.pendapatan.fields.kategori') }}
                        </th>
                        <td>
                            {{ $pendapatan->kategori }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.pendapatan.fields.description') }}
                        </th>
                        <td>
                            {{ $pendapatan->description }}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="form-group">
                <a class="btn btn-default" href="{{ route('admin.pendapatans.index') }}">
                    {{ trans('global.back_to_list') }}
                </a>
            </div>
        </div>
    </div>
</div>



@endsection