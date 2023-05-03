function Login() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-green vh-100">
      <main className="bg-white rounded-5 w-75">
        <h1 className="my-4 text-center fw-bold">Log In</h1>
        <form className="mx-4">
          <div className="my-4">
            <input type="email" placeholder="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="my-4">
            <input type="password" placeholder="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="button" className="w-100 mb-5 btn btn-orange text-white rounded-3">Login</button>
        </form>
      </main>
      <section className="text-center my-4">
        <a href="/" className="text-white">don&apos;t have an account? Register</a>
      </section>
    </div>
  );
}
export default Login;
