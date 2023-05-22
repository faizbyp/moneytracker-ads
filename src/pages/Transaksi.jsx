/* eslint-disable max-len */
import { useContext, useEffect, useState } from 'react';
import Box from '../components/Box';
import TransaksiHistory from '../components/TransaksiHistory';
import { toDate, toRupiah, transaksi } from '../utils/constant';
import Pendapatan from '../assets/icons/Pendapatan.png';
import Pengeluaran from '../assets/icons/Pengeluaran.png';
import { getPendapatan, getPengeluaran } from '../services/userService';
import { UserContext } from '../components/UserProvider';
import Spinner from '../components/Spinner';

function Transaksi() {
  const user = useContext(UserContext);

  const [pendapatan, setPendapatan] = useState();
  const [pengeluaran, setPengeluaran] = useState();

  useEffect(() => {
    getPendapatan(user.id).then((response) => {
      setPendapatan(response.data);
    });
    getPengeluaran(user.id).then((response) => {
      setPengeluaran(response.data);
    });
  }, []);

  const handleDeletePendapatan = (id) => {
    alert(`pendapatan ${id}`);
  };

  const handleDeletePengeluaran = (id) => {
    alert(`pengeluaran ${id}`);
  };

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

      <header className="d-flex justify-content-between px-2 mb-2">
        <p className="fw-bold text-gray-50 m-0">Transaksi Terkini</p>
      </header>
      <Box>
        <div className="container ps-0 my-2">
          {(pendapatan && pengeluaran)
            ? transaksi(pendapatan, pengeluaran).map((item) => (
              <div
                className="row mb-3 align-items-center"
                onClick={item.type === 0 ? () => handleDeletePendapatan(item.id) : () => handleDeletePengeluaran(item.id)}
              >
                <div className="col-auto">
                  {item.type === 0
                    ? (<img src={Pendapatan} alt="" />) : <img src={Pengeluaran} alt="" />}
                </div>
                <div className="col ps-0">
                  <p className="m-0 text-capitalize">{item.kategori}</p>
                  <p className="m-0 text-gray-50">
                    <span className="fw-bold text-capitalize">
                      {item.akun}
                      {' - '}
                    </span>
                    {toDate(item.entry_date)}
                  </p>
                </div>
                <div className="col text-end">{toRupiah.format(item.amount)}</div>
              </div>
            )) : <Spinner /> }
        </div>
      </Box>
    </>
  );
}
export default Transaksi;
