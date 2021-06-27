import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { HomeOutlined } from '@material-ui/icons';
import { DoubleArrowOutlined } from '@material-ui/icons';
import { DoubleArrowTwoTone } from '@material-ui/icons';
import FilterIcon from '../../../../src/assets/images/filte.png'
const useStyles = makeStyles({

    mainInfo: {
        marginTop: '50px',
        fontSize: '25px',
        display: 'flex',
        gap: '15px',
    },
    borderStyle: {
        borderRight: '1px solid black'
    },
    iconColor: {
        color: 'blue'
    },
    iconSize: {
        paddingTop: '5px'
    },
    displayFlex: {
        display: 'flex',
        //alignItems: 'center'
    },
    stFontSize: {
        fontSize: '15px',
        marginTop:'12px'

    },
    FiltetIconStyle: {
        borderRadius: '3px'
    }
});

export default function ExteraInfo() {
    const classes = useStyles();
    return (
        <div className={classes.mainInfo}>
            <div style={{ flex: 1 }}>Student Managment</div>
            <div style={{ flex: 0 }} className={classes.borderStyle}></div>
            <div style={{ flex: 3 }} className={classes.displayFlex}>
                <div>
                    <HomeOutlined style={{ color: 'blue' }} className={classes.iconSize}></HomeOutlined>
                </div>
                <div>
                    <DoubleArrowOutlined className={classes.iconSize}></DoubleArrowOutlined>
                </div>
                <div className={classes.stFontSize}>
                    <p>Student Managment</p>
                </div>
            </div>
            <div>
                <img className={classes.FiltetIconStyle} src={FilterIcon} alt='filter'></img>
            </div>
        </div>
    )
}
