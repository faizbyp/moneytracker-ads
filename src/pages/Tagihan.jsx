import { Link } from 'react-router-dom';
import Plus from '../assets/icons/PlusTransaction.svg';

function Tagihan() {
  return (
    <>
      <header className="d-flex align-items-center py-3">
        <h1 className="m-0">Tagihan</h1>
      </header>

      <main className="bg-white rounded-5 p-3 mb-4">

        <ul className="nav nav-underline nav-justified" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#pendapatan-tab-pane" type="button" role="tab" aria-controls="pendapatan-tab-pane" aria-selected="true">Aktif</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#pengeluaran-tab-pane" type="button" role="tab" aria-controls="pengeluaran-tab-pane" aria-selected="false">Selesai</button>
          </li>
        </ul>

        <div className="tab-content" id="myTabContent">

          <div className="tab-pane fade show active" id="pendapatan-tab-pane" role="tabpanel" aria-labelledby="pendapatan-tab" tabIndex="0">
            <p className="my-3 text-gray-50">
              Memantau tagihan berulang Anda seperti listrik,
              sewa, langganan internet, dll.
            </p>
            <div className="text-end">
              <Link to="/home"><img src={Plus} height={64} alt="" /></Link>
            </div>
          </div>

          <div className="tab-pane fade" id="pengeluaran-tab-pane" role="tabpanel" aria-labelledby="pengeluaran-tab" tabIndex="0">
            <p className="my-3 text-gray-50">
              Tidak ada tagihan yang sudah selesai
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
export default Tagihan;
