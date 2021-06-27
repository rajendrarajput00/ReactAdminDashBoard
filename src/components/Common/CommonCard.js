import React from 'react'
import { Card, Container, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { NotificationsNoneOutlined } from '@material-ui/icons';
import Avtar from '../../../src/assets/images/avtar.jpg'
import { Avatar } from '@material-ui/core';
const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginTop:'10px'
    },
    cardDesign: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px'
    }

});
export default function CommonCard(props) {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardContent className={classes.cardDesign}>
                    <div>{props.data}</div>
                    <div className={classes.cardDesign}>
                        <div><NotificationsNoneOutlined></NotificationsNoneOutlined></div>
                        <div>Hello Alex</div>
                        <div><Avatar alt="Cindy Baker" src={Avtar} /></div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
