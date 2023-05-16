@extends('layouts.admin')
@section('content')
@can('pengeluaran_create')
    <div style="margin-bottom: 10px;" class="row">
        <div class="col-lg-12">
            <a class="btn btn-success" href="{{ route('admin.pengeluarans.create') }}">
                {{ trans('global.add') }} {{ trans('cruds.pengeluaran.title_singular') }}
            </a>
        </div>
    </div>
@endcan
<div class="card">
    <div class="card-header">
        {{ trans('cruds.pengeluaran.title_singular') }} {{ trans('global.list') }}
    </div>

    <div class="card-body">
        <div class="table-responsive">
            <h1>User ID: {{  Auth::id(); }}</h1>

            <table class=" table table-bordered table-striped table-hover datatable datatable-Pengeluaran">
                <thead>
                    <tr>
                        <th width="10">

                        </th>
                        <th>
                            {{ trans('cruds.pengeluaran.fields.id') }}
                        </th>
                        <th>
                            {{ trans('cruds.pengeluaran.fields.amount') }}
                        </th>
                        <th>
                            {{ trans('cruds.pengeluaran.fields.entry_date') }}
                        </th>
                        <th>
                            {{ trans('cruds.pengeluaran.fields.akun') }}
                        </th>
                        <th>
                            {{ trans('cruds.pengeluaran.fields.kategori') }}
                        </th>
                        <th>
                            {{ trans('cruds.pengeluaran.fields.description') }}
                        </th>
                        <th>
                            {{ trans('cruds.pengeluaran.fields.username_id') }}
                        </th>
                        <th>
                            &nbsp;
                        </th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($pengeluarans as $key => $pengeluaran)
                        @if($pengeluaran->username_id == Auth::id())
                        <tr data-entry-id="{{ $pengeluaran->id }}">
                            <td>

                            </td>
                            <td>
                                {{ $pengeluaran->id ?? '' }}
                            </td>
                            <td>
                                {{ $pengeluaran->amount ?? '' }}
                            </td>
                            <td>
                                {{ $pengeluaran->entry_date ?? '' }}
                            </td>
                            <td>
                                {{ App\Models\Pengeluaran::AKUN_SELECT[$pengeluaran->akun] ?? '' }}
                            </td>
                            <td>
                                {{ $pengeluaran->kategori ?? '' }}
                            </td>
                            <td>
                                {{ $pengeluaran->description ?? '' }}
                            </td>
                            <td>
                                {{ $pengeluaran->username_id ?? '' }}
                            </td>
                            <td>
                                @can('pengeluaran_show')
                                    <a class="btn btn-xs btn-primary" href="{{ route('admin.pengeluarans.show', $pengeluaran->id) }}">
                                        {{ trans('global.view') }}
                                    </a>
                                @endcan

                                @can('pengeluaran_edit')
                                    <a class="btn btn-xs btn-info" href="{{ route('admin.pengeluarans.edit', $pengeluaran->id) }}">
                                        {{ trans('global.edit') }}
                                    </a>
                                @endcan

                                @can('pengeluaran_delete')
                                    <form action="{{ route('admin.pengeluarans.destroy', $pengeluaran->id) }}" method="POST" onsubmit="return confirm('{{ trans('global.areYouSure') }}');" style="display: inline-block;">
                                        <input type="hidden" name="_method" value="DELETE">
                                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                                        <input type="submit" class="btn btn-xs btn-danger" value="{{ trans('global.delete') }}">
                                    </form>
                                @endcan

                            </td>

                        </tr>
                        @endif    
                    @endforeach
                    
                </tbody>
            </table>
        </div>
    </div>
</div>



@endsection
@section('scripts')
@parent
<script>
    $(function () {
  let dtButtons = $.extend(true, [], $.fn.dataTable.defaults.buttons)
@can('pengeluaran_delete')
  let deleteButtonTrans = '{{ trans('global.datatables.delete') }}'
  let deleteButton = {
    text: deleteButtonTrans,
    url: "{{ route('admin.pengeluarans.massDestroy') }}",
    className: 'btn-danger',
    action: function (e, dt, node, config) {
      var ids = $.map(dt.rows({ selected: true }).nodes(), function (entry) {
          return $(entry).data('entry-id')
      });

      if (ids.length === 0) {
        alert('{{ trans('global.datatables.zero_selected') }}')

        return
      }

      if (confirm('{{ trans('global.areYouSure') }}')) {
        $.ajax({
          headers: {'x-csrf-token': _token},
          method: 'POST',
          url: config.url,
          data: { ids: ids, _method: 'DELETE' }})
          .done(function () { location.reload() })
      }
    }
  }
  dtButtons.push(deleteButton)
@endcan

  $.extend(true, $.fn.dataTable.defaults, {
    orderCellsTop: true,
    order: [[ 1, 'desc' ]],
    pageLength: 100,
  });
  let table = $('.datatable-Pengeluaran:not(.ajaxTable)').DataTable({ buttons: dtButtons })
  $('a[data-toggle="tab"]').on('shown.bs.tab click', function(e){
      $($.fn.dataTable.tables(true)).DataTable()
          .columns.adjust();
  });
  
})

</script>
@endsection