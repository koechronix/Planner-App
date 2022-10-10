import React, {} from "react";
import TaskCard from './TaskCard'
import Typography from '@mui/material/Typography';

function Exercise( { tasks, onTaskDelete, updateTask, user }) {
    const userTasks = tasks.filter(task => task.user.id === user.id)
    const filteredTasks = userTasks.filter(task => task.category.name === 'exercise') 
    const renderTasksList = filteredTasks.map(task => <TaskCard task={task} key={task.id} onTodoDelete={onTaskDelete} updateTodo={updateTask}/>)

    return (
        <div align='center' style={{ paddingTop: 250}}>
            <Typography style={{fontSize: 20, fontFamily: "Papyrus"}} variant="p" gutterBottom component="div">
                Exercise
            </Typography>
            {renderTasksList}
        </div>
    )
}

export default Exercise