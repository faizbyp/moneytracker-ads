import FormAdd from '../components/FormAdd';
import TitleWithBack from '../components/TitleWithBack';

function AddTransaksi() {
  return (
    <section className="px-3">
      <TitleWithBack title="Tambah Transaksi" />

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
    </section>
  );
}
export default AddTransaksi;
