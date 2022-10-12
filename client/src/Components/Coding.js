import React, {} from "react";
import TaskCard from './TaskCard'
import Typography from '@mui/material/Typography';

function Coding( { tasks, onTaskDelete, updateTask, user }) {
    const userTasks = tasks.filter(task => task.user.id === user.id)
    const filteredTasks = userTasks.filter(task => task.category.name === 'coding') 
    const renderTasksList = filteredTasks.map(task => <TaskCard task={task} key={task.id} onTaskDelete={onTaskDelete} updateTask={updateTask}/>)

    return (
        <div align='center' style={{ paddingTop: 80}}>
            <Typography style={{fontSize: 20, fontFamily: "Papyrus"}} variant="p" gutterBottom component="div">
                Coding
            </Typography>
            {renderTasksList}
        </div>
    )
}

export default Coding