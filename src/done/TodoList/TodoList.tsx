import React, { ChangeEvent } from 'react';
import s from './TodoList.module.css'
import { TasksType } from '../App';

type PropsType = {
    tasks: Array<TasksType>
    deletedTask: (id: string) => void
    setChecked: (checked: boolean, id: string) => void
    setImportant: (value: boolean, id: string) => void
}

export const TodoList: React.FC<PropsType> = (props) => {

    const { tasks, deletedTask, setChecked, setImportant } = props


    const tasksList = tasks.map((task) => {

        const onDeleted = () => {
            deletedTask(task.id)
        }

        const onChangeChecked = ((e: ChangeEvent<HTMLInputElement>) => {
            setChecked(e.currentTarget.checked, task.id)
        })

        const onSetImportant = () => {
            setImportant(!task.important, task.id)
        }

        return (
            <li key={task.id} className={task.isDone ? s['todolist__element-done'] : ''} >
                <input type="checkbox" checked={task.isDone} onChange={onChangeChecked} />
                <span>{task.title}</span>
                <button onClick={onSetImportant} className={task.important ? s['todolist__element-important'] : ''}>!!!</button>
                <button onClick={onDeleted}>X</button>
            </li>
        )
    })



    return (
        <ul className={s.todolist}>
            {
                tasksList
            }
        </ul>
    );
}


// <li><input type="checkbox"/><span>Какой-то текст</span><button>X</button></li>