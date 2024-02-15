import React, { useEffect, useState } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
    const [defaultTheme,setDefaultTheme] = useState(false)
    const setDarkMode = () =>{
        document.querySelector('body').setAttribute("data-theme","dark");
        localStorage.setItem("selectedTheme","dark");
    }

    const setLightMode = () =>{
        document.querySelector('body').setAttribute("data-theme","light");
        localStorage.setItem("selectedTheme","light");
    }

    const toggleTheme = (e) =>{
        if(e.target.checked) setDarkMode();
        else setLightMode();
    }

    const selectedTheme = localStorage.getItem("selectedTheme");

    useEffect(()=>{
        if(selectedTheme==="dark"){
            setDarkMode();
            setDefaultTheme(true)
        }
        else{
            setLightMode();
            setDefaultTheme(false)
        }
    },[])
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                value={defaultTheme}
                onChange={toggleTheme}
                defaultChecked={selectedTheme==="dark"}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
