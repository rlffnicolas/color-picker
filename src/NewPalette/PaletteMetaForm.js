import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css';
import {Picker} from 'emoji-mart';
import styles from './styles/PaletteMetaFormStyles';

const useStyles = styles;

function PaletteMetaForm({ handleSavePalette, newPaletteName, handleChangePaletteName, palettes, formShowing, hideForm }) {
    const classes = useStyles();
    const [emojiPicker, setEmojiPicker] = useState(false);
    const [selectedEmoji, setSelectedEmoji] = useState('');

    useEffect(() => {
        ValidatorForm.addValidationRule('isPaletteNameUnique', value => {
            return palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            );
        });
    });

    const openEmojiPicker = () => {
        setEmojiPicker(!emojiPicker)
    }

    const hideEmojiPicker = () => {
        setEmojiPicker(!emojiPicker)
    }

    const addEmoji = (emoji) => {
        setSelectedEmoji(emoji.native)
        hideEmojiPicker()
    }
    const handleSave = () => {
        handleSavePalette(selectedEmoji)
    }

    return (
        <>
            <Dialog open={emojiPicker} onClose={hideEmojiPicker}>
                <DialogTitle>
                    Pick a palette emoji
                </DialogTitle>
                <Picker onSelect={addEmoji}/>
            </Dialog>
            <Dialog className={classes.root} open={formShowing} onClose={hideForm} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Save Palette</DialogTitle>

                <ValidatorForm onSubmit={handleSave}>
                        
                <DialogContent className={classes.content}>
                    <DialogContentText>
                        Enter a name for your new palette. Make sure it's unique.
                    </DialogContentText>
                    
                    <TextValidator
                            label='Palette Name'
                            value={newPaletteName}
                            onChange={handleChangePaletteName}
                            validators={['required', 'isPaletteNameUnique']}
                            errorMessages={['Enter palette name', 'Name already taken']}
                            fullWidth
                            margin='normal'
                        />     
                    <Button onClick={openEmojiPicker} variant='contained'>
                        Open Emoji Picker
                    </Button>
                    
                </DialogContent>
                <DialogActions>
                
                    <Button onClick={hideForm} color="secondary">
                        Cancel
                    </Button>
                    <Button type='submit' variant='contained' color="primary">
                        Add Palette
                    </Button>
                </DialogActions>
                </ValidatorForm>
            </Dialog>
        </>
    );
}

export default PaletteMetaForm;