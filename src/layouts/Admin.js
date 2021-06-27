import React from 'react';
import { Sidebar } from '../../src/components/Sidebar/Sidebar'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
//import DashboardPage from "views/Dashboard/Dashboard";
import DashboardPage from '../views/Dashboard/Dashboard';
import styles from '../../src/assets/js/adminStyle';
import { makeStyles } from "@material-ui/core/styles";

import { DashboardRoutes } from '../../src/components/Sidebar/SideBarMenu'
const useStyles = makeStyles(styles);


export function Admin() {
    const classes = useStyles();
    return (
        <>
            <Sidebar routes={DashboardRoutes}></Sidebar>
        </>
    )
}

