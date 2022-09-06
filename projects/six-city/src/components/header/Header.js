import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../redux/api-create';
import {userAuth} from '../../mocks/constants';
import {styleLogout, styleAvatar} from './header-style';

const Header = () => {
  const {authorizationStatus, login} = useSelector((state) => state.LOAD_AUTH);

  const dispatch = useDispatch();

  const register = authorizationStatus === userAuth.AUTH;

  const handleClear = () => {
    dispatch(logout({
      login: null,
      password: null,
    }));
  };

  let address;

  if (register) {
    address = `/favorites`;
  } else {
    address = `/login`;
  }

  const avatar = register ? `` : `user__avatar-wrapper`;
  const stylevatar = register ? styleAvatar : {};

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link
                className="header__logo-link header__logo-link--active" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list" style={{position: `relative`}}>
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={address}>
                    <div className={`header__avatar-wrapper ${avatar}`} style={stylevatar} >
                    </div>
                    <span className="header__user-name user__name">
                      {register ?
                        (login) : (`Sign in`)
                      }
                    </span>
                  </Link>
                  {register && (
                    <button type="button" onClick={handleClear} style={styleLogout}>OUT</button>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
