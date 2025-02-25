import React from 'react';

export default function Header() {
  return (
    <header>
      <div className='header-container'>
        <div className='logo'>HardSoft</div>
        <div className='Інформаційнапанель'>
          <p className='Адреса'>Україна м. Шептицький</p>
          <p className='Вулиця'>вул. Стуса буд.3</p>
          <p className='Графік'>Пн.-Пт. з 09:00 до 19:00 Сб. з 10:00 до 18:00</p>
          <div className='IconAccount'></div>
          <p className='Вхід'><a href='#'>Вхід</a></p>
          <a href='#' className='Кошик'></a>
        </div>
        <div className='Вибіркатегорії'>
          <p className='SystemBlock'>
            <a href='#'>Системні блоки</a>
            <div className='SystemBlockIMG'></div>
            </p>
          <p className='Конфігуратор'><a href='#'>Конфігуратор</a></p>
          <p className='Периферія'><a href='#'>Периферія</a></p>
          <p className='Комплектуючі'><a href='#'>Комплектуючі</a></p>
          <p className='Контакти'><a href='#'>Контакти</a></p>
        </div>
        <p className='Top'>Топ продажів</p>
        <div className='rectangle'></div>
        <div className='Ellipse'></div>
      </div>
      <div className='presentation'></div>
    </header>
  );
}
