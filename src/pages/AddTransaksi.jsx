import { Link } from 'react-router-dom';
import Back from '../assets/icons/Back.svg';
import FormAdd from '../components/FormAdd';

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

        <ul className="nav nav-underline nav-justified" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#pendapatan-tab-pane" type="button" role="tab" aria-controls="pendapatan-tab-pane" aria-selected="true">Pendapatan</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#pengeluaran-tab-pane" type="button" role="tab" aria-controls="pengeluaran-tab-pane" aria-selected="false">Pengeluaran</button>
          </li>
        </ul>

        <div className="tab-content" id="myTabContent">

          <div className="tab-pane fade show active" id="pendapatan-tab-pane" role="tabpanel" aria-labelledby="pendapatan-tab" tabIndex="0">
            <FormAdd />
          </div>

          <div className="tab-pane fade" id="pengeluaran-tab-pane" role="tabpanel" aria-labelledby="pengeluaran-tab" tabIndex="0">
            <FormAdd />
          </div>
        </div>
      </main>
    </>
  );
}
export default AddTransaksi;
