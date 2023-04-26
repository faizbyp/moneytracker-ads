@extends('layouts.admin')
@section('content')
@can('pendapatan_create')
    <div style="margin-bottom: 10px;" class="row">
        <div class="col-lg-12">
            <a class="btn btn-success" href="{{ route('admin.pendapatans.create') }}">
                {{ trans('global.add') }} {{ trans('cruds.pendapatan.title_singular') }}
            </a>
        </div>
    </div>
@endcan
<div class="card">
    <div class="card-header">
        {{ trans('cruds.pendapatan.title_singular') }} {{ trans('global.list') }}
    </div>

    <div class="card-body">
        <div class="table-responsive">
            <table class=" table table-bordered table-striped table-hover datatable datatable-Pendapatan">
                <thead>
                    <tr>
                        <th width="10">

                        </th>
                        <th>
                            {{ trans('cruds.pendapatan.fields.id') }}
                        </th>
                        <th>
                            {{ trans('cruds.pendapatan.fields.amount') }}
                        </th>
                        <th>
                            {{ trans('cruds.pendapatan.fields.entry_date') }}
                        </th>
                        <th>
                            {{ trans('cruds.pendapatan.fields.akun') }}
                        </th>
                        <th>
                            {{ trans('cruds.pendapatan.fields.kategori') }}
                        </th>
                        <th>
                            {{ trans('cruds.pendapatan.fields.description') }}
                        </th>
                        <th>
                            &nbsp;
                        </th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($pendapatans as $key => $pendapatan)
                        <tr data-entry-id="{{ $pendapatan->id }}">
                            <td>

                            </td>
                            <td>
                                {{ $pendapatan->id ?? '' }}
                            </td>
                            <td>
                                {{ $pendapatan->amount ?? '' }}
                            </td>
                            <td>
                                {{ $pendapatan->entry_date ?? '' }}
                            </td>
                            <td>
                                {{ App\Models\Pendapatan::AKUN_SELECT[$pendapatan->akun] ?? '' }}
                            </td>
                            <td>
                                {{ $pendapatan->kategori ?? '' }}
                            </td>
                            <td>
                                {{ $pendapatan->description ?? '' }}
                            </td>
                            <td>
                                @can('pendapatan_show')
                                    <a class="btn btn-xs btn-primary" href="{{ route('admin.pendapatans.show', $pendapatan->id) }}">
                                        {{ trans('global.view') }}
                                    </a>
                                @endcan

                                @can('pendapatan_edit')
                                    <a class="btn btn-xs btn-info" href="{{ route('admin.pendapatans.edit', $pendapatan->id) }}">
                                        {{ trans('global.edit') }}
                                    </a>
                                @endcan

                                @can('pendapatan_delete')
                                    <form action="{{ route('admin.pendapatans.destroy', $pendapatan->id) }}" method="POST" onsubmit="return confirm('{{ trans('global.areYouSure') }}');" style="display: inline-block;">
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
@can('pendapatan_delete')
  let deleteButtonTrans = '{{ trans('global.datatables.delete') }}'
  let deleteButton = {
    text: deleteButtonTrans,
    url: "{{ route('admin.pendapatans.massDestroy') }}",
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
  let table = $('.datatable-Pendapatan:not(.ajaxTable)').DataTable({ buttons: dtButtons })
  $('a[data-toggle="tab"]').on('shown.bs.tab click', function(e){
      $($.fn.dataTable.tables(true)).DataTable()
          .columns.adjust();
  });
  
})

</script>
@endsection