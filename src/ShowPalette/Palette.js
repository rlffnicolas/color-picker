import React, { useState } from 'react';

import ColorBox from './ColorBox';
import PaletteNavbar from './PaletteNavbar';
import PaletteFooter from './PaletteFooter';
import styles from './styles/PaletteStyles';

const useStyles = styles;

function Palette({ palette }) {
    const classes = useStyles();
    const [format, setFormat] = useState('hex');
    const [level, setLevel] = useState(500);
    const colorBoxes = palette.colors[level].map(color => (
        <ColorBox
            background={color[format]}
            name={color.name}
            key={color.id}
            moreUrl={`/palette/${palette.id}/${color.id}`}
            showingFullPalette={true}
        />
    ))
    const changeLevel = value => {
        setLevel(value);
    }
    const changeFormat = format => {
        setFormat(format)
    }
    return (
        <>
            <PaletteNavbar level={level} changeLevel={changeLevel} changeFormat={changeFormat} />
            <div className={classes.palette}>
                <div className={classes.paletteColors}>
                    {colorBoxes}
                </div>
            </div>
            <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
        </>
    )
}

export default Palette;