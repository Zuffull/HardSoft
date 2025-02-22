import React from 'react';

export default function Header() {
  return (
    <header>
      <div className='header-container'>
        <div className='logo'>HardSoft</div>
        <nav>
          <ul>
            <li>
              <a href='#'>Головна</a>
            </li>
            <li>
              <a href='#'>Про нас</a>
            </li>
            <li>
              <a href='#'>Контакти</a>
            </li>
          </ul>
          </nav>
      </div>
      <div className='presentation'></div>
    </header>
  );
}
