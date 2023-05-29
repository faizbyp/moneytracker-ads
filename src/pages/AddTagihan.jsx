import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Box from '../components/Box';
import TitleWithBack from '../components/TitleWithBack';
import { postTagihan } from '../services/userService';
import { UserContext } from '../components/UserProvider';

function AddTagihan() {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await postTagihan(formData).then(navigate('/home/tagihan')).catch((error) => alert(error));
  };

  return (
    <>
      <TitleWithBack title="Tambah Tagihan" />

      <Box>
        <form className="my-4 text-gray-50" onSubmit={handleSubmit}>
          <input type="text" name="username_id" value={user.id} className="visually-hidden" />
          <div className="d-flex align-items-center mb-3">
            <label className="form-label d-inline m-0 me-2">Nama</label>
            <input name="nama" type="text" className="form-control border-0 border-bottom bg-transparent shadow-none" />
          </div>
          <div className="d-flex align-items-center mb-3">
            <label className="form-label d-inline m-0 me-2">Jumlah</label>
            <input name="amount" type="text" className="form-control border-0 border-bottom bg-transparent shadow-none" />
          </div>
          <div className="d-flex align-items-center mb-3">
            <label className="form-label d-inline m-0 me-2">Tanggal</label>
            <input name="entry_date" type="date" className="form-control border-0 border-bottom bg-transparent shadow-none" />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary rounded-pill px-5 py-2">Simpan</button>
          </div>
        </form>
      </Box>
    </>
  );
}
export default AddTagihan;
