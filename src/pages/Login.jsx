import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-secondary vh-100">
      <main className="bg-white rounded-5 w-75">
        <h1 className="my-4 text-center fw-bold">Log In</h1>
        <form className="mx-4">
          <div className="my-4">
            <input type="email" placeholder="email" className="form-control border-0 bg-gray-10" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="my-4">
            <input type="password" placeholder="password" className="form-control border-0 bg-gray-10" id="exampleInputPassword1" />
          </div>
          <Link to="/home" className="w-100 mb-5 btn btn-primary text-white rounded-3">LOGIN</Link>
        </form>
      </main>
      <section className="text-center mt-4">
        <Link to="/register" className="text-white">don&apos;t have an account? Register</Link>
      </section>
    </div>
  );
}
export default Login;
