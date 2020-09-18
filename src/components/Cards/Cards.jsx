import React from 'react';
import "./Cards.scss";
import books from '../../assets/images/books.png'


const Cards = () => {
return (
  <div className="cards">
    {/* 1 */}
    <div className="card">
      <div className="card-title-block">
        <span className="card-title">Запросы</span>
        <span className="card-notifications">1</span>
      </div>
      <div className="card-body-block">
        <div className="slider">
          <p className="slider-text">
            У вас{" "}
            <span className="slider-text-orange">
              2 несогласованных запроса
            </span>{" "}
            <br />
            <span className="from-employees">
              от сотрудников{" "}
              <b className="slider-text-names">Петров Алексей и Шишкин Егор</b>
            </span>
          </p>

          <ol className="slider-items">
            <li className="slider-item slider-item-active"></li>
            <li className="slider-item"></li>
          </ol>
          <button className="cards-left-button" type="button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#DDDDDD"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Icon/Outline/arrow-ios-left">
                <path
                  id="Mask"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.8286 19C13.5366 19 13.2466 18.873 13.0486 18.627L8.2206 12.627C7.9226 12.256 7.9266 11.726 8.2316 11.36L13.2316 5.36001C13.5846 4.93601 14.2156 4.87901 14.6406 5.23201C15.0646 5.58501 15.1216 6.21601 14.7676 6.64001L10.2926 12.011L14.6076 17.373C14.9536 17.803 14.8856 18.433 14.4546 18.779C14.2706 18.928 14.0486 19 13.8286 19Z"
                  fill="black"
                />
                <mask
                  id="mask0"
                  mask-type="alpha"
                  maskUnits="userSpaceOnUse"
                  x="8"
                  y="5"
                  width="7"
                  height="14"
                >
                  <path
                    id="Mask_2"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.8286 19C13.5366 19 13.2466 18.873 13.0486 18.627L8.2206 12.627C7.9226 12.256 7.9266 11.726 8.2316 11.36L13.2316 5.36001C13.5846 4.93601 14.2156 4.87901 14.6406 5.23201C15.0646 5.58501 15.1216 6.21601 14.7676 6.64001L10.2926 12.011L14.6076 17.373C14.9536 17.803 14.8856 18.433 14.4546 18.779C14.2706 18.928 14.0486 19 13.8286 19Z"
                    fill="white"
                  />
                </mask>
              </g>
            </svg>
          </button>
          <button className="cards-right-button" type="button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#DDDDDD"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Icon/Outline/arrow-ios-right">
                <path
                  id="Mask"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.9995 19C9.7735 19 9.5465 18.924 9.3595 18.768C8.9355 18.415 8.8785 17.784 9.2315 17.36L13.7075 11.989L9.3925 6.627C9.0465 6.197 9.1145 5.567 9.5445 5.221C9.9755 4.875 10.6045 4.943 10.9515 5.373L15.7795 11.373C16.0775 11.744 16.0735 12.274 15.7685 12.64L10.7685 18.64C10.5705 18.877 10.2865 19 9.9995 19Z"
                  fill="black"
                />
                <mask
                  id="mask0"
                  mask-type="alpha"
                  maskUnits="userSpaceOnUse"
                  x="9"
                  y="5"
                  width="8"
                  height="14"
                >
                  <path
                    id="Mask_2"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.9995 19C9.7735 19 9.5465 18.924 9.3595 18.768C8.9355 18.415 8.8785 17.784 9.2315 17.36L13.7075 11.989L9.3925 6.627C9.0465 6.197 9.1145 5.567 9.5445 5.221C9.9755 4.875 10.6045 4.943 10.9515 5.373L15.7795 11.373C16.0775 11.744 16.0735 12.274 15.7685 12.64L10.7685 18.64C10.5705 18.877 10.2865 19 9.9995 19Z"
                    fill="white"
                  />
                </mask>
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div className="card-bottom-block">
        <a className="go-to" href="#">
          <span className="go-to-title">Запросы</span>
          <span classNaame="go-to-icon">
            <svg
              width="25"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Icon/Outline/arrow-right">
                <path
                  id="Mask"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 13H16.865L13.232 17.36C12.878 17.784 12.936 18.415 13.36 18.768C13.785 19.122 14.415 19.064 14.769 18.64L19.769 12.64C19.808 12.593 19.827 12.538 19.856 12.486C19.88 12.444 19.909 12.408 19.927 12.362C19.972 12.247 19.999 12.126 19.999 12.004C19.999 12.003 20 12.001 20 12C20 11.999 19.999 11.997 19.999 11.996C19.999 11.874 19.972 11.753 19.927 11.638C19.909 11.592 19.88 11.556 19.856 11.514C19.827 11.462 19.808 11.407 19.769 11.36L14.769 5.36C14.57 5.123 14.286 5 14 5C13.774 5 13.547 5.076 13.36 5.232C12.936 5.585 12.878 6.216 13.232 6.64L16.865 11H5C4.448 11 4 11.448 4 12C4 12.552 4.448 13 5 13Z"
                  fill="#FF4C00"
                />
                <mask
                  id="mask0"
                  mask-type="alpha"
                  maskUnits="userSpaceOnUse"
                  x="4"
                  y="5"
                  width="16"
                  height="14"
                >
                  <path
                    id="Mask_2"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 13H16.865L13.232 17.36C12.878 17.784 12.936 18.415 13.36 18.768C13.785 19.122 14.415 19.064 14.769 18.64L19.769 12.64C19.808 12.593 19.827 12.538 19.856 12.486C19.88 12.444 19.909 12.408 19.927 12.362C19.972 12.247 19.999 12.126 19.999 12.004C19.999 12.003 20 12.001 20 12C20 11.999 19.999 11.997 19.999 11.996C19.999 11.874 19.972 11.753 19.927 11.638C19.909 11.592 19.88 11.556 19.856 11.514C19.827 11.462 19.808 11.407 19.769 11.36L14.769 5.36C14.57 5.123 14.286 5 14 5C13.774 5 13.547 5.076 13.36 5.232C12.936 5.585 12.878 6.216 13.232 6.64L16.865 11H5C4.448 11 4 11.448 4 12C4 12.552 4.448 13 5 13Z"
                    fill="white"
                  />
                </mask>
              </g>
            </svg>
          </span>
        </a>
      </div>
    </div>
    {/* 2 */}
    <div className="card">
      <div className="card-title-block">
        <span className="card-title">Календарь</span>
        <span className="card-notifications">1</span>
      </div>
      <div className="card-body-block">
        <div className="slider">
          <div className="slider-calendar">
            <div className="data">
              <div className="month">Авг</div>
              <div className="number">20</div>
            </div>
            <p className="name-event-and-time">
              10:00 - 11:00 | Групповое событие
            </p>
            <p className="name-event">Презентация мобильной системы</p>
          </div>

          <ol className="slider-items">
            <li className="slider-item slider-item-active"></li>
            <li className="slider-item"></li>
          </ol>
          <button className="cards-left-button" type="button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#DDDDDD"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Icon/Outline/arrow-ios-left">
                <path
                  id="Mask"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.8286 19C13.5366 19 13.2466 18.873 13.0486 18.627L8.2206 12.627C7.9226 12.256 7.9266 11.726 8.2316 11.36L13.2316 5.36001C13.5846 4.93601 14.2156 4.87901 14.6406 5.23201C15.0646 5.58501 15.1216 6.21601 14.7676 6.64001L10.2926 12.011L14.6076 17.373C14.9536 17.803 14.8856 18.433 14.4546 18.779C14.2706 18.928 14.0486 19 13.8286 19Z"
                  fill="black"
                />
                <mask
                  id="mask0"
                  mask-type="alpha"
                  maskUnits="userSpaceOnUse"
                  x="8"
                  y="5"
                  width="7"
                  height="14"
                >
                  <path
                    id="Mask_2"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.8286 19C13.5366 19 13.2466 18.873 13.0486 18.627L8.2206 12.627C7.9226 12.256 7.9266 11.726 8.2316 11.36L13.2316 5.36001C13.5846 4.93601 14.2156 4.87901 14.6406 5.23201C15.0646 5.58501 15.1216 6.21601 14.7676 6.64001L10.2926 12.011L14.6076 17.373C14.9536 17.803 14.8856 18.433 14.4546 18.779C14.2706 18.928 14.0486 19 13.8286 19Z"
                    fill="white"
                  />
                </mask>
              </g>
            </svg>
          </button>
          <button className="cards-right-button" type="button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#DDDDDD"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Icon/Outline/arrow-ios-right">
                <path
                  id="Mask"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.9995 19C9.7735 19 9.5465 18.924 9.3595 18.768C8.9355 18.415 8.8785 17.784 9.2315 17.36L13.7075 11.989L9.3925 6.627C9.0465 6.197 9.1145 5.567 9.5445 5.221C9.9755 4.875 10.6045 4.943 10.9515 5.373L15.7795 11.373C16.0775 11.744 16.0735 12.274 15.7685 12.64L10.7685 18.64C10.5705 18.877 10.2865 19 9.9995 19Z"
                  fill="black"
                />
                <mask
                  id="mask0"
                  mask-type="alpha"
                  maskUnits="userSpaceOnUse"
                  x="9"
                  y="5"
                  width="8"
                  height="14"
                >
                  <path
                    id="Mask_2"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.9995 19C9.7735 19 9.5465 18.924 9.3595 18.768C8.9355 18.415 8.8785 17.784 9.2315 17.36L13.7075 11.989L9.3925 6.627C9.0465 6.197 9.1145 5.567 9.5445 5.221C9.9755 4.875 10.6045 4.943 10.9515 5.373L15.7795 11.373C16.0775 11.744 16.0735 12.274 15.7685 12.64L10.7685 18.64C10.5705 18.877 10.2865 19 9.9995 19Z"
                    fill="white"
                  />
                </mask>
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div className="card-bottom-block">
        <a className="go-to" href="#">
          <span className="go-to-title">Календарь</span>
          <span classNaame="go-to-icon">
            <svg
              width="25"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Icon/Outline/arrow-right">
                <path
                  id="Mask"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 13H16.865L13.232 17.36C12.878 17.784 12.936 18.415 13.36 18.768C13.785 19.122 14.415 19.064 14.769 18.64L19.769 12.64C19.808 12.593 19.827 12.538 19.856 12.486C19.88 12.444 19.909 12.408 19.927 12.362C19.972 12.247 19.999 12.126 19.999 12.004C19.999 12.003 20 12.001 20 12C20 11.999 19.999 11.997 19.999 11.996C19.999 11.874 19.972 11.753 19.927 11.638C19.909 11.592 19.88 11.556 19.856 11.514C19.827 11.462 19.808 11.407 19.769 11.36L14.769 5.36C14.57 5.123 14.286 5 14 5C13.774 5 13.547 5.076 13.36 5.232C12.936 5.585 12.878 6.216 13.232 6.64L16.865 11H5C4.448 11 4 11.448 4 12C4 12.552 4.448 13 5 13Z"
                  fill="#FF4C00"
                />
                <mask
                  id="mask0"
                  mask-type="alpha"
                  maskUnits="userSpaceOnUse"
                  x="4"
                  y="5"
                  width="16"
                  height="14"
                >
                  <path
                    id="Mask_2"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 13H16.865L13.232 17.36C12.878 17.784 12.936 18.415 13.36 18.768C13.785 19.122 14.415 19.064 14.769 18.64L19.769 12.64C19.808 12.593 19.827 12.538 19.856 12.486C19.88 12.444 19.909 12.408 19.927 12.362C19.972 12.247 19.999 12.126 19.999 12.004C19.999 12.003 20 12.001 20 12C20 11.999 19.999 11.997 19.999 11.996C19.999 11.874 19.972 11.753 19.927 11.638C19.909 11.592 19.88 11.556 19.856 11.514C19.827 11.462 19.808 11.407 19.769 11.36L14.769 5.36C14.57 5.123 14.286 5 14 5C13.774 5 13.547 5.076 13.36 5.232C12.936 5.585 12.878 6.216 13.232 6.64L16.865 11H5C4.448 11 4 11.448 4 12C4 12.552 4.448 13 5 13Z"
                    fill="white"
                  />
                </mask>
              </g>
            </svg>
          </span>
        </a>
      </div>
    </div>
    {/* 3 */}
    <div className="card">
      <div className="card-title-block">
        <span className="card-title">База знаний</span>
        <span className="card-notifications">1</span>
      </div>
      <div className="card-body-block">
        <div className="slider">
            <div className="knowledge-base">
                <img className="knowledge-base-image" src={books} alt=""/>
                <p className="knowledge-base-text">Новых публикаций нет</p>
            </div>
            <ol className="slider-items">
                <li className="slider-item slider-item-active"></li>
                <li className="slider-item"></li>
            </ol>
            <button className="cards-left-button" type="button">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#DDDDDD"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="Icon/Outline/arrow-ios-left">
                <path
                    id="Mask"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.8286 19C13.5366 19 13.2466 18.873 13.0486 18.627L8.2206 12.627C7.9226 12.256 7.9266 11.726 8.2316 11.36L13.2316 5.36001C13.5846 4.93601 14.2156 4.87901 14.6406 5.23201C15.0646 5.58501 15.1216 6.21601 14.7676 6.64001L10.2926 12.011L14.6076 17.373C14.9536 17.803 14.8856 18.433 14.4546 18.779C14.2706 18.928 14.0486 19 13.8286 19Z"
                    fill="black"
                />
                <mask
                    id="mask0"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="8"
                    y="5"
                    width="7"
                    height="14"
                >
                    <path
                    id="Mask_2"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.8286 19C13.5366 19 13.2466 18.873 13.0486 18.627L8.2206 12.627C7.9226 12.256 7.9266 11.726 8.2316 11.36L13.2316 5.36001C13.5846 4.93601 14.2156 4.87901 14.6406 5.23201C15.0646 5.58501 15.1216 6.21601 14.7676 6.64001L10.2926 12.011L14.6076 17.373C14.9536 17.803 14.8856 18.433 14.4546 18.779C14.2706 18.928 14.0486 19 13.8286 19Z"
                    fill="white"
                    />
                </mask>
                </g>
            </svg>
            </button>
            <button className="cards-right-button" type="button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#DDDDDD"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Icon/Outline/arrow-ios-right">
                <path
                  id="Mask"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.9995 19C9.7735 19 9.5465 18.924 9.3595 18.768C8.9355 18.415 8.8785 17.784 9.2315 17.36L13.7075 11.989L9.3925 6.627C9.0465 6.197 9.1145 5.567 9.5445 5.221C9.9755 4.875 10.6045 4.943 10.9515 5.373L15.7795 11.373C16.0775 11.744 16.0735 12.274 15.7685 12.64L10.7685 18.64C10.5705 18.877 10.2865 19 9.9995 19Z"
                  fill="black"
                />
                <mask
                  id="mask0"
                  mask-type="alpha"
                  maskUnits="userSpaceOnUse"
                  x="9"
                  y="5"
                  width="8"
                  height="14"
                >
                  <path
                    id="Mask_2"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.9995 19C9.7735 19 9.5465 18.924 9.3595 18.768C8.9355 18.415 8.8785 17.784 9.2315 17.36L13.7075 11.989L9.3925 6.627C9.0465 6.197 9.1145 5.567 9.5445 5.221C9.9755 4.875 10.6045 4.943 10.9515 5.373L15.7795 11.373C16.0775 11.744 16.0735 12.274 15.7685 12.64L10.7685 18.64C10.5705 18.877 10.2865 19 9.9995 19Z"
                    fill="white"
                  />
                </mask>
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div className="card-bottom-block">
        <a className="go-to" href="#">
          <span className="go-to-title">База знаний</span>
          <span classNaame="go-to-icon">
            <svg
              width="25"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Icon/Outline/arrow-right">
                <path
                  id="Mask"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 13H16.865L13.232 17.36C12.878 17.784 12.936 18.415 13.36 18.768C13.785 19.122 14.415 19.064 14.769 18.64L19.769 12.64C19.808 12.593 19.827 12.538 19.856 12.486C19.88 12.444 19.909 12.408 19.927 12.362C19.972 12.247 19.999 12.126 19.999 12.004C19.999 12.003 20 12.001 20 12C20 11.999 19.999 11.997 19.999 11.996C19.999 11.874 19.972 11.753 19.927 11.638C19.909 11.592 19.88 11.556 19.856 11.514C19.827 11.462 19.808 11.407 19.769 11.36L14.769 5.36C14.57 5.123 14.286 5 14 5C13.774 5 13.547 5.076 13.36 5.232C12.936 5.585 12.878 6.216 13.232 6.64L16.865 11H5C4.448 11 4 11.448 4 12C4 12.552 4.448 13 5 13Z"
                  fill="#FF4C00"
                />
                <mask
                  id="mask0"
                  mask-type="alpha"
                  maskUnits="userSpaceOnUse"
                  x="4"
                  y="5"
                  width="16"
                  height="14"
                >
                  <path
                    id="Mask_2"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 13H16.865L13.232 17.36C12.878 17.784 12.936 18.415 13.36 18.768C13.785 19.122 14.415 19.064 14.769 18.64L19.769 12.64C19.808 12.593 19.827 12.538 19.856 12.486C19.88 12.444 19.909 12.408 19.927 12.362C19.972 12.247 19.999 12.126 19.999 12.004C19.999 12.003 20 12.001 20 12C20 11.999 19.999 11.997 19.999 11.996C19.999 11.874 19.972 11.753 19.927 11.638C19.909 11.592 19.88 11.556 19.856 11.514C19.827 11.462 19.808 11.407 19.769 11.36L14.769 5.36C14.57 5.123 14.286 5 14 5C13.774 5 13.547 5.076 13.36 5.232C12.936 5.585 12.878 6.216 13.232 6.64L16.865 11H5C4.448 11 4 11.448 4 12C4 12.552 4.448 13 5 13Z"
                    fill="white"
                  />
                </mask>
              </g>
            </svg>
          </span>
        </a>
      </div>
    </div>

    {/* <div className="test"></div> */}
  </div>
);
}

export default Cards;