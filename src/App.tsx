import React from 'react';
import './App.css';
// import { v1 } from 'uuid';
import { TodoList } from './TodoList/TodoList';
import { PanelAddTasks } from './PanelAddTasks/PanelAddTasks';
import { PanelFilter } from './PanelFilter/PanelFilter';
import { PanelSearch } from './PanelSearch/PanelSearch';


//Samurai way 
function App() {

    // let [tasks, setTasks] = useState<Array<TasksType>>([
    //     { id: v1(), title: "My samurai path", isDone: true, important: false },
    //     { id: v1(), title: "HTML&CSS", isDone: true, important: false },
    //     { id: v1(), title: "JS", isDone: true, important: false },
    //     { id: v1(), title: "ReactJS", isDone: false, important: false },
    //     { id: v1(), title: "Hooks", isDone: true, important: false },
    //     { id: v1(), title: "Rest API", isDone: false, important: false },
    //     { id: v1(), title: "Redux", isDone: false, important: false },
    //     { id: v1(), title: "GraphQL", isDone: false, important: false },
    //     { id: v1(), title: "Storybook", isDone: false, important: false },
    //     { id: v1(), title: "English", isDone: true, important: false },
    //     { id: v1(), title: "FirstJob", isDone: true, important: false },
    //     { id: v1(), title: "I'm want to be programmer. And you?", isDone: true, important: false },
    // ]);
   
    return (
        <div className="App">
            <PanelFilter  />
            <PanelSearch />
            <TodoList  />
            <PanelAddTasks />
        </div>
    );
}

export default App;
