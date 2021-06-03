import { makeStyles } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from '../constants';
import sizes from '../../helpers/sizes';

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    appBarShift: {
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        marginLeft: DRAWER_WIDTH,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    hide: {
        display: 'none',
    },
    navBtns: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '1rem',
    },
    btn: {
        margin: '0 5px'
    }
}));