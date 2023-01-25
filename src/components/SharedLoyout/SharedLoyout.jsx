import { Outlet, NavLink } from 'react-router-dom';
import scss from './SharedLoyout.module.scss';

export const SharedLayout = () => (
  <>
    <header className={scss.page_header}>
      <div className={scss.container}>
        <nav className={scss.header_navigation}>
          <ul className={scss.header_navigation__list}>
            <li>
              <NavLink className={scss.header_navigation__item} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={scss.header_navigation__item} to="/movies">
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <body>
      <div className={scss.container}>
        <Outlet />
      </div>
    </body>
  </>
);
