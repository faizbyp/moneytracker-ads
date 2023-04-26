@extends('layouts.admin')
@section('content')
@can('tambah_tagihan_create')
    <div style="margin-bottom: 10px;" class="row">
        <div class="col-lg-12">
            <a class="btn btn-success" href="{{ route('admin.tambah-tagihans.create') }}">
                {{ trans('global.add') }} {{ trans('cruds.tambahTagihan.title_singular') }}
            </a>
        </div>
    </div>
@endcan
<div class="card">
    <div class="card-header">
        {{ trans('cruds.tambahTagihan.title_singular') }} {{ trans('global.list') }}
    </div>

    <div class="card-body">
        <div class="table-responsive">
            <table class=" table table-bordered table-striped table-hover datatable datatable-TambahTagihan">
                <thead>
                    <tr>
                        <th width="10">

                        </th>
                        <th>
                            {{ trans('cruds.tambahTagihan.fields.id') }}
                        </th>
                        <th>
                            {{ trans('cruds.tambahTagihan.fields.nama') }}
                        </th>
                        <th>
                            {{ trans('cruds.tambahTagihan.fields.amount') }}
                        </th>
                        <th>
                            {{ trans('cruds.tambahTagihan.fields.entry_date') }}
                        </th>
                        <th>
                            {{ trans('cruds.tambahTagihan.fields.description') }}
                        </th>
                        <th>
                            {{ trans('cruds.tambahTagihan.fields.tagihan_status') }}
                        </th>
                        <th>
                            &nbsp;
                        </th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($tambahTagihans as $key => $tambahTagihan)
                        <tr data-entry-id="{{ $tambahTagihan->id }}">
                            <td>

                            </td>
                            <td>
                                {{ $tambahTagihan->id ?? '' }}
                            </td>
                            <td>
                                {{ $tambahTagihan->nama ?? '' }}
                            </td>
                            <td>
                                {{ $tambahTagihan->amount ?? '' }}
                            </td>
                            <td>
                                {{ $tambahTagihan->entry_date ?? '' }}
                            </td>
                            <td>
                                {{ $tambahTagihan->description ?? '' }}
                            </td>
                            <td>
                                {{ App\Models\TambahTagihan::TAGIHAN_STATUS_SELECT[$tambahTagihan->tagihan_status] ?? '' }}
                            </td>
                            <td>
                                @can('tambah_tagihan_show')
                                    <a class="btn btn-xs btn-primary" href="{{ route('admin.tambah-tagihans.show', $tambahTagihan->id) }}">
                                        {{ trans('global.view') }}
                                    </a>
                                @endcan

                                @can('tambah_tagihan_edit')
                                    <a class="btn btn-xs btn-info" href="{{ route('admin.tambah-tagihans.edit', $tambahTagihan->id) }}">
                                        {{ trans('global.edit') }}
                                    </a>
                                @endcan

                                @can('tambah_tagihan_delete')
                                    <form action="{{ route('admin.tambah-tagihans.destroy', $tambahTagihan->id) }}" method="POST" onsubmit="return confirm('{{ trans('global.areYouSure') }}');" style="display: inline-block;">
                                        <input type="hidden" name="_method" value="DELETE">
                                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                                        <input type="submit" class="btn btn-xs btn-danger" value="{{ trans('global.delete') }}">
                                    </form>
                                @endcan

                            </td>

                        </tr>
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
@can('tambah_tagihan_delete')
  let deleteButtonTrans = '{{ trans('global.datatables.delete') }}'
  let deleteButton = {
    text: deleteButtonTrans,
    url: "{{ route('admin.tambah-tagihans.massDestroy') }}",
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
  let table = $('.datatable-TambahTagihan:not(.ajaxTable)').DataTable({ buttons: dtButtons })
  $('a[data-toggle="tab"]').on('shown.bs.tab click', function(e){
      $($.fn.dataTable.tables(true)).DataTable()
          .columns.adjust();
  });
  
})

</script>
@endsection
