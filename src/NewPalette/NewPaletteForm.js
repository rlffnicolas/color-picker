import React, { useState } from 'react';

import DraggableColorList from './DraggableColorList';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';

import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import { arrayMove } from 'react-sortable-hoc';
import seedPalettes from '../seedPalettes';

import styles from './styles/NewPaletteFormStyles';

const drawerWidth = 400;
export {drawerWidth};

const useStyles = styles;

function NewPaletteForm({ savePalette, history, palettes }) {

    const classes = useStyles();
    const theme = useTheme();

    const [colors, setColors] = useState(seedPalettes[0].colors);
    const [open, setOpen] = useState(true);

    const maxColors = 20;
    const paletteIsFull = colors.length >= maxColors;

    const onSortEnd = ({oldIndex, newIndex}) => {
        setColors(arrayMove(colors, oldIndex, newIndex))
    };

    const deleteColor = colorToDelete => {
        setColors(colors.filter(({ color }) => {
            return color !== colorToDelete
        }))
    }
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    
    return (
        <div className={classes.root}>

            <PaletteFormNav 
                drawerWidth={drawerWidth}
                open={open}
                setOpen={setOpen}
                colors={colors}
                savePalette={savePalette}
                history={history}
                palettes={palettes}
                handleDrawerOpen={handleDrawerOpen}
            />

            <ColorPickerForm 
                open={open}
                setOpen={setOpen}
                paletteIsFull={paletteIsFull}
                colors={colors}
                maxColors={maxColors}
                palettes={palettes}
                setColors={setColors}
                drawerWidth={drawerWidth}
                handleDrawerClose={handleDrawerClose}
            />
            
            <main className={clsx(classes.content, {[classes.contentShift]: open,})}>
                <div className={classes.drawerHeader}>
                    <DraggableColorList
                        colors={colors}
                        deleteColor={deleteColor}
                        axis='xy'
                        onSortEnd={onSortEnd}
                        distance={20}
                    />
                </div>

            </main>

        </div>
    );
}


export default NewPaletteForm;