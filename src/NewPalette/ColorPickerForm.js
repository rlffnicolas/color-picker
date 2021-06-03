import React, { useState, useEffect } from 'react';

import styles from './styles/ColorPickerFormStyles';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';

import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { arrayMove } from 'react-sortable-hoc';
import { Link } from 'react-router-dom';

const useStyles = styles;

function ColorPickerForm({
    open,
    setOpen,
    paletteIsFull,
    colors,
    maxColors,
    palettes,
    setColors,
    drawerWidth,
    handleDrawerClose
}) {
    const classes = useStyles();
    const [currentColor, setCurrentColor] = useState('#000');
    const [newName, setNewName] = useState('');

    useEffect(() => {
        ValidatorForm.addValidationRule('isColorNameUnique', value => {
            return colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            );
        });
        ValidatorForm.addValidationRule('isColorUnique', value => {
            return colors.every(
                ({ color }) => color !== currentColor.hex
            );
        });
    });

    
    const handleChangeColor = currentColor => {
        setCurrentColor(currentColor)
    };
    const setRandomColor = () => {
        const allColors = palettes.map(p => {
            return p.colors
        }).flat()
        const rand = Math.floor(Math.random() * allColors.length)
        const randomColor = allColors[rand]
        setCurrentColor({ name: randomColor.name, hex: randomColor.color });
    }
    const clearColors = () => {
        setColors([])
    }
    const addNewColor = () => {
        const newColor = { color: currentColor.hex, name: newName }
        setColors([...colors, newColor])
        setNewName('');
    }
    const handleNewNameChange = e => {
        setNewName(e.target.value);
    }


    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose} className={classes.chevronLeftIcon}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>

            <Divider />

            <div className={classes.container}>
                <Typography variant='h4' className={classes.title}>
                    Design your palette
                </Typography>

                <div className={classes.buttons}>
                    <Button
                        variant='contained'
                        color='secondary'
                        onClick={clearColors}
                        className={classes.button}
                    >
                        Clear palette
                    </Button>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={setRandomColor}
                        disabled={paletteIsFull}
                        className={classes.button}
                    >
                        Random color
                    </Button>
                </div>

                <ChromePicker color={currentColor} onChange={handleChangeColor} className={classes.picker} />

                <ValidatorForm onSubmit={addNewColor} className={classes.colorNameForm} instantValidate={false}>
                    <TextValidator
                        value={newName}
                        placeholder='Color Name'
                        onChange={handleNewNameChange}
                        className={classes.colorNameInput}
                        validators={[
                            'required',
                            'isColorNameUnique',
                            'isColorUnique'
                        ]}
                        errorMessages={[
                            'Enter a color name',
                            'Color name must be unique.',
                            'Color already used!'
                        ]}
                    />

                    <Button
                        variant='contained'
                        style={{ backgroundColor: colors.length >= maxColors ? 'grey' : currentColor.hex }}
                        type='submit'
                        disabled={paletteIsFull}
                        className={classes.addColor}
                    >
                        {paletteIsFull ? "Palette full" : "Add color"}
                    </Button>

                </ValidatorForm>
            </div>
        </Drawer>
    )
}

export default ColorPickerForm;