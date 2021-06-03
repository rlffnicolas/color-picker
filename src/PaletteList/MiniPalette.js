import React from 'react';

import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles/MiniPaletteStyles';

const useStyles = styles

function MiniPalette ({paletteName, emoji, colors, id, openDeleteDialog, goToPalette}) {
    const classes = useStyles();
    const miniColorBoxes = colors.map(color => (
        <div className={classes.miniColor} style={{backgroundColor: color.color}} key={color.name}></div>
    ));

    const handleOpenDialog = e => {
        e.stopPropagation();
        openDeleteDialog(id);
    }

    const handleGoToPalette = () => {
        goToPalette(id)
    }

    return (
        <div className={classes.root} onClick={handleGoToPalette}>
                <DeleteIcon className={classes.deleteIcon} onClick={handleOpenDialog}　/>
            <div className={classes.colors}>
                {miniColorBoxes}
            </div>
            <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
        </div>
    )
}

export default React.memo(MiniPalette, (prevProps, nextProps) => {
    return prevProps.paletteName === nextProps.paletteName ? true : false
});