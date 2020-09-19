import React from 'react';
import "./Notifications.scss";
import avatar_12 from "../../assets/avatars/12.png";
import avatar_13 from "../../assets/avatars/13.png";



const Notifications = () => {
return (
  <div className="ewn-item notifications">
    <div className="ewn-item-title">
      <span className="ewn-title">Уведомления</span>
      <span className="ewn-count">2</span>
    </div>
    <div className="ewn-item-body">
      <div className="notifications-wrapper">
        <div className="notification-item">
          <a className="notification-user-avatar" href="#">
            <img src={avatar_12} alt="" />
          </a>
          <div className="notification-content">
            <div className="notification-user-name-and-time">
              <a href="#" className="notification-user-name">
                Владимиров Владимир
              </a>
              <span className="notification-time">9:22</span>
            </div>
            <span className="notification-what-user-does">
              Назначает вам задачу
            </span>
            <p className="notification-description">
              Подготовить обновлённую презентацию разработанного продукта
            </p>
          </div>
        </div>

        <div className="notification-item">
          <a className="notification-user-avatar" href="#">
            <img src={avatar_13} alt="" />
          </a>
          <div className="notification-content">
            <div className="notification-user-name-and-time">
              <a href="#" className="notification-user-name">
                Владимиров Владимир
              </a>
              <span className="notification-time">9:22</span>
            </div>
            <span className="notification-what-user-does">создает событие</span>
            <p className="notification-description">
              Подготовить обновлённую презентацию разработанного продукта
            </p>
            <div className="notification-tags">
              <span className="notification-tag">Групповое событие</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="ewn-item-footer">
      <a href="#">
        <span>Уведомления</span>
        <span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Icon/Outline/arrow-right">
              <path id="Mask" fill-rule="evenodd" clip-rule="evenodd" d="M5 13H16.865L13.232 17.36C12.878 17.784 12.936 18.415 13.36 18.768C13.785 19.122 14.415 19.064 14.769 18.64L19.769 12.64C19.808 12.593 19.827 12.538 19.856 12.486C19.88 12.444 19.909 12.408 19.927 12.362C19.972 12.247 19.999 12.126 19.999 12.004C19.999 12.003 20 12.001 20 12C20 11.999 19.999 11.997 19.999 11.996C19.999 11.874 19.972 11.753 19.927 11.638C19.909 11.592 19.88 11.556 19.856 11.514C19.827 11.462 19.808 11.407 19.769 11.36L14.769 5.36C14.57 5.123 14.286 5 14 5C13.774 5 13.547 5.076 13.36 5.232C12.936 5.585 12.878 6.216 13.232 6.64L16.865 11H5C4.448 11 4 11.448 4 12C4 12.552 4.448 13 5 13Z" fill="#FF4C00" />
              <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="5" width="16" height="14">
                <path id="Mask_2" fill-rule="evenodd" clip-rule="evenodd" d="M5 13H16.865L13.232 17.36C12.878 17.784 12.936 18.415 13.36 18.768C13.785 19.122 14.415 19.064 14.769 18.64L19.769 12.64C19.808 12.593 19.827 12.538 19.856 12.486C19.88 12.444 19.909 12.408 19.927 12.362C19.972 12.247 19.999 12.126 19.999 12.004C19.999 12.003 20 12.001 20 12C20 11.999 19.999 11.997 19.999 11.996C19.999 11.874 19.972 11.753 19.927 11.638C19.909 11.592 19.88 11.556 19.856 11.514C19.827 11.462 19.808 11.407 19.769 11.36L14.769 5.36C14.57 5.123 14.286 5 14 5C13.774 5 13.547 5.076 13.36 5.232C12.936 5.585 12.878 6.216 13.232 6.64L16.865 11H5C4.448 11 4 11.448 4 12C4 12.552 4.448 13 5 13Z" fill="#FF4C00" />
              </mask>
            </g>
          </svg>
        </span>
      </a>
    </div>
  </div>
);
}

export default Notifications;