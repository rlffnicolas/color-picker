import React, { useState } from 'react';
import PaletteMetaForm from './PaletteMetaForm';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import styles from './styles/PaletteFormNavStyles';

const useStyles = styles;

function PaletteFormNav({ open, setOpen, colors, savePalette, history, palettes, handleDrawerOpen }) {
    const classes = useStyles();
    const [newPaletteName, setNewPaletteName] = useState('');
    const [formShowing, setFormShowing] = useState(false);

    
    const handleChangePaletteName = e => {
        setNewPaletteName(e.target.value);
    }
    const handleSavePalette = (emoji) => {
        setFormShowing(false);
        const newPalette = {
            paletteName: newPaletteName,
            id: newPaletteName.toLowerCase().replace(/ /g, '-'),
            colors,
            emoji,
        }
        savePalette(newPalette)
        history.push('/')
    }
    const showForm = () => {
        setFormShowing(true)
    }
    const hideForm = () => {
        setFormShowing(false)
    }

    return (
        <div className={classes.root}>
            <CssBaseline />

            <AppBar 
              position="fixed" 
              className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
              })}
              color='default' 
            >

                <Toolbar>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" noWrap>
                        Create new palette
                    </Typography>
                </Toolbar>

                <div className={classes.navBtns}>
                    <Link to='/'>
                        <Button color='secondary' className={classes.btn}>❮ Back</Button>
                    </Link>

                    <Button
                    variant='contained'
                    color='primary'
                    onClick={showForm}
                    className={classes.btn}>
                        Save Palette
                    </Button>
                    
                </div>
                
            </AppBar>

            {formShowing ? <PaletteMetaForm 
                      handleSavePalette={handleSavePalette} 
                      newPaletteName={newPaletteName}
                      handleChangePaletteName={handleChangePaletteName}
                      palettes={palettes}  
                      formShowing={formShowing}
                      hideForm={hideForm} /> : '' }
                      
        </div>
    )
}

export default PaletteFormNav;