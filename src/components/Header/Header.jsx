import React from 'react';
import "./Header.scss";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatars/21.png";

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
                <span className="messages-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#959595" xmlns="http://www.w3.org/2000/svg">
                    <g id="Icon/Outline/bell">
                    <path id="Mask" fill-rule="evenodd" clip-rule="evenodd" d="M5.5146 16L6.6946 14.818C7.0726 14.44 7.2806 13.938 7.2806 13.404V8.72699C7.2806 7.36999 7.8706 6.07299 8.9006 5.17099C9.9386 4.26099 11.2606 3.86099 12.6376 4.04199C14.9646 4.35099 16.7196 6.45499 16.7196 8.93699V13.404C16.7196 13.938 16.9276 14.44 17.3046 14.817L18.4856 16H5.5146ZM13.9996 18.341C13.9996 19.24 13.0836 20 11.9996 20C10.9156 20 9.9996 19.24 9.9996 18.341V18H13.9996V18.341ZM20.5206 15.208L18.7196 13.404V8.93699C18.7196 5.45599 16.2176 2.49899 12.8996 2.05999C10.9776 1.80399 9.0376 2.39099 7.5826 3.66699C6.1186 4.94899 5.2806 6.79299 5.2806 8.72699L5.2796 13.404L3.4786 15.208C3.0096 15.678 2.8706 16.377 3.1246 16.99C3.3796 17.604 3.9726 18 4.6366 18H7.9996V18.341C7.9996 20.359 9.7936 22 11.9996 22C14.2056 22 15.9996 20.359 15.9996 18.341V18H19.3626C20.0266 18 20.6186 17.604 20.8726 16.991C21.1276 16.377 20.9896 15.677 20.5206 15.208Z" fill="black"/>
                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="19" height="20">
                    <path id="Mask_2" fill-rule="evenodd" clip-rule="evenodd" d="M5.5146 16L6.6946 14.818C7.0726 14.44 7.2806 13.938 7.2806 13.404V8.72699C7.2806 7.36999 7.8706 6.07299 8.9006 5.17099C9.9386 4.26099 11.2606 3.86099 12.6376 4.04199C14.9646 4.35099 16.7196 6.45499 16.7196 8.93699V13.404C16.7196 13.938 16.9276 14.44 17.3046 14.817L18.4856 16H5.5146ZM13.9996 18.341C13.9996 19.24 13.0836 20 11.9996 20C10.9156 20 9.9996 19.24 9.9996 18.341V18H13.9996V18.341ZM20.5206 15.208L18.7196 13.404V8.93699C18.7196 5.45599 16.2176 2.49899 12.8996 2.05999C10.9776 1.80399 9.0376 2.39099 7.5826 3.66699C6.1186 4.94899 5.2806 6.79299 5.2806 8.72699L5.2796 13.404L3.4786 15.208C3.0096 15.678 2.8706 16.377 3.1246 16.99C3.3796 17.604 3.9726 18 4.6366 18H7.9996V18.341C7.9996 20.359 9.7936 22 11.9996 22C14.2056 22 15.9996 20.359 15.9996 18.341V18H19.3626C20.0266 18 20.6186 17.604 20.8726 16.991C21.1276 16.377 20.9896 15.677 20.5206 15.208Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0)">
                    <g id="&#240;&#159;&#142;&#168; Color">
                    <rect id="Base" width="24" height="24" fill="#959595"/>
                    </g>
                    </g>
                    </g>
                  </svg>
                </span>
                <span>
                  Сообщений нет
                </span>
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