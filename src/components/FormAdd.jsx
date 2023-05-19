import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { postPendapatan, postPengeluaran } from '../services/userService';
import { UserContext } from './UserProvider';

function FormAdd({ isPendapatan }) {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  const handlePendapatan = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await postPendapatan(formData).then(navigate('/home')).catch((error) => alert(error));
  };

  const handlePengeluaran = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    postPengeluaran(formData).then(navigate('/home'));
  };

  return (
    <form className="my-4 text-gray-50" onSubmit={isPendapatan ? handlePendapatan : handlePengeluaran}>
      <input type="text" name="username_id" value={user.id} className="visually-hidden" />
      <div className="d-flex align-items-center mb-3">
        <label className="form-label d-inline m-0 me-2">Tanggal</label>
        <input name="entry_date" type="date" className="form-control border-0 border-bottom bg-transparent shadow-none" />
      </div>
      <div className="d-flex align-items-center mb-3">
        <label className="form-label d-inline m-0 me-2">Jumlah</label>
        <input name="amount" type="numeric" inputMode="numeric" className="form-control border-0 border-bottom bg-transparent shadow-none" />
      </div>
      <div className="d-flex align-items-center mb-3">
        <label className="form-label d-inline m-0 me-2">Kategori</label>
        <input name="kategori" type="text" className="form-control border-0 border-bottom bg-transparent shadow-none" />
      </div>
      <div className="d-flex align-items-center mb-3">
        <label className="form-label d-inline m-0 me-2">Akun</label>
        <select name="akun" className="form-select border-0 border-bottom bg-transparent shadow-none" aria-label="Default select example">
          <option selected />
          <option value="dompet">Dompet</option>
          <option value="e-money">E-Money</option>
        </select>
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-primary rounded-pill px-5 py-2">Simpan</button>
      </div>
    </form>
  );
}
export default FormAdd;
