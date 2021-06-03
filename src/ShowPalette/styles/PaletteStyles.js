import {makeStyles} from '@material-ui/core/styles';
import { FormatSizeRounded } from '@material-ui/icons';
import sizes from '../../helpers/sizes';

export default makeStyles({
    palette: {
        height: '90vh'
    },
    paletteColors: {
        height: '100%'
    },
    goBack: {
        width: '20%',
        height: '50%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-5.6px',
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: 'black',
        opacity: '1',
        '& a': {
        color: 'white',
        width: '100px',
        height: '30px',
        position: 'absolute',
        display: 'inline-block',
        top: '50%',
        left: '50%',
        marginLeft: '-50px',
        marginTop: '-15px',
        border: 'none',
        outline: 'none',
        background: 'rgba(255, 255, 255, 0.3)',
        fontSize: '1rem',
        lineHeight: '30px',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: '0.3s',
        textAlign: 'center',
        textDecoration: 'none'
        },
        [sizes.down('lg')]: {
            width: '25%',
            height: '33.333%'
        },
        [sizes.down('md')]: {
            width: '50%',
            height: '20%'
        },
        [sizes.down('xs')]: {
            width: '100%',
            height: '10%'
        }
    }
});