import React from 'react';

export default function Header() {
  return (
    <header>
      <div className='header-container'>
        <div className='logo'>HardSoft</div>
        <div className='Інформаційна панель'>
          <p>Україна м. Шептицький</p>
          <p>вул. Стуса буд.3</p>
          <p>Пн.-Пт. з 09:00 до 19:00 Сб. з 10:00 до 18:00</p>
          <p><a href='#'>Вхід</a></p>
          <p><a href='#'>Кошик</a></p>
        </div>
        <div className='Вибір категорії'>
          <p><a href='#'>Системні блоки</a></p>
          <p><a href='#'>Конфігуратор</a></p>
          <p><a href='#'>Периферія</a></p>
          <p><a href='#'>Комплектуючі</a></p>
          <p><a href='#'>Контакти</a></p>
        </div>
        <p>Топ продажів</p>
        <div className='rectangle'></div>
        <div className='Ellipse'></div>
      </div>
      <div className='presentation'></div>
    </header>
  );
}
