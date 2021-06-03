import React, {useState} from 'react';

import MiniPalette from './MiniPalette';
import seedPalettes from '../seedPalettes';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

import styles from './styles/PaletteListStyles';

const useStyles = styles;

function PaletteList({ palettes, history, deletePalette }) {
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [paletteToDelete, setPaletteToDelete] = useState('');
    const classes = useStyles();
    const goToPalette = id => {
        history.push(`/palette/${id}`)
    }
    const openDeleteDialog = id => {
        setDeleteDialog(true);
        setPaletteToDelete(id);
    }
    const closeDeleteDialog = () => {
        setDeleteDialog(false);
        setPaletteToDelete('');
    }

    const handleDelete = () => {
        closeDeleteDialog();
        deletePalette(paletteToDelete);
    }

    const paletteList = palettes.map(palette => {
        return  <CSSTransition 
                    key={palette.id} 
                    classNames='fade' 
                    timeout={500}
                    className={classes.palette}
                >
                    <MiniPalette 
                        {...palette} 
                        openDeleteDialog={openDeleteDialog}
                        goToPalette={goToPalette}
                    />
                </CSSTransition>
    })
    

    return (
        <div className={classes.root}>

            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>Colors</h1>
                    <Link to='/palette/new'>Create palette</Link>
                </nav>
                    <TransitionGroup className={classes.palettes}>
                        {paletteList}
                    </TransitionGroup>
            </div>

            <Dialog open={deleteDialog} onClose={closeDeleteDialog} aria-labelledby="delete-dialog-title">
                <DialogTitle id="delete-dialog-title">Delete this palette?</DialogTitle>
                <List>
                    <ListItem button onClick={handleDelete}>
                        <ListItemAvatar>
                            <Avatar style={{backgroundColor: blue[100], color: blue[600]}}>
                                <CheckIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText>Delete</ListItemText>
                    </ListItem>
                    <ListItem button onClick={closeDeleteDialog}>
                        <ListItemAvatar>
                            <Avatar style={{backgroundColor: red[100], color: red[600]}}>
                                <CloseIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText>Cancel</ListItemText>
                    </ListItem>
                </List>
            </Dialog>

        </div>
    )
}

export default PaletteList;