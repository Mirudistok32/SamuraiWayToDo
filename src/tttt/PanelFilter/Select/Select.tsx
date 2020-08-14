import React from 'react';
import s from './Select.module.css'



export function Select(props) {


    return (
        <select  >
            <option value="active&important">Активные & Важные</option>
            <option value="active&not-important">Активные & Неважные</option>
            <option value="done&important">Завершенные & Важные</option>
            <option value="done&not-important">Завершенные & Неважные</option>
        </select>
    );
}


// <li><input type="checkbox"/><span>Какой-то текст</span><button>X</button></li>