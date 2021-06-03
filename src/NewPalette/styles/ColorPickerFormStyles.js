import { makeStyles } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from '../constants';

export default makeStyles((theme) => ({
    drawer: {
        width: DRAWER_WIDTH,
        flexShrink: 0,
      },
    drawerPaper: {
        width: DRAWER_WIDTH,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
    },
    container: {
        width: '90%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginBottom: '2rem',
    },
    buttons: {
        width: '90%',
    },
    button: {
        width: '46%',
        margin: '0 2%'
    },
    picker: {
        width: '100% !important',
        margin: '2rem',
    },
    
    colorNameForm: {
        width: '100%',

    },
    colorNameInput: {
        width: '100%',
        height: '70px',
    },
    addColor: {
        width: '90%',
        padding: '0.8rem',
        fontSize: '1.5rem',
        marginLeft: '1rem'
    },
}));