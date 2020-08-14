import React, { ChangeEvent } from 'react';
import s from './Select.module.css'
import { FilterSelectType, FilterType } from '../../App';

type PropsType = {
    onClickSelect: (filter: FilterSelectType) => void
    filter: FilterType
}

export function Select(props: PropsType) {

    const { onClickSelect, filter } = props

    const onChangeFilter = (e: ChangeEvent<HTMLSelectElement>) => {
        switch (e.currentTarget.value) {
            case 'active&important': {
                onClickSelect('active&important')
                break;
            }
            case 'active&not-important': {
                onClickSelect('active&not-important')
                break
            }
            case 'done&important': {
                onClickSelect('done&important')
                break
            }
            case 'done&not-important': {
                onClickSelect('done&not-important')
                break
            }
            default:
                break;
        }
    }

    let filterForClasses = ['active&important', 'active&not-important', 'done&important', 'done&not-important']

    let classesSelect = s.select
    if (filterForClasses.some(i => i === filter)) {
        classesSelect += ` ${s.selectActive}`
    }

    return (
        <select className={classesSelect} onChange={onChangeFilter} >
            <option className={filter === 'active&important' ? '' : s.selectDefault} value="active&important">Активные & Важные</option>
            <option className={filter === 'active&not-important' ? '' : s.selectDefault} value="active&not-important">Активные & Неважные</option>
            <option className={filter === 'done&important' ? '' : s.selectDefault} value="done&important">Завершенные & Важные</option>
            <option className={filter === 'done&not-important' ? '' : s.selectDefault} value="done&not-important">Завершенные & Неважные</option>
        </select>
    );
}


// <li><input type="checkbox"/><span>Какой-то текст</span><button>X</button></li>