import React from 'react';
import "./Staff.scss";
import avatar_1 from "../../assets/avatars/1.png";
import avatar_2 from "../../assets/avatars/2.png";
import avatar_3 from "../../assets/avatars/3.png";
import avatar_4 from "../../assets/avatars/4.png";
import avatar_5 from "../../assets/avatars/5.png";
import avatar_6 from "../../assets/avatars/6.png";
import avatar_7 from "../../assets/avatars/7.png";
import avatar_8 from "../../assets/avatars/8.png";
import avatar_9 from "../../assets/avatars/9.png";


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

            <div className="staff-slider">
                
                <div className="staff-slider-item">
                    <div className="staff-item">
                        <a className="staff-avatar" href="#">
                            <img src={avatar_1} alt="" />
                        </a>
                        <div className="staff-info-item">
                            <a href="#" className="staff-name">Никифорова Валентина</a>
                            <h5 className="staff-profession">Менеджер по продажам</h5>
                        </div>
                    </div>
                    <p className="staff-time blue">10 Августа 2020 - 21 Августа 2020</p>
                </div>

                <div className="staff-slider-item">
                    <div className="staff-item">
                        <a className="staff-avatar" href="#">
                            <img src={avatar_2} alt="" />
                        </a>
                        <div className="staff-info-item">
                            <a href="#" className="staff-name">Сапогова Лилия</a>
                            <h5 className="staff-profession">Менеджер по продажам</h5>
                        </div>
                    </div>
                    <p className="staff-time blue">20 Августа 2020 - 31 Августа 2020</p>
                </div>

                <div className="staff-slider-item">
                    <div className="staff-item">
                        <a className="staff-avatar" href="#">
                            <img src={avatar_3} alt="" />
                        </a>
                        <div className="staff-info-item">
                            <a href="#" className="staff-name">Шепелева Галина</a>
                            <h5 className="staff-profession">Менеджер по продажам</h5>
                        </div>
                    </div>
                    <p className="staff-time blue">20 Августа 2020 - 10 Сентября 2020</p>
                </div>

                <div className="staff-slider-item">
                    <div className="staff-item">
                        <a className="staff-avatar" href="#">
                            <img src={avatar_4} alt="" />
                        </a>
                        <div className="staff-info-item">
                            <a href="#" className="staff-name">Федотов Алексей</a>
                            <h5 className="staff-profession">Менеджер по продажам</h5>
                        </div>
                    </div>
                    <p className="staff-time blue">20 Августа 2020 - 30 Августа 2020</p>
                </div>

                <div className="staff-slider-item">
                    <div className="staff-item">
                        <a className="staff-avatar" href="#">
                            <img src={avatar_5} alt="" />
                        </a>
                        <div className="staff-info-item">
                            <a href="#" className="staff-name">Кузнецова Екатерина</a>
                            <h5 className="staff-profession">Менеджер по продажам</h5>
                        </div>
                    </div>
                    <p className="staff-time blue">15 Августа 2020 - 1 Сентября 2020</p>
                </div>

                <div className="staff-slider-item">
                    <div className="staff-item">
                        <a className="staff-avatar" href="#">
                            <img src={avatar_6} alt="" />
                        </a>
                        <div className="staff-info-item">
                            <a href="#" className="staff-name">Яковлев Николай</a>
                            <h5 className="staff-profession">Менеджер по продажам</h5>
                        </div>
                    </div>
                    <p className="staff-time orange">20 Августа, 10:00 - 12:00</p>
                </div>

                <div className="staff-slider-item">
                    <div className="staff-item">
                        <a className="staff-avatar" href="#">
                            <img src={avatar_7} alt="" />
                        </a>
                        <div className="staff-info-item">
                            <a href="#" className="staff-name">Гончаров Леонид</a>
                            <h5 className="staff-profession">Менеджер по продажам</h5>
                        </div>
                    </div>
                    <p className="staff-time blue">20 Августа 2020 - 30 Августа 2020</p>
                </div>

                <div className="staff-slider-item">
                    <div className="staff-item">
                        <a className="staff-avatar" href="#">
                            <img src={avatar_8} alt="" />
                        </a>
                        <div className="staff-info-item">
                            <a href="#" className="staff-name">Зырянов Кирилл</a>
                            <h5 className="staff-profession">Менеджер по продажам</h5>
                        </div>
                    </div>
                    <p className="staff-time blue">16 Августа 2020 - 1 Сентября 2020</p>
                </div>

                <div className="staff-slider-item">
                    <div className="staff-item">
                        <a className="staff-avatar" href="#">
                            <img src={avatar_9} alt="" />
                        </a>
                        <div className="staff-info-item">
                            <a href="#" className="staff-name">Терентьев Валерий</a>
                            <h5 className="staff-profession">Менеджер по продажам</h5>
                        </div>
                    </div>
                    <p className="staff-time orange">20 Августа, 9:00 - 13:00</p>
                </div>

                <button className="staff-slider-left-button" type="button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#DDDDDD" xmlns="http://www.w3.org/2000/svg">
                        <g id="Icon/Outline/arrow-ios-left">
                        <path id="Mask" fill-rule="evenodd" clip-rule="evenodd" d="M13.8286 19C13.5366 19 13.2466 18.873 13.0486 18.627L8.2206 12.627C7.9226 12.256 7.9266 11.726 8.2316 11.36L13.2316 5.36001C13.5846 4.93601 14.2156 4.87901 14.6406 5.23201C15.0646 5.58501 15.1216 6.21601 14.7676 6.64001L10.2926 12.011L14.6076 17.373C14.9536 17.803 14.8856 18.433 14.4546 18.779C14.2706 18.928 14.0486 19 13.8286 19Z" fill="black"/>
                        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="8" y="5" width="7" height="14">
                        <path id="Mask_2" fill-rule="evenodd" clip-rule="evenodd" d="M13.8286 19C13.5366 19 13.2466 18.873 13.0486 18.627L8.2206 12.627C7.9226 12.256 7.9266 11.726 8.2316 11.36L13.2316 5.36001C13.5846 4.93601 14.2156 4.87901 14.6406 5.23201C15.0646 5.58501 15.1216 6.21601 14.7676 6.64001L10.2926 12.011L14.6076 17.373C14.9536 17.803 14.8856 18.433 14.4546 18.779C14.2706 18.928 14.0486 19 13.8286 19Z" fill="white"/>
                        </mask>
                        </g>
                    </svg>
                </button>
                <button className="staff-slider-right-button" type="button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#DDDDDD" xmlns="http://www.w3.org/2000/svg">
                        <g id="Icon/Outline/arrow-ios-right">
                        <path id="Mask" fill-rule="evenodd" clip-rule="evenodd" d="M9.9995 19C9.7735 19 9.5465 18.924 9.3595 18.768C8.9355 18.415 8.8785 17.784 9.2315 17.36L13.7075 11.989L9.3925 6.627C9.0465 6.197 9.1145 5.567 9.5445 5.221C9.9755 4.875 10.6045 4.943 10.9515 5.373L15.7795 11.373C16.0775 11.744 16.0735 12.274 15.7685 12.64L10.7685 18.64C10.5705 18.877 10.2865 19 9.9995 19Z" fill="black"/>
                        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="9" y="5" width="8" height="14">
                        <path id="Mask_2" fill-rule="evenodd" clip-rule="evenodd" d="M9.9995 19C9.7735 19 9.5465 18.924 9.3595 18.768C8.9355 18.415 8.8785 17.784 9.2315 17.36L13.7075 11.989L9.3925 6.627C9.0465 6.197 9.1145 5.567 9.5445 5.221C9.9755 4.875 10.6045 4.943 10.9515 5.373L15.7795 11.373C16.0775 11.744 16.0735 12.274 15.7685 12.64L10.7685 18.64C10.5705 18.877 10.2865 19 9.9995 19Z" fill="white"/>
                        </mask>
                        </g>
                    </svg>
                </button>


            </div>
        </div>
    </div>
</div>
);
}

export default Staff;