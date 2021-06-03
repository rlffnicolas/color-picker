import React, { useState } from 'react';

import ColorBox from './ColorBox';
import PaletteNavbar from './PaletteNavbar';
import PaletteFooter from './PaletteFooter';
import styles from './styles/PaletteStyles';

import { Link } from 'react-router-dom';

const useStyles = styles;

function SingleColorPalette({ palette, colorId }) {
    const classes = useStyles();
    const [format, setFormat] = useState('hex');

    const gatherShades = (palette, colorToFilterBy) => {
        let shades = []
        let allColors = palette.colors;
        for (let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }
        return shades.slice(1)
    }

    const changeFormat = format => {
        setFormat(format)
    }

    console.log(gatherShades(palette, colorId))

    const colorBoxes = gatherShades(palette, colorId).map(shade => (
        <ColorBox
            background={shade[format]}
            name={shade.name}
            key={shade.name}
            showingFullPalette={false}
        />
    ))

    return (
        <div className={`${classes.palette} SingleColorPalette`}>
            <PaletteNavbar changeFormat={changeFormat} />
            <div className={classes.paletteColors}>
                {colorBoxes}
                <div className={classes.goBack}>
                    <Link to={`/palette/${palette.id}`}>GO BACK</Link>
                </div>
            </div>
            <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
        </div>
    )
}

export default SingleColorPalette;