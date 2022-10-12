import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function EditTask({onUpdateTask, task}) {
    const [newTask, setTask] = useState(task.task)
    const [importance, setImportance] = useState(task.importance)
    const [category_id, setCategoryId] = useState(task.category_id)

    function handleFormSubmit(e) {
      e.preventDefault();
  
      fetch(`/tasks/${task.id}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          todo: newTask,
          importance: importance,
          category_id: category_id
        }),
      })
      .then((r) => r.json())
      .then(updatedTask => {
          onUpdateTask(updatedTask)
      })
    }
  
    return (
      <div>
        <Card sx={{ maxWidth: 500, bgcolor: '#cfe8fc' }} style={{backgroundColor: "#B1DFB0"}}>
          <CardContent>     
            <Typography >
              <form onSubmit={handleFormSubmit}>
                <TextField
                  sx={{bgcolor: '#cfe8fc' }}
                  multiline
                  variant="filled"
                  type="text"
                  name="task"
                  autoComplete="off"
                  value={newTask}
                  label="Edit Task"
                  onChange={(e) => setTask(e.target.value)}
                />
                <br/><br/>
                <FormControl sx={{ minWidth: 275, bgcolor: '#cfe8fc' }}>
                  <InputLabel align='center'>Importance</InputLabel>
                    <Select
                        value={importance}
                        label="Importance"
                        onChange={(e) => setImportance(e.target.value)}
                    >
                        <MenuItem value={1}>High</MenuItem>
                        <MenuItem value={2}>Low</MenuItem>
                    </Select>
                </FormControl>
                <br/><br/>
                <FormControl sx={{ minWidth: 200, bgcolor: '#cfe8fc' }}>
                  <InputLabel align='center'>Category</InputLabel>
                    <Select
                        value={category_id}
                        label="Category"
                        onChange={(e) => setCategoryId(e.target.value)}
                    >
                        <MenuItem value={0}>Not Specified</MenuItem>
                        <MenuItem value={1}>Exercise</MenuItem>
                        <MenuItem value={2}>Coding</MenuItem>
                        <MenuItem value={3}>Chores</MenuItem>
                        <MenuItem value={4}>Shopping</MenuItem>
                    </Select>
                </FormControl>
                <br/><br></br>
                <Button variant="outlined" type="submit">Submit</Button>
              </form>
            </Typography>
          </CardContent>
        </Card>
      </div>
  )
}

export default EditTask