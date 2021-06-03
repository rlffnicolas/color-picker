import { makeStyles } from '@material-ui/core/styles';
import sizes from '../../helpers/sizes';
import bg from '../../bg.svg';

export default makeStyles({
    "@global": {
        ".fade-exit": {
            opacity: '1',
        },
        ".fade-exit-active": {
            opacity: '0',
            transition: 'opacity 500ms ease-out',
        },
    },
    root: {
        backgroundColor: '#85cc88',
        backgroundImage: `url(${bg})`,
        /* background by SVGBackgrounds.com */
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
    },
    container: {
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        [sizes.down('md')]: {
            width: '95%'
        },
    },
    nav: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        letterSpacing: '4px',
        fontSize: '1.3rem',
        fontFamily: 'Roboto',
        height: '10vh',
        lineHeight: 'center',
        '& a': {
            color: 'white',
            textDecoration: 'none',
            letterSpacing: '0px'
        }
    },
    palettes: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 22.7%)',
        gridGap: '25px 3%',
        [sizes.down('lg')]: {
            gridTemplateColumns: 'repeat(3, 31.3%)',
            gridGap: '25px 3%'
        },
        [sizes.down('md')]: {
            gridTemplateColumns: 'repeat(2, 48.42%)',
            gridGap: '25px 3%'
        },
        [sizes.down('xs')]: {
            gridTemplateColumns: 'repeat(1, 100%)',
            gridGap: '25px 0'
        }
    },
})