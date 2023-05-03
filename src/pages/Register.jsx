import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-secondary vh-100">
      <main className="bg-white rounded-5 w-75">
        <h1 className="my-4 text-center fw-bold">Register</h1>
        <form className="mx-4">
          <div className="my-4">
            <input type="email" placeholder="email" className="form-control border-0 bg-gray-10" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="my-4">
            <input type="password" placeholder="password" className="form-control border-0 bg-gray-10" id="exampleInputPassword1" />
          </div>
          <button type="button" className="w-100 mb-5 btn btn-primary text-white rounded-3">REGISTER</button>
        </form>
      </main>
      <section className="text-center mt-4">
        <Link to="/" className="text-white">Login</Link>
      </section>
    </div>
  );
}
export default Register;
