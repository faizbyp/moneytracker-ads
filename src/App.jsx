import { BrowserRouter, Route, Routes } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import { Analytics } from '@vercel/analytics/react';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Tagihan from './pages/Tagihan';
import Transaksi from './pages/Transaksi';
import Akun from './pages/Akun';
import Navbar from './components/Navbar';
import AddTransaksi from './pages/AddTransaksi';
import AddTagihan from './pages/AddTagihan';
import { isLoggedIn } from './utils/cookiesManager';
import Protected from './components/Protected';

function App() {
  return (
    <>
      <BrowserRouter>
        <main className="bg-gray-5 px-3 min-vh-100">
          <Routes>
            <Route index path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/home"
              element={(
                <Protected isLoggedIn={isLoggedIn}>
                  <Navbar />
                </Protected>
              )}
            >
              <Route index element={<Home />} />
              <Route path="tagihan" element={<Tagihan />} />
              <Route path="tagihan/add" element={<AddTagihan />} />
              <Route path="transaksi" element={<Transaksi />} />
              <Route path="transaksi/add" element={<AddTransaksi />} />
              <Route path="akun" element={<Akun />} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
      <Analytics />
    </>
  );
}

export default App;
