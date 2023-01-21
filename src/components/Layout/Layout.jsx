import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header className="mb-5">
        <nav className="navbar bg-dark" data-bs-theme="dark">
          <ul className="navbar-nav mb-2 mb-lg-0 flex-row gap-5 ms-5 fs-2">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="movies" className="nav-link">
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
