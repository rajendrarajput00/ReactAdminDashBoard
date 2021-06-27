import React from 'react'
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import { HomeOutlined } from '@material-ui/icons';
import { BookOutlined } from '@material-ui/icons';
import { PeopleOutline } from '@material-ui/icons';
import { DesktopWindowsOutlined } from '@material-ui/icons';
import { NoteOutlined } from '@material-ui/icons';
import { PersonOutline } from '@material-ui/icons';
import { TuneOutlined } from '@material-ui/icons';
import { CropPortraitOutlined } from '@material-ui/icons';
import DashboardView from '../../views/Dashboard/Dashboard';
export const DashboardRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: HomeOutlined,
        component: DashboardView,
        layout: "/admin",
    },
    {
        path: "/teacher-managment",
        name: "Teacher Managment",
        icon: BookOutlined,
        component: DashboardView,
        layout: "/admin",
    },
    {
        path: "/student-managment",
        name: "Student Managment",
        icon: PeopleOutline,
        component: DashboardView,
        layout: "/admin",
    },
    {
        path: "/class-managment",
        name: "Class Managment",
        icon: DesktopWindowsOutlined,
        component: DashboardView,
        layout: "/admin",
    },
    {
        path: "/attendance-report",
        name: "Attendance Report",
        icon: CropPortraitOutlined,
        component: DashboardView,
        layout: "/admin",
    },
    {
        path: "/notes",
        name: "Notes",
        icon: NoteOutlined,
        component: DashboardView,
        layout: "/admin",
    },
    {
        path: "/user-account",
        name: "User Account",
        icon: PersonOutline,
        component: DashboardView,
        layout: "/admin",
    },
    {
        path: "/setup",
        name: "Setup",
        icon: TuneOutlined,
        component: DashboardView,
        layout: "/admin",
    },

];

