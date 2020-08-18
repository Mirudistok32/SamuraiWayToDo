import React from 'react';
import s from './PanelFilter.module.css'
import { Select } from './Select/Select';
import { FilterType, FilterSelectType, FilterCountType } from '../App';

type PropsType = {
    setFilter: (filter: FilterType) => void
    filter: FilterType
    filterCount: FilterCountType
}

export const PanelFilter: React.FC<PropsType> = (props) => {

    const { setFilter, filter } = props

    const onClickSelect = (filter: FilterSelectType) => {
        setFilter(filter)
    }

    return (
        <div className="app__filter">
            <span>Фильтры:</span>
            <span className="app__filter-element">
                <button className={filter === 'all' ? s.active : ''} onClick={() => setFilter('all')} >Все</button>
                <span>0</span>
            </span>
            <span className="app__filter-element">
                <button className={filter === 'active' ? s.active : ''} onClick={() => setFilter('active')} >Активные</button>
                <span>0</span>
            </span>
            <span className="app__filter-element">
                <button className={filter === 'done' ? s.active : ''} onClick={() => setFilter('done')} >Завершенные</button>
                <span>0</span>
            </span>
            <span className="app__filter-element">
                <button className={filter === 'important' ? s.active : ''} onClick={() => setFilter('important')} >Важные</button>
                <span>0</span>
            </span>
            <span className="app__filter-element">
                <Select onClickSelect={onClickSelect} filter={filter} />
                <span>0</span>
            </span>
        </div>
    );
}


// <li><input type="checkbox"/><span>Какой-то текст</span><button>X</button></li>