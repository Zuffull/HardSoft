import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Black />
      <header className="App-header">
      </header>
      <Menu />
    </div>
  );
}

function Black() {
  return (
    <div className="black">
      <div className="black-box"></div>
      <svg className="small-black-box" viewBox="0 0 100 100">
        <ellipse cx="50" cy="50" rx="37.505" ry="37.505" fill="#D26900" />
        <path d="M50,50 L50,0 A50,50 0 0,1 100,50 Z" fill="black" />
      </svg>
    </div>
  );
}

function Menu() {
  return (
    <div className="menu">
      <a href="#tables">Таблиці</a>
      <a href="#forms">Форми</a>
      <a href="#queries">Запити</a>
      <a href="#add">Додавання</a>
      <a href="#delete">Видалення</a>
      <a href="#edit">Редагування</a>
    </div>
  );
}

export default App;