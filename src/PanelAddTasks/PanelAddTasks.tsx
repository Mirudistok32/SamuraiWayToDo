import React, { useState, ChangeEvent } from 'react';
import { TasksType } from '../App';
// import s from './PanelAddTasks.module.css'

type PropsType = {
    tasks: Array<TasksType>
    addNewTask: (title: string) => void
    selectedAll: (value: boolean) => void
}

export const PanelAddTasks: React.FC<PropsType> = (props) => {

    const { addNewTask, selectedAll, tasks } = props
    const [value, setValue] = useState<string>('')

    const isInputValueChecked = tasks.some(t => t.isDone)

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onAddNewTask = () => {
        addNewTask(value)
        setValue('')
    }

    const onSelectedAll = (e: ChangeEvent<HTMLInputElement>) => {
        selectedAll(e.currentTarget.checked)
    }


    return (
        <div className="panel-add-tasks">
            <input
                type="text"
                placeholder='Задач мало не бывает!'
                value={value}
                onChange={(e) => onChangeValue(e)}
            />

            <label htmlFor="selecteAll">Выбрать все</label>
            <input type="checkbox" id='selecteAll' onChange={onSelectedAll} checked={isInputValueChecked} />

            <span>Добавить</span>
            <button onClick={onAddNewTask}>+</button>
        </div>
    );
}
