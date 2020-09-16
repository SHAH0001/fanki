import React from 'react';
import "./Header.scss";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatars/21.png";
// import bell from "../../assets/icons/bell.svg";

const Header = () => {
return (
  <header className="header">
    <div className="container">
      <div className="header-wrapper">
        <a className="logo" href="#">
          <img src={logo} alt="" />
        </a>
        <div className="information-user">
          <div className="messages-wrapper">
            <a href="#" className="messages">
                Сообщений нет
            </a>
          </div>
          <div className="user-account">
            <div className="user-info">
              <h4 className="user-name">Александров Александр</h4>
              <h5 className="user-profession">Генеральный директор</h5>
            </div>
            <a className="user-avatar" href="#">
                <img src={avatar} alt="" />
            </a>
            <button className="user-info-dropdown" type="button"></button>
          </div>
        </div>
      </div>
    </div>
  </header>
);
}

export default Header;