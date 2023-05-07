@extends('layouts.admin')
@section('content')

<div class="card">
    <div class="card-header">
        {{ trans('global.edit') }} {{ trans('cruds.pengeluaran.title_singular') }}
    </div>

    <div class="card-body">
        <form method="POST" action="{{ route("admin.pengeluarans.update", [$pengeluaran->id]) }}" enctype="multipart/form-data">
            @method('PUT')
            @csrf
            <div class="form-group">
                <label class="required" for="amount">{{ trans('cruds.pengeluaran.fields.amount') }}</label>
                <input class="form-control {{ $errors->has('amount') ? 'is-invalid' : '' }}" type="number" name="amount" id="amount" value="{{ old('amount', $pengeluaran->amount) }}" step="0.01" required>
                @if($errors->has('amount'))
                    <div class="invalid-feedback">
                        {{ $errors->first('amount') }}
                    </div>
                @endif
                <span class="help-block">{{ trans('cruds.pengeluaran.fields.amount_helper') }}</span>
            </div>
            <div class="form-group">
                <label class="required" for="entry_date">{{ trans('cruds.pengeluaran.fields.entry_date') }}</label>
                <input class="form-control date {{ $errors->has('entry_date') ? 'is-invalid' : '' }}" type="text" name="entry_date" id="entry_date" value="{{ old('entry_date', $pengeluaran->entry_date) }}" required>
                @if($errors->has('entry_date'))
                    <div class="invalid-feedback">
                        {{ $errors->first('entry_date') }}
                    </div>
                @endif
                <span class="help-block">{{ trans('cruds.pengeluaran.fields.entry_date_helper') }}</span>
            </div>
            <div class="form-group">
                <label class="required">{{ trans('cruds.pengeluaran.fields.akun') }}</label>
                <select class="form-control {{ $errors->has('akun') ? 'is-invalid' : '' }}" name="akun" id="akun" required>
                    <option value disabled {{ old('akun', null) === null ? 'selected' : '' }}>{{ trans('global.pleaseSelect') }}</option>
                    @foreach(App\Models\Pengeluaran::AKUN_SELECT as $key => $label)
                        <option value="{{ $key }}" {{ old('akun', $pengeluaran->akun) === (string) $key ? 'selected' : '' }}>{{ $label }}</option>
                    @endforeach
                </select>
                @if($errors->has('akun'))
                    <div class="invalid-feedback">
                        {{ $errors->first('akun') }}
                    </div>
                @endif
                <span class="help-block">{{ trans('cruds.pengeluaran.fields.akun_helper') }}</span>
            </div>
            <div class="form-group">
                <label class="required" for="kategori">{{ trans('cruds.pengeluaran.fields.kategori') }}</label>
                <input class="form-control {{ $errors->has('kategori') ? 'is-invalid' : '' }}" type="text" name="kategori" id="kategori" value="{{ old('kategori', $pengeluaran->kategori) }}" required>
                @if($errors->has('kategori'))
                    <div class="invalid-feedback">
                        {{ $errors->first('kategori') }}
                    </div>
                @endif
                <span class="help-block">{{ trans('cruds.pengeluaran.fields.kategori_helper') }}</span>
            </div>
            <div class="form-group">
                <label for="description">{{ trans('cruds.pengeluaran.fields.description') }}</label>
                <input class="form-control {{ $errors->has('description') ? 'is-invalid' : '' }}" type="text" name="description" id="description" value="{{ old('description', $pengeluaran->description) }}">
                @if($errors->has('description'))
                    <div class="invalid-feedback">
                        {{ $errors->first('description') }}
                    </div>
                @endif
                <span class="help-block">{{ trans('cruds.pengeluaran.fields.description_helper') }}</span>
            </div>
            <div class="form-group">
                <button class="btn btn-danger" type="submit">
                    {{ trans('global.save') }}
                </button>
            </div>
        </form>
    </div>
</div>



@endsection