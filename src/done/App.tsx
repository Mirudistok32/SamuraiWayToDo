import React, { useState } from 'react';
import './App.css';
import { v1 } from 'uuid';
import { TodoList } from './TodoList/TodoList';
import { PanelAddTasks } from './PanelAddTasks/PanelAddTasks';
import { PanelFilter } from './PanelFilter/PanelFilter';
import { PanelSearch } from './PanelSearch/PanelSearch';

export type TasksType = {
    id: string,
    title: string,
    isDone: boolean,
    important: boolean
}

export type FilterCountType = {
    allCount: number
    activeCount: number
    doneCount: number
    important: number
    activeImportantCount: number
    activeNotImportantCount: number
    doneImportantCount: number
    doneNotImportantCount: number
}

export type FilterSelectType = 'active&important' | 'active&not-important' | 'done&important' | 'done&not-important'
export type FilterType = 'all' | 'active' | 'done' | 'important' | FilterSelectType


//Samurai way 
function App() {

    let [tasks, setTasks] = useState<Array<TasksType>>([
        { id: v1(), title: "My samurai path", isDone: true, important: false },
        { id: v1(), title: "HTML&CSS", isDone: true, important: false },
        { id: v1(), title: "JS", isDone: true, important: false },
        { id: v1(), title: "ReactJS", isDone: false, important: false },
        { id: v1(), title: "Hooks", isDone: true, important: false },
        { id: v1(), title: "Rest API", isDone: false, important: false },
        { id: v1(), title: "Redux", isDone: false, important: false },
        { id: v1(), title: "GraphQL", isDone: false, important: false },
        { id: v1(), title: "Storybook", isDone: false, important: false },
        { id: v1(), title: "English", isDone: true, important: false },
        { id: v1(), title: "FirstJob", isDone: true, important: false },
        { id: v1(), title: "I'm want to be programmer. And you?", isDone: true, important: false },
    ]);
    const [filter, setFilter] = useState<FilterType>('all')
    const [filterCount, setFilterCount] = useState<FilterCountType>({
        allCount: 0,
        activeCount: 0,
        doneCount: 0,
        important: 0,
        activeImportantCount: 0,
        activeNotImportantCount: 0,
        doneImportantCount: 0,
        doneNotImportantCount: 0
    })
    let filterTasks: Array<TasksType> = tasks;



    //Функция удаления таски
    const deletedTask = (id: string) => {
        const newTasks = tasks.filter(t => t.id !== id)
        setTasks(newTasks)
    }

    //Функция для добавления новой задачи
    const addNewTask = (title: string) => {
        if (title.trim()) {
            const newTask: TasksType = { id: v1(), title: title, isDone: false, important: false }
            setTasks([newTask, ...tasks])
        }
    }

    //Функция для установки галочки на true или false
    const setChecked = (checked: boolean, id: string) => {
        const task = tasks.find(t => t.id === id)
        if (task) {
            task.isDone = checked
        }
        setTasks([...tasks])
    }

    //Функция, которая устанавливает все элементы, как завершенные и наоборот
    const selectedAll = (value: boolean) => {
        const newTasks = tasks.map(t => ({ ...t, isDone: value }))
        setTasks([...newTasks])
    }

    //Функция. которая устанавливает важность таски
    const setImportant = (value: boolean, id: string) => {
        const task = tasks.find(t => t.id === id)
        if (task) {
            task.important = value
        }
        setTasks([...tasks])
    }

    //Функция, которая фильтрует массив
    const getFilterTasks = (filter: FilterType, tasks: Array<TasksType>): Array<TasksType> => {
        switch (filter) {
            case 'all': {
                return tasks
            }
            case 'active': {
                return tasks.filter(t => !t.isDone)
            }
            case 'done': {
                return tasks.filter(t => t.isDone)
            }
            case 'important': {
                return tasks.filter(t => t.important)
            }
            case 'active&important': {
                return tasks.filter(t => !t.isDone && t.important)
            }
            case 'active&not-important': {
                return tasks.filter(t => !t.isDone && !t.important)
            }
            case 'done&important': {
                return tasks.filter(t => t.isDone && t.important)
            }
            case 'done&not-important': {
                return tasks.filter(t => t.isDone && !t.important)
            }
            default: {
                return tasks
            }
        }
    }

    filterTasks = getFilterTasks(filter, tasks)
    return (
        <div className="App">
            <PanelFilter setFilter={setFilter} filter={filter} filterCount={filterCount} />
            <PanelSearch />
            <TodoList tasks={filterTasks} deletedTask={deletedTask} setChecked={setChecked} setImportant={setImportant} />
            <PanelAddTasks tasks={filterTasks} addNewTask={addNewTask} selectedAll={selectedAll} />
        </div>
    );
}

export default App;
