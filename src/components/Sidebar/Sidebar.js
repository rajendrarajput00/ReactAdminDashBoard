import React from 'react';
import SendIcon from '@material-ui/icons/Send';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import Logo from '../../../src/assets/images/logo.png'
import { Link, NavLink } from 'react-router-dom';
const styles = {
    listItemStyle: {
        paddingLeft: "25px",
    },
    sideBar: {
        background: '#ffff',
        marginLeft: '50px',
        height:'50rem'
    },
    TextDecoration: {
        TextDecoration: 'none',
        color: 'black',
        //background:'red'

    },
    logoStyle: {
        marginLeft: '15px'
    }

}
const useStyles = makeStyles(styles);

export function Sidebar(props) {
    const classes = useStyles();
    return (
        <div className={classes.sideBar}>
            <div className={classes.logoStyle}>
                <img src={Logo} alt='logo'></img>
            </div>
            <div>
                <List>
                    {props.routes &&
                        props.routes.map((data, key) => {
                            return (
                                <NavLink className={classes.TextDecoration} activeClassName='active' to={data.path}>
                                    <ListItem className='' key={key} button>
                                        <data.icon /> <ListItemText className={classes.listItemStyle} primary={data.name} />
                                    </ListItem>
                                </NavLink>
                            )
                        })
                    }
                </List>
            </div>
        </div>
    )
}

