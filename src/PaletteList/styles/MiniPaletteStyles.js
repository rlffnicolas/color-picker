import { makeStyles } from '@material-ui/core/styles';
import sizes from '../../helpers/sizes';

export default makeStyles({
    root: {
        backgroundColor: 'white',
        borderRadius: '5px',
        padding: '0.5rem',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        '&:hover svg': {
            transform: 'translateX(-40px)',
            transition: '0.3s',
        },
    },
    colors: {
        backgroundColor: '#dae1a4',
        height: '150px',
        width: '100%',
        borderRadius: '5px',
        overflow: 'hidden'
    },
    miniColor: {
        height: '25%',
        width: '20%',
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative',
        marginBottom: '-5.6px'
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0',
        color: 'black',
        paddingTop: '0.5rem',
        fontSize: '1rem',
        position: 'relative'
    },
    emoji: {
        marginLeft: '0.5rem',
        fontSize: '1.5rem'
    },
    deleteIcon: {
        color: 'white',
        backgroundColor: '#eb3d30',
        width: '20px',
        height: '20px',
        position: 'absolute',
        right: '-40px',
        top: '0',
        padding: '10px',
        zIndex: '10',
        transition: '0.3s',
        transformOrigin: 'right',
        boxShadow: 'inset 20px -19px 11px -18px rgba(0,0,0,0.62)',
    }
})