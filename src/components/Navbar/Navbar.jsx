import React from "react";
import "./Navbar.scss";

const Navbar = () => {
    return (
        <nav class="nav">
            <div class="nav-section">
                <h3 class="nav-title">Компания</h3>
                <ul class="nav-items">
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Запросы</a></li>
                    <li><a href="#">Календарь</a></li>
                    <li><a href="#">База знаний</a></li>
                    <li><a href="#">Новости</a></li>
                    <li><a href="#">Задачи</a></li>
                    <li><a href="#">Чаты</a></li>
                </ul>
            </div>
            <div class="nav-section">
                <h3 class="nav-title">Администратор</h3>
                <ul class="nav-items">
                    <li><a href="#">Статистика компаний</a></li>
                    <li><a href="#">Структура компаний</a></li>
                    <li><a href="#">Сотрудники</a></li>
                    <li><a href="#">База знаний</a></li>
                    <li><a href="#">Новости</a></li>
                    <li><a href="#">Настройки</a></li>
                    <li><a href="#">Служба поддержки</a></li>
                </ul>
            </div>
        </nav>        
    );
}

export default Navbar;