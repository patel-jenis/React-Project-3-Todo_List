import React, { useRef, useState } from 'react'

const App = () => {
    const [toDo, setTodo] = useState([]);

    const inputRef = useRef(null);
    const selectRef = useRef(null);

    const handleTask = (e) => {
        e.preventDefault();
        let taskName = inputRef.current.value;
        let priority = selectRef.current.value;

        let taskObj = {
            id: Date.now(),
            taskName, priority
        }

        if (taskName.trim() === "" || priority.trim() === "") {
            alert("Please Fill All Details....");
            return;
        }

        setTodo([...toDo, taskObj]);

        inputRef.current.value = "";
        selectRef.current.value = "";
    }

    return (
        <div className="container">
            <h1 className='text-center mt-5 text-light'>To Do List</h1>
            <form action="" onSubmit={handleTask}>
                <div className='row justify-content-center'>
                    <div className="col-xl-9 col-lg-10 col-12">
                        <div className='glass-effect rounded-3 p-sm-5 p-4 my-5'>
                            <div className='row align-items-center gy-3'>
                                <div className="col-sm-6">
                                    <div>
                                        <input type="text" className='py-3 form-control' placeholder='Enter Task' ref={inputRef} />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div>
                                        <select className='form-select py-3' ref={selectRef}>
                                            <option value="">Select Priority</option>
                                            <option value="1">High</option>
                                            <option value="2">Medium</option>
                                            <option value="3">Low</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div>
                                        <button className='py-3 px-0 btn btn-dark w-100 text-nowrap'>Add Task</button>
                                    </div>
                                </div>
                                <div className="col-12">
                                    {
                                        toDo.map((task) => {
                                            return <div className='my-3 clr p-3 rounded-2 d-md-flex align-items-center justify-content-between' key={task.id}>
                                                <h5 className='m-md-0 mb-3 fs-5'>{task.taskName}</h5>
                                                <div className='d-flex align-items-center gap-5 justify-content-between'>
                                                    <p className={`py-2 px-4 m-0 text-light bg-${task.priority === "1" ? "success"
                                                        : task.priority === "2" ? "warning" : "danger"} bg-gradient rounded-2`}>
                                                        {task.priority === "1" ? "High"
                                                            : task.priority === "2" ? "Medium" : "Low"}
                                                    </p>
                                                    <div>
                                                        <button className='btn bg-danger bg-gradient bg-opacity-75 py-2 px-3 m-0'>X</button>
                                                    </div>
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default App