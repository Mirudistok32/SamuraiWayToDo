import React from 'react';
import s from './PanelFilter.module.css'


export const PanelSearch= () => {


    return (
        <div className="div">
            <span>Поиск:</span>
            <input type="text" placeholder='Что-то ищите?' />
        </div>
    );
}


// <li><input type="checkbox"/><span>Какой-то текст</span><button>X</button></li>