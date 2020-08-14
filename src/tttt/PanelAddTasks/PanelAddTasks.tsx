import React from 'react';
import s from './PanelAddTasks.module.css'


export const PanelAddTasks = (props) => {


    return (
        <div className="panel-add-tasks">
            <input
                type="text"
                placeholder='Задач мало не бывает!'
            />

            <label htmlFor="selecteAll">Выбрать все</label>
            <input type="checkbox" id='selecteAll' />

            <span>Добавить</span>
            <button >+</button>
        </div>
    );
}
