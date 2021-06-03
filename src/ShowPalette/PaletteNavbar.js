import React, { useState, useEffect } from 'react';

import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Link } from 'react-router-dom';
import styles from './styles/PaletteNavbarStyles';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close';

const useStyles = styles;

function Navbar({ level, changeLevel, changeFormat }) {
    const classes = useStyles();
    const [format, setFormat] = useState("hex")
    const [openSnackbar, setOpenSnackbar] = useState(false)

    const handleFormatChange = e => {
        setFormat(e.target.value);
        setOpenSnackbar(true)
    }

    const closeSnackbar = () => {
        setOpenSnackbar(false)
    }

    useEffect(() => {
        changeFormat(format);
    }, [format]);

    useEffect(() => {
        setTimeout(() => {
            setOpenSnackbar(false)
        }, 3000)
    }, [openSnackbar]);

    return (
        <header className={classes.navbar}>

            <div className={classes.logo}>
                <Link to='/'>colorpicker</Link>
            </div>

            {level ? <div className="slider">
                <span>Level: {level}</span>
                <Slider
                    defaultValue={level}
                    min={100}
                    max={900}
                    step={100}
                    onAfterChange={changeLevel}
                    style={{ width: '150px', margin: '0 10px', display: 'inline-block' }}
                    trackStyle={{ backgroundColor: 'transparent' }}
                    railStyle={{ height: '6px' }}
                    handleStyle={{ backgroundColor: 'red', outline: 'none', border: '2px solid red' }}
                />
            </div> : '' }

            <div className={classes.select}>
                <Select value={format} onChange={handleFormatChange}>
                    <MenuItem value="hex">HEX - #ffffff</MenuItem>
                    <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                    <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
                </Select>
            </div>
            <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                open={openSnackbar}
                message={<span id="message-id">Format changed to {format.toUpperCase()}</span>}
                ContentProps={{ "aria-describedby": "message-id" }}
                onClose={closeSnackbar}
                action={
                    <IconButton onClick={closeSnackbar} color='inherit' key='close' aria-label='close'>
                        <CloseIcon />
                    </IconButton>
                }
                autoHideDuration={3000}
            />
        </header>
    )
}

export default Navbar;