function TransaksiHistory() {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col text-gray-50">
          Pemasukan
        </div>
        <div className="col text-end text-secondary">
          0
        </div>
      </div>
      <div className="row">
        <div className="col text-gray-50">
          Pengeluaran
        </div>
        <div className="col text-end text-red">
          0
        </div>
      </div>
      <div className="row">
        <div className="col" />
        <div className="col text-end">
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col" />
        <div className="col text-end">
          0
        </div>
      </div>
    </div>
  );
}
export default TransaksiHistory;
