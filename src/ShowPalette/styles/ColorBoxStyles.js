import chroma from 'chroma-js';
import { makeStyles } from '@material-ui/core/styles';
import sizes from '../../helpers/sizes';

export default makeStyles({
    colorBox: {
        width: '20%',
        height: props => props.showingFullPalette ? '25%' : '50%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-5.6px',
        fontFamily: "'Roboto', sans-serif",
        '&:hover button': {
            opacity: '1',
            transition: '0.3s',
            transitionDelay: '0.3s'
        },
        '&:nth-child(2)': {
            '& #copy-overlay, #copy-msg': {
                transformOrigin: 'top left'
            }
        },
        '&:nth-child(12), &:nth-child(22)': {
            '& #copy-overlay, #copy-msg': {
                transformOrigin: 'left'
            }
        },
        '&:nth-child(32)': {
            '& #copy-overlay, #copy-msg': {
                transformOrigin: 'bottom left'
            }
        },
        '&:nth-child(10)': {
            '& #copy-overlay, #copy-msg': {
                transformOrigin: 'top right'
            }
        },
        '&:nth-child(20), &:nth-child(30)': {
            '& #copy-overlay, #copy-msg': {
                transformOrigin: 'right'
            }
        },
        '&:nth-child(40)': {
            '& #copy-overlay, #copy-msg': {
                transformOrigin: 'bottom right'
            }
        },
        '&:nth-child(4), &:nth-child(6), &:nth-child(8)': {
            '& #copy-overlay, #copy-msg': {
                transformOrigin: 'top'
            }
        },
        '&:nth-child(34), &:nth-child(36), &:nth-child(38)': {
            '& #copy-overlay, #copy-msg': {
                transformOrigin: 'bottom'
            }
        },
        '&:nth-child(12).secondary': {
            '& #copy-overlay, #copy-msg': {
                transformOrigin: 'bottom left'
            }
        },
        '&:nth-child(14).secondary , &:nth-child(16).secondary, &:nth-child(18).secondary': {
            '& #copy-overlay, #copy-msg': {
                transformOrigin: 'bottom'
            }
        },
        [sizes.down('lg')]: {
            width: '25%',
            height: props => props.showingFullPalette ? '20%' : '33.333%',
        },
        [sizes.down('md')]: {
            width: '50%',
            height: props => props.showingFullPalette ? '10%' : '20%',
        },
        [sizes.down('xs')]: {
            width: '100%',
            height: props => props.showingFullPalette ? '5%' : '10%',
        },
    },
    copyText: {
        color: props => chroma(props.background).luminance() >= 0.6 ? 'black' : 'white',
    },
    colorName: {
        color: props => chroma(props.background).luminance() <= 0.08 ? 'white' : 'black'

    },
    seeMore: {
        color: props => chroma(props.background).luminance() >= 0.6 ? 'rgba(0,0,0,0.6)' : 'white',
        background: 'rgba(255, 255, 255, 0.3)',
        position: 'absolute',
        border: 'none',
        right: '0px',
        bottom: '0px',
        width: '60px',
        height: '30px',
        textAlign: 'center',
        lineHeight: '30px',
        textTransform: 'uppercase'
    },
    copyButton: {
        color: props => chroma(props.background).luminance() >= 0.6 ? 'rgba(0,0,0,0.6)' : 'white',
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
        textDecoration: 'none',
        opacity: '0'
    },
    boxContent: {
        position: 'absolute',
        width: '100%',
        padding: '10px',
        left: '0px',
        bottom: '0px',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '0.9rem',
        color: 'black'
    },
    copyOverlay: {
        opacity: '0',
        zIndex: '0',
        width: '100%',
        height: '100%',
        position: 'relative',
        transition: '0.4s'
    },
    showOverlay: {
        opacity: '1',
        transform: 'scale(1.2)',
        zIndex: '10',
        transition: '0.4s',
        boxShadow: '5px 5px 35px -6px rgba(0,0,0,1)'
    },
    copyMsg: {
        position: 'absolute',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: '0',
        color: 'white',
        transition: '0.4s',
        '& h1': {
            fontWeight: '400',
            textShadow: '1px 2px black',
            background: 'rgba(255, 255, 255, 0.2)',
            width: '100%',
            textAlign: 'center',
            marginBottom: '0',
            [sizes.down('xs')]: {
                fontSize: '2rem'
            }
        },
        '& p': {
            fontSize: '1rem',
            textTransform: 'uppercase',
            fontWeight: '100'
        }
    },
    showMsg: {
        opacity: '1',
        zIndex: '99',
        transition: '0.4s',
        transform: 'scale(1.2)'
    },
    makeUnclickable: {
        position: 'absolute',
        top: '0',
        backgroundColor: 'black',
        opacity: '0',
        height: '100vh',
        width: '100%',
        zIndex: '100'
    }
});