import React from 'react';
import "./EventWaterfall.scss";
import avatar_10 from "../../assets/avatars/10.png";
import avatar_11 from "../../assets/avatars/11.png";
import article from "../../assets/images/article-image.jpg";



const EventWaterfall = () => {
return (
  <div className="ewn-item event-waterfall">
    <div className="ewn-item-title">
      <span className="ewn-title">Водопад событий</span>
      <span className="ewn-count">2</span>
    </div>
    <div className="ewn-item-body">
      <div className="news">
        <span className="news-label">Новое</span>
        <div className="news-user">
          <a className="news-user-link" href="#">
            <img src={avatar_10} alt="" />
          </a>
          <div className="news-user-info">
            <a href="#" className="news-user-name">
              Fanki Soft
            </a>
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
            <a href="#" className="news-user-name">
              Fanki Soft
            </a>
            <span className="publication-date">Сегодня, 10:50</span>
            <p className="yesterday-publication-text">
              Текст объявления, который написан от лица сотрудника.
            </p>
          </div>
        </div>
      </div>
      <div className="article-wrapper">
        <article className="article">
          <div className="article-img-block">
            <img src={article} alt="" />
            <p className="article-img-info">Обновление</p>
          </div>
          <div className="article-info">
            <p className="article-data">30 апреля 2020, 12:00</p>
            <a href="#" className="article-title">
              Здесь будет находится длинный очень длинный
              заголовокопубликованной новости в водопаде событий
            </a>
            <p className="article-description">
              Разнообразный и богатый опыт постоянный количественный рост и
              сфера нашей активности позволяет оценить значение позиций,
              занимаемых...
            </p>
          </div>
          <div className="article-emotions-comments">
            <div className="emotions">
              <div className="emotion-item emotion-1">3</div>
              <div className="emotion-item emotion-2">5</div>
              <div className="emotion-item emotion-smile"></div>
            </div>
            <a href="#" className="comments">
              <span className="comments-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Icon/Outline/message-circle">
                    <path
                      id="Mask"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.0002 10.9993C7.0002 10.4473 7.4482 9.99927 8.0002 9.99927C8.5522 9.99927 9.0002 10.4473 9.0002 10.9993C9.0002 11.5513 8.5522 11.9993 8.0002 11.9993C7.4482 11.9993 7.0002 11.5513 7.0002 10.9993ZM12.0002 9.99927C11.4482 9.99927 11.0002 10.4473 11.0002 10.9993C11.0002 11.5513 11.4482 11.9993 12.0002 11.9993C12.5522 11.9993 13.0002 11.5513 13.0002 10.9993C13.0002 10.4473 12.5522 9.99927 12.0002 9.99927ZM16.0002 9.99927C15.4482 9.99927 15.0002 10.4473 15.0002 10.9993C15.0002 11.5513 15.4482 11.9993 16.0002 11.9993C16.5522 11.9993 17.0002 11.5513 17.0002 10.9993C17.0002 10.4473 16.5522 9.99927 16.0002 9.99927ZM19.8986 12.2942C19.3916 15.5482 16.7686 18.2472 13.5196 18.8562C11.9506 19.1522 10.3526 18.9832 8.9026 18.3692C8.4916 18.1952 8.0666 18.1072 7.6496 18.1072C7.4596 18.1072 7.2716 18.1252 7.0866 18.1622L4.2746 18.7242L4.8376 15.9072C4.9556 15.3222 4.8836 14.6962 4.6306 14.0972C4.0166 12.6472 3.8486 11.0502 4.1436 9.48017C4.7526 6.23117 7.4506 3.60817 10.7056 3.10117C13.2956 2.69817 15.8286 3.51417 17.6566 5.34217C19.4856 7.17117 20.3026 9.70517 19.8986 12.2942ZM19.0716 3.92817C16.7866 1.64417 13.6266 0.625171 10.3976 1.12417C6.3206 1.76017 2.9406 5.04417 2.1776 9.11117C1.8096 11.0692 2.0216 13.0632 2.7886 14.8762C2.8856 15.1072 2.9156 15.3222 2.8776 15.5152L2.0196 19.8032C1.9536 20.1312 2.0566 20.4702 2.2936 20.7062C2.4826 20.8962 2.7376 20.9992 3.0006 20.9992C3.0656 20.9992 3.1306 20.9932 3.1966 20.9802L7.4796 20.1232C7.7256 20.0762 7.9636 20.1452 8.1226 20.2112C9.9376 20.9782 11.9316 21.1892 13.8876 20.8222C17.9556 20.0592 21.2396 16.6792 21.8756 12.6022C22.3776 9.37517 21.3566 6.21317 19.0716 3.92817Z"
                      fill="#616061"
                    />
                    <mask
                      id="mask0"
                      mask-type="alpha"
                      maskUnits="userSpaceOnUse"
                      x="2"
                      y="1"
                      width="21"
                      height="20"
                    >
                      <path
                        id="Mask_2"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.0002 10.9993C7.0002 10.4473 7.4482 9.99927 8.0002 9.99927C8.5522 9.99927 9.0002 10.4473 9.0002 10.9993C9.0002 11.5513 8.5522 11.9993 8.0002 11.9993C7.4482 11.9993 7.0002 11.5513 7.0002 10.9993ZM12.0002 9.99927C11.4482 9.99927 11.0002 10.4473 11.0002 10.9993C11.0002 11.5513 11.4482 11.9993 12.0002 11.9993C12.5522 11.9993 13.0002 11.5513 13.0002 10.9993C13.0002 10.4473 12.5522 9.99927 12.0002 9.99927ZM16.0002 9.99927C15.4482 9.99927 15.0002 10.4473 15.0002 10.9993C15.0002 11.5513 15.4482 11.9993 16.0002 11.9993C16.5522 11.9993 17.0002 11.5513 17.0002 10.9993C17.0002 10.4473 16.5522 9.99927 16.0002 9.99927ZM19.8986 12.2942C19.3916 15.5482 16.7686 18.2472 13.5196 18.8562C11.9506 19.1522 10.3526 18.9832 8.9026 18.3692C8.4916 18.1952 8.0666 18.1072 7.6496 18.1072C7.4596 18.1072 7.2716 18.1252 7.0866 18.1622L4.2746 18.7242L4.8376 15.9072C4.9556 15.3222 4.8836 14.6962 4.6306 14.0972C4.0166 12.6472 3.8486 11.0502 4.1436 9.48017C4.7526 6.23117 7.4506 3.60817 10.7056 3.10117C13.2956 2.69817 15.8286 3.51417 17.6566 5.34217C19.4856 7.17117 20.3026 9.70517 19.8986 12.2942ZM19.0716 3.92817C16.7866 1.64417 13.6266 0.625171 10.3976 1.12417C6.3206 1.76017 2.9406 5.04417 2.1776 9.11117C1.8096 11.0692 2.0216 13.0632 2.7886 14.8762C2.8856 15.1072 2.9156 15.3222 2.8776 15.5152L2.0196 19.8032C1.9536 20.1312 2.0566 20.4702 2.2936 20.7062C2.4826 20.8962 2.7376 20.9992 3.0006 20.9992C3.0656 20.9992 3.1306 20.9932 3.1966 20.9802L7.4796 20.1232C7.7256 20.0762 7.9636 20.1452 8.1226 20.2112C9.9376 20.9782 11.9316 21.1892 13.8876 20.8222C17.9556 20.0592 21.2396 16.6792 21.8756 12.6022C22.3776 9.37517 21.3566 6.21317 19.0716 3.92817Z"
                        fill="white"
                      />
                    </mask>
                  </g>
                </svg>
              </span>
              <span className="comments-text">18 комментариев</span>
            </a>
          </div>
        </article>
      </div>
    </div>
    <div className="ewn-item-footer"></div>
  </div>
);
}

export default EventWaterfall;