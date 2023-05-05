import { Link } from 'react-router-dom';
import Back from '../assets/icons/Back.svg';

function AddTransaksi() {
  return (
    <>
      <header className="d-flex align-items-center py-3">
        <Link to="/home">
          <img src={Back} alt="" className="img-fluid me-4" width={32} />
        </Link>
        <h1 className="m-0">Tambah Transaksi</h1>
      </header>

      <main className="bg-white rounded-5 p-3 mb-4">

        <ul className="nav nav-tabs nav-fill" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#pendapatan-tab-pane" type="button" role="tab" aria-controls="pendapatan-tab-pane" aria-selected="true">Pendapatan</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#pengeluaran-tab-pane" type="button" role="tab" aria-controls="pengeluaran-tab-pane" aria-selected="false">Pengeluaran</button>
          </li>
        </ul>

        <div className="tab-content" id="myTabContent">

          <div className="tab-pane fade show active" id="pendapatan-tab-pane" role="tabpanel" aria-labelledby="pendapatan-tab" tabIndex="0">
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
          </div>

          <div className="tab-pane fade" id="pengeluaran-tab-pane" role="tabpanel" aria-labelledby="pengeluaran-tab" tabIndex="0">
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
          </div>
        </div>
      </main>
    </>
  );
}
export default AddTransaksi;
