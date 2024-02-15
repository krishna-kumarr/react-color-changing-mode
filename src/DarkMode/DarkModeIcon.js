import React, { useEffect, useState } from "react";
import { RxMoon } from "react-icons/rx";
import { BsSun } from "react-icons/bs";
import "../App.css"

const DarkModeIcon = () => {
    const [defaultTheme,setDefaultTheme] = useState(true)
    const toggleTheme = () =>{
        setDefaultTheme(!defaultTheme)
    }

    useEffect(()=>{
        const selectedTheme = localStorage.getItem("selectedTheme");
        if(defaultTheme && selectedTheme==="light"){
            setDarkMode();
            setDefaultTheme(true)
        }
        else{
            setLightMode();
            setDefaultTheme(false)
        }
    },[defaultTheme])


    const setDarkMode = () =>{
        document.querySelector('body').setAttribute("data-theme","dark");
        localStorage.setItem("selectedTheme","dark");
    }

    const setLightMode = () =>{
        document.querySelector('body').setAttribute("data-theme","light");
        localStorage.setItem("selectedTheme","light");
    }
    return (
        <div className='dark_mode'>
            
            {
                defaultTheme ? 
                    <RxMoon onClick={toggleTheme} className="theme-icon-color"/>
                :
                    <BsSun onClick={toggleTheme} className="theme-icon-color"/>
            }
        </div>
    );
};

export default DarkModeIcon;
