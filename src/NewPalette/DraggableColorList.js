import React from 'react';

import DraggableColorBox from './DraggableColorBox';
import styles from './styles/DraggableColorListStyles';

import { SortableContainer } from 'react-sortable-hoc';

const useStyles = styles

const DraggableColorList = SortableContainer(({ colors, deleteColor }) => {
    const classes = useStyles();
    return (
        <div className={classes.boxes}>
            {colors.map((c, i) => <DraggableColorBox
                index={i}
                key={c.name}
                name={c.name}
                color={c.color}
                deleteColor={deleteColor} />)}
        </div>
    )
})

export default DraggableColorList;