import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <HeaderStyle>
            <div className="header">
                <h1 className="header-title">Planner-App</h1>
            </div>
        </HeaderStyle>
    )
}

export default Header

const HeaderStyle = styled.div`

font-family: didot;
    font-size: 50px;
    background: url('https://media.istockphoto.com/vectors/seamless-texture-city-map-in-retro-style-outline-map-vector-id1151367251?k=20&m=1151367251&s=612x612&w=0&h=LrTD4lIrKxTerzKbvY9i0C7uCWf92g124_WlT_zOhbg=');
    background-size: 40%;
    height: 150px;

    .header-title {

        color: #f3eedb;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
        margin: 0px;
        text-align: center;
        font-family: 'Lobster', cursive;
    }

    .pin {
        color: red
    }

`
