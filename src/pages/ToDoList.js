import {useEffect, useState} from "react";


function ToDoList(){
    const [task, setTask] = useState("");
    const [message, setMessage] = useState("");
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9090/hello")
            .then(response => response.text())
            .then(data => setMessage(data))
            .catch(e => setMessage("Failed to fetch api"));
    }, []);

    const addTask = () => {
        if (task.trim() === "") {
            return;
        }
        setTasks([...tasks, task]);
        setTask("");
    }

    const removeTask = (index) => {
        setTasks(tasks.filter((_,i) => i !== index));
    }

    return (

        <div style={{ padding: "20px" }} >
            <h1>To do List</h1>
            <input type="text" placeholder="Enter task here" value={task}
                   onChange={(e) => setTask(e.target.value)} />
            <button onClick={addTask}>Add new task</button>
            <ul>
                {tasks.map((t,index) => (
                    <li key={index}>
                        {t}{" "}
                        <button onClick={() => removeTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            <button>Get response from API</button>
            <p>{message}</p>
        </div>
    );
}

export default ToDoList;