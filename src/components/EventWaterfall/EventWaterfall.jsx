import React from 'react';
import "./EventWaterfall.scss";
import avatar_10 from "../../assets/avatars/10.png";
import avatar_11 from "../../assets/avatars/11.png";


const EventWaterfall = () => {
return (
<div className="event-water-fall-block-wrapper">
    <div className="event-water-fall-block">
        <span className="event-water-fall-title">Водопад событий</span>
        <span className="event-water-fall-count">2</span>
    </div>
    <div className="event-water-fall-block-body">
        <div className="news">
            <span className="news-label">Новое</span>
            <div className="news-user">
                <a className="news-user-link" href="#">
                    <img src={avatar_10} alt="" />
                </a>
                <div className="news-user-info">
                    <a href="#" className="user-name">Fanki Soft</a>
                    <span className="publication-date">Сегодня, 10:50</span>
                    <p className="news-publication-text">
                        Текст объявления, который написан от лица компании.
                    </p>
                </div>
            </div>
        </div>
        <div className="yesterday">
            <span className="yesterday-label">Вчера</span>
            <div className="news-user">
                <a className="news-user-link" href="#">
                    <img src={avatar_11} alt="" />
                </a>
                <div className="news-user-info">
                    <a href="#" className="user-name">Fanki Soft</a>
                    <span className="publication-date">Сегодня, 10:50</span>
                    <p className="yesterday-publication-text">
                        Текст объявления, который написан от лица компании.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
);
}

export default EventWaterfall;