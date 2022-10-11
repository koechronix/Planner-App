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
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';


function NewTask({ onAddTask, user }) {
    const [task, setTask] = useState("")
    const [importance, setImportance] = useState(1)
    const [category_id, setCategoryId] = useState(0)

    const user_id = user.id
    
    function handleSubmit(e) {
      e.preventDefault()
  
      fetch("/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task: task,
          importance: importance,
          category_id: category_id,
          user_id: user_id
        }),
      })
      .then((r) => r.json())
      .then(newTask => {
        onAddTask(newTask)
        setTask("")
        setImportance(importance)
        setCategoryId(category_id)
      })
    }
  
    return (
      <div align='center'>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar style={{top: 65, backgroundColor: "#88D1D1"}} position="fixed">

            <Card  style={{backgroundColor: "#CAFFB7"}}>
              <CardContent>
                  <Typography style={{fontSize: 20, fontFamily: "Ubuntu", fontStyle: "italic"}} align='center' variant="p" gutterBottom component="div">
                    Make New Task!
                  </Typography>       
                  <Typography >
                    <form onSubmit={handleSubmit}>
                      <TextField
                        sx={{bgcolor: '#f3eedb' }}
                        multiline
                        variant="filled"
                        type="text"
                        name="task"
                        autoComplete="off"
                        value={task}
                        label="New Task"
                        onChange={(e) => setTask(e.target.value)}
                      />
                      <FormControl sx={{ minWidth: 275, bgcolor: '#f3eedb' }}>
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
                      <FormControl sx={{ minWidth: 275, bgcolor: '#f3eedb' }}>
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
                      <Button variant="outlined"style={{fontFamily: "Ubuntu", fontWeight: "bolder", fontStyle: "italic"}} type="submit">Submit</Button>
                    </form>
                  </Typography>
              </CardContent>
            </Card>
            <br/>
          </AppBar>
        </Box>

      </div>    
    )
}

export default NewTask

