import React from 'react';

import styles from './styles/DraggableColorBoxStyles';

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {SortableElement} from 'react-sortable-hoc';

const useStyles = styles;

const DraggableColorBox = SortableElement(({color, name, deleteColor}) => {
    const classes = useStyles({color});

    const handleDeleteColor = () => {
        deleteColor(color)
    }

    return (
        <div className={classes.root} style={{backgroundColor: color}}>
            <div className={classes.boxContent}>
                <span className={classes.name}>{name}</span>
                <DeleteOutlineIcon className={classes.delete} onClick={handleDeleteColor}/>
            </div>
        </div>
    )
})

export default DraggableColorBox;