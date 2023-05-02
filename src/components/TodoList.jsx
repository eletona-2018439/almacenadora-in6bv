import React, { useState } from 'react';

import './TodoList.css';


function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [inputTask, setInputTask] = useState({
        name: '',
        description: '',
        startDate: '',
        endDate: '',
        addedBy: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setInputTask(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        const newTask = { ...inputTask };
        setTasks([...tasks, newTask]);
        setInputTask({
            name: '',
            description: '',
            startDate: '',
            endDate: '',
            addedBy: ''
        });
    };

    const handleEdit = (index, editedTask) => {
        const newTasks = [...tasks];
        newTasks[index] = editedTask;
        setTasks(newTasks);
    };

    const handleDelete = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    const handleCheckbox = index => {
        const newTasks = [...tasks];
        // Actualiza el estado de la tarea
        newTasks[index].completed = newTasks[index].completed === 'Pendiente' ? 'Completada' : 'Pendiente';
        setTasks(newTasks);
    };


    return (
        <div>
            <h1>Crea una nueva Tarea</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Tarea:
                    <input type="text" name="name" value={inputTask.name} onChange={handleChange} />
                </label>
                <label>
                    Descripción:
                    <input type="text" name="description" value={inputTask.description} onChange={handleChange} />
                </label>
                <label>
                    Fecha de inicio:
                    <input type="date" name="startDate" value={inputTask.startDate} onChange={handleChange} />
                </label>
                <label>
                    Fecha de cierre:
                    <input type="date" name="endDate" value={inputTask.endDate} onChange={handleChange} />
                </label>
                <label>
                    Creador de la tarea:
                    <input type="text" name="addedBy" value={inputTask.addedBy} onChange={handleChange} />
                </label>
                <button type="submit">Agregar</button>
            </form>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <div>
                            <input type="checkbox" checked={task.completed} onChange={() => handleCheckbox(index)} />
                            <span>{task.name}</span>
                        </div>
                        <div>
                            <p>Descripción: {task.description}</p>
                            <p>Fecha de inicio: {task.startDate}</p>
                            <p>Fecha de cierre: {task.endDate}</p>
                            <p>Creador de la tarea: {task.addedBy}</p>
                        </div>
                        <div>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                            <button onClick={() => handleEdit(index, task)}>Edit</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;