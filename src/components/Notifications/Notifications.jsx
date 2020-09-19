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
    <div className="ewn-item-footer"></div>
  </div>
);
}

export default Notifications;