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

      <ul className="nav nav-tabs nav-fill" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#pendapatan-tab-pane" type="button" role="tab" aria-controls="pendapatan-tab-pane" aria-selected="true">Pendapatan</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#pengeluaran-tab-pane" type="button" role="tab" aria-controls="pengeluaran-tab-pane" aria-selected="false">Profile</button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="pendapatan-tab-pane" role="tabpanel" aria-labelledby="pendapatan-tab" tabIndex="0">
          <h3 className="py-3 text-center">Tab Pendapatan</h3>
        </div>
        <div className="tab-pane fade" id="pengeluaran-tab-pane" role="tabpanel" aria-labelledby="pengeluaran-tab" tabIndex="0">
          <h3 className="py-3 text-center">Tab Pengeluaran</h3>
        </div>
      </div>
    </>
  );
}
export default AddTransaksi;
