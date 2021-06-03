import {makeStyles} from '@material-ui/core/styles';

export default makeStyles({
    navbar: {
        display: 'flex',
        height: '6vh',
        alignItems: 'center'
    },
    logo: {
        marginRight: '15px',
        padding: '0 13px',
        fontSize: '22px',
        backgroundColor: '#eceff1',
        fontFamily: 'roboto',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        '& a': {
            textDecoration: 'none',
            color: 'black'
        }
    },
    select: {
        marginLeft: 'auto',
        marginRight: '1rem'
    }
});