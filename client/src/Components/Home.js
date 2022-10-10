import React from 'react'
import TaskCard from './TaskCard'
import Typography from '@mui/material/Typography';

function Home({ user, tasks, updateTask, onTaskDelete }) {
    const userTasks = tasks.filter(task => task.user.id === user.id)
    const renderTasksListAll = userTasks.map(task => <TaskCard updateTask={updateTask} task={task} key={task.id} onupdateTask={updateTask} onTaskDelete={onTaskDelete}/>)

    return (
        <div align='center' style={{ paddingTop: 250}}>
            <Typography style={{ fontSize: 20, fontFamily: "Papyrus"}} variant="p" gutterBottom component="div">
                My plans ... for Today
            </Typography>
            {renderTasksListAll}
            <br/>
        </div>
    )
}

export default Home