function FormAdd() {
  return (
    <form className="my-4 text-gray-50">
      <div className="d-flex align-items-center mb-3">
        <label className="form-label d-inline m-0 me-2">Tanggal</label>
        <input name="tanggal" type="date" className="form-control border-0 border-bottom bg-transparent shadow-none" />
      </div>
      <div className="d-flex align-items-center mb-3">
        <label className="form-label d-inline m-0 me-2">Jumlah</label>
        <input name="jumlah" type="text" className="form-control border-0 border-bottom bg-transparent shadow-none" />
      </div>
      <div className="d-flex align-items-center mb-3">
        <label className="form-label d-inline m-0 me-2">Kategori</label>
        <select className="form-select border-0 border-bottom bg-transparent shadow-none" aria-label="Default select example">
          <option selected />
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="d-flex align-items-center mb-3">
        <label className="form-label d-inline m-0 me-2">Akun</label>
        <select className="form-select border-0 border-bottom bg-transparent shadow-none" aria-label="Default select example">
          <option selected />
          <option value="1">Dompet</option>
          <option value="2">Rekening</option>
        </select>
      </div>
      <div className="d-flex align-items-center mb-3">
        <label className="form-label d-inline m-0 me-2">Catatan</label>
        <input name="jumlah" type="text" className="form-control border-0 border-bottom bg-transparent shadow-none" />
      </div>
      <div className="text-center">
        <button type="button" className="btn btn-primary rounded-pill px-5 py-2">Simpan</button>
      </div>
    </form>
  );
}
export default FormAdd;
