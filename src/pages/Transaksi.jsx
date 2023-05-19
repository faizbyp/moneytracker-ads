/* eslint-disable max-len */
import Box from '../components/Box';
import TransaksiHistory from '../components/TransaksiHistory';

function Transaksi() {
  return (
    <>
      <header className="d-flex align-items-center py-3">
        <h1 className="m-0">Transaksi</h1>
      </header>

      <Box>

        {/* <ul className="nav nav-underline nav-justified" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#past-tab-pane" type="button" role="tab" aria-controls="past-tab-pane" aria-selected="true">Bulan Lalu</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#present-tab-pane" type="button" role="tab" aria-controls="present-tab-pane" aria-selected="false">Bulan Ini</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#future-tab-pane" type="button" role="tab" aria-controls="future-tab-pane" aria-selected="false">Masa Depan</button>
          </li>
        </ul>

        <div className="tab-content" id="myTabContent">

          <div className="tab-pane fade" id="past-tab-pane" role="tabpanel" aria-labelledby="past-tab" tabIndex="0">
            <TransaksiHistory />
          </div>

          <div className="tab-pane fade show active" id="present-tab-pane" role="tabpanel" aria-labelledby="present-tab" tabIndex="0">
            <TransaksiHistory />
          </div>

          <div className="tab-pane fade" id="future-tab-pane" role="tabpanel" aria-labelledby="future-tab" tabIndex="0">
            <TransaksiHistory />
          </div>
        </div> */}

        <TransaksiHistory />

      </Box>
    </>
  );
}
export default Transaksi;
