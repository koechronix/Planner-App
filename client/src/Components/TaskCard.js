import React, {useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EditTask from './EditTask';
import Button from '@mui/material/Button';

function TaskCard({task, onTaskDelete, updateTask}) {
    const [editor, setEditor] = useState(false)

    function handleClick() {
        setEditor(!editor)
    }

    function getEditor() {
        if (editor)
        return <EditTask onUpdateTask={updateTask} task={task} />
    }

    function handleDeleteClick() {
        fetch(`/tasks/${task.id}`, {
          method: "DELETE",
        })
        onTaskDelete(task.id)
    }
    
    return (
        <div align='start' >
            <Card sx={{ maxWidth: 350 }} style={{backgroundColor: "#F5FFB9"}}>
                <CardContent>
                    <Typography style={{fontSize: 20, fontFamily: "Ubuntu"}} align='start' variant="p" gutterBottom component="div">
                    {task.importance === 1 ? (
                        <div className="red">
                            {task.task.toLowerCase()}
                            <br/>
                            <Button onClick={handleClick} variant="outlined" type="submit">Edit</Button>
                            <Button onClick={handleDeleteClick} variant="outlined" type="submit">Delete</Button>
                            {getEditor()}
                        </div>
                    ) : task.importance === 2 ? (
                        <div className="blue">
                            {task.task.toLowerCase()} 
                            <br/>
                            <Button onClick={handleClick} variant="outlined" type="submit">Edit</Button>
                            <Button onClick={handleDeleteClick} variant="outlined" type="submit">Delete</Button>
                            {getEditor()}
                        </div> 
                    ) : (
                        <div>
                            {task.task.toLowerCase()}
                            <br/>
                            <Button onClick={handleClick} variant="outlined" type="submit">Edit</Button>
                            <Button onClick={handleDeleteClick} variant="outlined" type="submit">Delete</Button>
                            {getEditor()}
                        </div> 
                    )}
                    </Typography>
                </CardContent>
            </Card>
            <br/>
        </div>
    )
}
export default TaskCard