import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../services/authService';

function Register() {
  const [isError, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await register(formData)
      .then(() => (navigate('/')))
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-secondary vh-100">
      <main className="bg-white rounded-5 w-75">
        <h1 className="my-4 text-center fw-bold">Register</h1>
        <form className="mx-4" onSubmit={handleSubmit}>
          <div className="my-4">
            <input type="text" name="name" placeholder="name" className="form-control border-0 bg-gray-10" />
          </div>
          <div className="my-4">
            <input type="email" name="email" placeholder="email" className="form-control border-0 bg-gray-10" />
          </div>
          <div className="my-4">
            <input type="password" name="password" placeholder="password" className="form-control border-0 bg-gray-10" />
          </div>
          <button type="submit" className="w-100 mb-4 btn btn-primary text-white rounded-3">REGISTER</button>
          {isError && (
          <p className="text-red text-center">Error</p>
          )}
        </form>
      </main>
      <section className="text-center mt-4">
        <Link to="/" className="text-white">Login</Link>
      </section>
    </div>
  );
}
export default Register;
