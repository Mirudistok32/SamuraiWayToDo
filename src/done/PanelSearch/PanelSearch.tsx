import React from 'react';
import s from './PanelFilter.module.css'

type PropsType = {

}

export const PanelSearch: React.FC<PropsType> = (props) => {


    return (
        <div className="div">
            <span>Поиск:</span>
            <input type="text" placeholder='Что-то ищите?' />
        </div>
    );
}


// <li><input type="checkbox"/><span>Какой-то текст</span><button>X</button></li>