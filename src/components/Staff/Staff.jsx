import React from 'react';
import "./Staff.scss";

const Staff = () => {
return (
  <div className="staff">
    <div className="card-title-block">
      <div>
        <span className="headline-title">Headline Title</span>
        <span className="notification-count">Notification_Count</span>
      </div>
      <div className="tabs">
        <button type="button" className="tab tab-active">
          Сегодня, 20 авг
        </button>
        <button type="button" className="tab">
          Завтра, 21 авг
        </button>
        <button type="button" className="tab">
          Неделя
        </button>
      </div>
    </div>
    <div className="staff-info">
        <div className="staff-info-wrapper">
            <div className="staff-info-count-block">
                <div className="staff-info-count-item all">
                <span className="item-name">Все</span>
                <span className="item-count">23 сотрудника</span>
                </div>
                <div className="staff-info-count-item blue-s1">
                <span className="item-name">В отпуске</span>
                <span className="item-count">7 сотрудников</span>
                </div>
                <div className="staff-info-count-item orange-s1">
                <span className="item-name">Отгул</span>
                <span className="item-count">10 сотрудников</span>
                </div>
                <div className="staff-info-count-item red-s1">
                <span className="item-name">Болничный</span>
                <span className="item-count">Нет</span>
                </div>
            </div>
        </div>
    </div>
  </div>
);
}

export default Staff;