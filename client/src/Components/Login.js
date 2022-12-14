import { useState } from "react"
import Signup from "./Signup"
import Header from "./Header"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import styled from "styled-components";


import { useNavigate } from 'react-router-dom'

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user)
          navigate('/')
        })
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="login">
      <Header />
    <FormWrapper>
    {showLogin ? (
      <div>
        <Card align='center'style={{backgroundColor: "#B1DFB0"}}>
          <Typography style={{fontFamily: "Georgia", fontStyle: "italic", fontWeight: "bolder"}}>
            Log In
          </Typography>       
          <CardContent align='center'>
            <Typography >
              <form onSubmit={handleSubmit}>
                <TextField
                  sx={{bgcolor: '#cfe8fc' }}
                  variant="filled"
                  type="text"
                  id="username"
                  autoComplete="off"
                  label="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                /><br/><br/>
                <TextField
                  sx={{bgcolor: '#cfe8fc' }}
                  variant="filled" 
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                /><br/><br/>
                <Button variant="outlined" type="submit">
                    {isLoading ? "Loading..." : "Login"}
                </Button>
                <div>
                    {errors.map((err) => (
                      <span key={err}>{err}</span>
                    ))}
                </div>
              </form>            
            </Typography>
            <br/>
            <Typography style={{fontFamily: "Georgia", fontStyle: "italic", fontWeight: "bolder"}}>
              Don't have an account? &nbsp;
              <Button variant="outlined" onClick={() => setShowLogin(false)}>
                Sign Up
              </Button>
            </Typography>
          </CardContent>
        </Card>
    </div>
    ) : (
      
      <div>
        <Card sx={{ minWidth: 275 }} style={{backgroundColor: "#B1DFB0"}}>
                <CardContent>
                    <Typography style={{fontSize: 20, fontFamily: "Roboto"}} align='center' variant="p" gutterBottom component="div">
                      <Signup onLogin={onLogin} />
                      Already have an account? &nbsp;
                      <Button variant="outlined" onClick={() => setShowLogin(true)}>
                        Log In
                    </Button>
                    </Typography>
                </CardContent>
            </Card>
            <br/><br/>
      </div>
    )}
    </FormWrapper>
    
  </div>
  
  );
}


const FormWrapper = styled.section`
    font-family: Georgia;
    background: #f3eedb;
    padding: 10px;
    width: 50%;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 25px;
    border-radius: 5px;
    border: 5px solid #afdfd4;
    box-shadow: 0 0 0 10px #f3eedb;

    .account-create {
      text-align: center;
    }
`;


export default Login;
