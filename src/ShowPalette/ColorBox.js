import React, { useState, useEffect } from 'react';
import chroma from 'chroma-js';

import styles from './styles/ColorBoxStyles';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

const useStyles = styles

function ColorBox({ background, name, moreUrl, showingFullPalette }) {
    const classes = useStyles({background, showingFullPalette});
    const [copied, setCopied] = useState(false);
    useEffect(() => {
        setTimeout(() => setCopied(false), 1000)
    }, [copied])
    return (
        <>
            <div className={classes.makeUnclickable} style={{ display: copied ? "block" : "none" }} />
            <CopyToClipboard text={background} onCopy={() => setCopied(true)}>
                <div className={`${classes.colorBox} ${!showingFullPalette ? 'secondary' : ''}`} style={{ background }} >
                    <div id='copy-overlay' className={`${classes.copyOverlay} ${copied ? classes.showOverlay : ''}`} style={{ background }} />
                        <div id='copy-msg' className={`${classes.copyMsg} ${copied ? classes.showMsg : ''}`}>
                            <h1>Copied!</h1>
                            <p className={classes.copyText}>{background}</p>
                        </div>
                        <div>
                            <div className={classes.boxContent}>
                                <span className={classes.colorName}>{name}</span>
                            </div>
                            <button className={classes.copyButton}>Copy</button>
                        </div>
                        {showingFullPalette && <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                        <span className={classes.seeMore}>More</span>
                    </Link> }
                </div>
            </CopyToClipboard>
        </>
    )
}

export default ColorBox;