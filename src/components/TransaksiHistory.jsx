import { useContext, useEffect, useState } from 'react';
import { getPendapatan, getPengeluaran } from '../services/userService';
import { UserContext } from './UserProvider';
import Spinner from './Spinner';
import { toRupiah } from '../utils/constant';

function TransaksiHistory() {
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

  function calculateTotal(transaction) {
    let total = 0;
    transaction.forEach((item) => {
      total += parseInt(item.amount, 10);
    });
    return total;
  }

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col text-gray-50">
          Pemasukan
        </div>
        <div className="col text-end text-secondary">
          {pendapatan && toRupiah.format(calculateTotal(pendapatan))}
        </div>
      </div>
      <div className="row">
        <div className="col text-gray-50">
          Pengeluaran
        </div>
        <div className="col text-end text-red">
          {pengeluaran && toRupiah.format(calculateTotal(pengeluaran))}
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
          {(pendapatan && pengeluaran)
            ? toRupiah.format(calculateTotal(pendapatan) - calculateTotal(pengeluaran))
            : <Spinner />}
        </div>
      </div>
    </div>
  );
}
export default TransaksiHistory;
