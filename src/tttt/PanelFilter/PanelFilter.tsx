import React from 'react';
import s from './PanelFilter.module.css'
import { Select } from './Select/Select';

export const PanelFilter = (props) => {

    return (
        <div className="app__filter">
            <span>Фильтры:</span>
            <span className="app__filter-element">
                <button >Все</button>
                <span>0</span>
            </span>
            <span className="app__filter-element">
                <button  >Активные</button>
                <span>0</span>
            </span>
            <span className="app__filter-element">
                <button  >Завершенные</button>
                <span>0</span>
            </span>
            <span className="app__filter-element">
                <button  >Важные</button>
                <span>0</span>
            </span>
            <span className="app__filter-element">
                <Select />
                <span>0</span>
            </span>
        </div>
    );
}


// <li><input type="checkbox"/><span>Какой-то текст</span><button>X</button></li>