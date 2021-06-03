import React from 'react';

import styles from './styles/PaletteFooterStyles';

const useStyles = styles;

function PaletteFooter ({paletteName, emoji}) {
    const classes = useStyles();
    return (
        <footer className={classes.paletteFooter}>
                {paletteName}
                <span className={classes.emoji}>{emoji}</span>
        </footer>
    )
};

export default PaletteFooter;