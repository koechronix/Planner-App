import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { FaBath } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaRunning } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

function Nav( { user, onLogout } ) {
    const navigate = useNavigate();

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                onLogout(null);
            }
            navigate('/')
        });
    }

    return (
            <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{backgroundColor: "#88D1D1"}} position="fixed">
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: 'Ubuntu', color: "purple"}}>
                    {user?
                        <>Hello, {user.first_name} !</>
                    :
                        <></>
                    }  
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: 'Caveat'}}>
                    <Link to="/home" exact><FaHome/> Feed</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "Roboto", fontStyle: "italic"}}>
                    <Link to="/exercise"><FaRunning/> Exercise</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "Roboto"}}>
                    <Link to="/coding"><FaCode/> Coding</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "Roboto"}}>
                    <Link to="/chores"><FaBath/> Chores</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "Roboto"}}>
                    <Link to="/shopping"><FaShoppingCart /> Shopping</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "Ubuntu", color: "green"}}>
                    {user?
                        <Button variant="outline" href="/" onClick={handleLogoutClick}><FaSignOutAlt size="2rem" /> Logout</Button>
                    :
                        <></>
                    } 
                </Typography>
                </Toolbar>
            </AppBar>
            </Box>
    )
}

export default Nav

