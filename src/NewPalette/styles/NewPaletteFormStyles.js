import { makeStyles, useTheme } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from '../constants';

export default makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    content: {
        flexGrow: 1,
        padding: '64px 0 0 0',
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -DRAWER_WIDTH,
        height: '100vh',
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: '0',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0',
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
        height: '100%',
    },
}));