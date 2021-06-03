import { makeStyles } from '@material-ui/core/styles';
import sizes from '../../helpers/sizes';
import chroma from 'chroma-js';

export default makeStyles({
    root: {
        height: '20%',
        width: '25%',
        cursor: 'pointer',
        [sizes.down('lg')]: {
            width: '25%',
            height: '20%'
        },
        [sizes.down('md')]: {
            width: '50%',
            height: '10%'
        },
        [sizes.down('sm')]: {
            width: '100%',
            height: '5%'
        },
    },
    boxContent: {
        width: '100%',
        height: '100%',
        padding: '10px',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '0.9rem',
        color: 'black',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start',
        color: props => chroma(props.color).luminance() <= 0.08 ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)',
        '&:hover svg': {
            transition: '0.25s',
            transform: 'scale(1.2)',
            padding: '1px',
            color: 'white',
        },
    },
    name: {
        fontSize: '1.2rem'
    },
    delete: {
        alignSelf: 'end',
        transition: '0.25s',
        borderRadius: '10px',
        fontSize: '1.3rem',
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.3)',
            transition: '0.25s',
        }
    }
})