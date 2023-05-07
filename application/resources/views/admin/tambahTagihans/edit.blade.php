@extends('layouts.admin')
@section('content')

<div class="card">
    <div class="card-header">
        {{ trans('global.edit') }} {{ trans('cruds.tambahTagihan.title_singular') }}
    </div>

    <div class="card-body">
        <form method="POST" action="{{ route("admin.tambah-tagihans.update", [$tambahTagihan->id]) }}" enctype="multipart/form-data">
            @method('PUT')
            @csrf
            <div class="form-group">
                <label class="required" for="nama">{{ trans('cruds.tambahTagihan.fields.nama') }}</label>
                <input class="form-control {{ $errors->has('nama') ? 'is-invalid' : '' }}" type="text" name="nama" id="nama" value="{{ old('nama', $tambahTagihan->nama) }}" required>
                @if($errors->has('nama'))
                    <div class="invalid-feedback">
                        {{ $errors->first('nama') }}
                    </div>
                @endif
                <span class="help-block">{{ trans('cruds.tambahTagihan.fields.nama_helper') }}</span>
            </div>
            <div class="form-group">
                <label class="required" for="amount">{{ trans('cruds.tambahTagihan.fields.amount') }}</label>
                <input class="form-control {{ $errors->has('amount') ? 'is-invalid' : '' }}" type="number" name="amount" id="amount" value="{{ old('amount', $tambahTagihan->amount) }}" step="0.01" required>
                @if($errors->has('amount'))
                    <div class="invalid-feedback">
                        {{ $errors->first('amount') }}
                    </div>
                @endif
                <span class="help-block">{{ trans('cruds.tambahTagihan.fields.amount_helper') }}</span>
            </div>
            <div class="form-group">
                <label class="required" for="entry_date">{{ trans('cruds.tambahTagihan.fields.entry_date') }}</label>
                <input class="form-control date {{ $errors->has('entry_date') ? 'is-invalid' : '' }}" type="text" name="entry_date" id="entry_date" value="{{ old('entry_date', $tambahTagihan->entry_date) }}" required>
                @if($errors->has('entry_date'))
                    <div class="invalid-feedback">
                        {{ $errors->first('entry_date') }}
                    </div>
                @endif
                <span class="help-block">{{ trans('cruds.tambahTagihan.fields.entry_date_helper') }}</span>
            </div>
            <div class="form-group">
                <label for="description">{{ trans('cruds.tambahTagihan.fields.description') }}</label>
                <input class="form-control {{ $errors->has('description') ? 'is-invalid' : '' }}" type="text" name="description" id="description" value="{{ old('description', $tambahTagihan->description) }}">
                @if($errors->has('description'))
                    <div class="invalid-feedback">
                        {{ $errors->first('description') }}
                    </div>
                @endif
                <span class="help-block">{{ trans('cruds.tambahTagihan.fields.description_helper') }}</span>
            </div>
            <div class="form-group">
                <label>{{ trans('cruds.tambahTagihan.fields.tagihan_status') }}</label>
                <select class="form-control {{ $errors->has('tagihan_status') ? 'is-invalid' : '' }}" name="tagihan_status" id="tagihan_status">
                    <option value disabled {{ old('tagihan_status', null) === null ? 'selected' : '' }}>{{ trans('global.pleaseSelect') }}</option>
                    @foreach(App\Models\TambahTagihan::TAGIHAN_STATUS_SELECT as $key => $label)
                        <option value="{{ $key }}" {{ old('tagihan_status', $tambahTagihan->tagihan_status) === (string) $key ? 'selected' : '' }}>{{ $label }}</option>
                    @endforeach
                </select>
                @if($errors->has('tagihan_status'))
                    <div class="invalid-feedback">
                        {{ $errors->first('tagihan_status') }}
                    </div>
                @endif
                <span class="help-block">{{ trans('cruds.tambahTagihan.fields.tagihan_status_helper') }}</span>
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