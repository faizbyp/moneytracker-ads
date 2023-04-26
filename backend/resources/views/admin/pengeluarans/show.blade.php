@extends('layouts.admin')
@section('content')

<div class="card">
    <div class="card-header">
        {{ trans('global.show') }} {{ trans('cruds.pengeluaran.title') }}
    </div>

    <div class="card-body">
        <div class="form-group">
            <div class="form-group">
                <a class="btn btn-default" href="{{ route('admin.pengeluarans.index') }}">
                    {{ trans('global.back_to_list') }}
                </a>
            </div>
            <table class="table table-bordered table-striped">
                <tbody>
                    <tr>
                        <th>
                            {{ trans('cruds.pengeluaran.fields.id') }}
                        </th>
                        <td>
                            {{ $pengeluaran->id }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.pengeluaran.fields.amount') }}
                        </th>
                        <td>
                            {{ $pengeluaran->amount }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.pengeluaran.fields.entry_date') }}
                        </th>
                        <td>
                            {{ $pengeluaran->entry_date }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.pengeluaran.fields.akun') }}
                        </th>
                        <td>
                            {{ App\Models\Pengeluaran::AKUN_SELECT[$pengeluaran->akun] ?? '' }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.pengeluaran.fields.kategori') }}
                        </th>
                        <td>
                            {{ $pengeluaran->kategori }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            {{ trans('cruds.pengeluaran.fields.description') }}
                        </th>
                        <td>
                            {{ $pengeluaran->description }}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="form-group">
                <a class="btn btn-default" href="{{ route('admin.pengeluarans.index') }}">
                    {{ trans('global.back_to_list') }}
                </a>
            </div>
        </div>
    </div>
</div>



@endsection
