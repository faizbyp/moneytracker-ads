import Box from '../components/Box';
import TitleWithBack from '../components/TitleWithBack';

function AddTagihan() {
  return (
    <>
      <TitleWithBack title="Tambah Tagihan" />

      <Box>
        <form className="my-4 text-gray-50">
          <div className="d-flex align-items-center mb-3">
            <label className="form-label d-inline m-0 me-2">Nama</label>
            <input name="nama" type="text" className="form-control border-0 border-bottom bg-transparent shadow-none" />
          </div>
          <div className="d-flex align-items-center mb-3">
            <label className="form-label d-inline m-0 me-2">Jumlah</label>
            <input name="jumlah" type="text" className="form-control border-0 border-bottom bg-transparent shadow-none" />
          </div>
          <div className="d-flex align-items-center mb-3">
            <label className="form-label d-inline m-0 me-2">Tanggal</label>
            <input name="tanggal" type="date" className="form-control border-0 border-bottom bg-transparent shadow-none" />
          </div>
          <div className="d-flex align-items-center mb-3">
            <label className="form-label d-inline m-0 me-2">Catatan</label>
            <input name="jumlah" type="text" className="form-control border-0 border-bottom bg-transparent shadow-none" />
          </div>
          <div className="text-center">
            <button type="button" className="btn btn-primary rounded-pill px-5 py-2">Simpan</button>
          </div>
        </form>
      </Box>
    </>
  );
}
export default AddTagihan;
