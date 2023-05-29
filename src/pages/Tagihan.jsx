/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import Plus from '../assets/icons/PlusTransaction.svg';
import Box from '../components/Box';
import { UserContext } from '../components/UserProvider';
import { getTagihan } from '../services/userService';
import Spinner from '../components/Spinner';

function Tagihan() {
  const user = useContext(UserContext);

  const [tagihan, setTagihan] = useState();

  useEffect(() => {
    getTagihan(user.id).then((response) => {
      setTagihan(response.data);
    });
  }, []);

  return (
    <>
      <header className="d-flex align-items-center py-3">
        <h1 className="m-0">Tagihan</h1>
      </header>

      <Box>

        {/* <ul className="nav nav-underline nav-justified" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#pendapatan-tab-pane" type="button" role="tab" aria-controls="pendapatan-tab-pane" aria-selected="true">Aktif</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#pengeluaran-tab-pane" type="button" role="tab" aria-controls="pengeluaran-tab-pane" aria-selected="false">Selesai</button>
          </li>
        </ul> */}

        <div className="my-2 container">
          {tagihan ? (
            tagihan.map((item) => (
              <>
                <div className="row row-cols-2 align-items-center">
                  <div className="col">
                    <p className="fw-bold d-inline">{item.nama}</p>
                  </div>
                  <div className="col text-end">
                    <button type="button" className="btn btn-red text-uppercase">Bayar</button>
                  </div>
                </div>
                <hr />
              </>
            ))
          ) : <Spinner />}
        </div>

        <div className="text-end">
          <Link to="add"><img src={Plus} height={64} alt="" /></Link>
        </div>

        {/* <div className="tab-content" id="myTabContent">

          <div className="tab-pane fade show active" id="pendapatan-tab-pane" role="tabpanel" aria-labelledby="pendapatan-tab" tabIndex="0">
            <p className="my-3 text-gray-50">
              Memantau tagihan berulang Anda seperti listrik,
              sewa, langganan internet, dll.
            </p>
            <div className="text-end">
              <Link to="add"><img src={Plus} height={64} alt="" /></Link>
            </div>
          </div>

          <div className="tab-pane fade" id="pengeluaran-tab-pane" role="tabpanel" aria-labelledby="pengeluaran-tab" tabIndex="0">
            <p className="my-3 text-gray-50">
              Tidak ada tagihan yang sudah selesai
            </p>
          </div>
        </div> */}
      </Box>
    </>
  );
}
export default Tagihan;
