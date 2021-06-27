
import Dashboard from "@material-ui/icons/Dashboard";
import DashboardPage from "views/Dashboard/Dashboard.js";

const dashboardRoutes = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: Dashboard,
      component: DashboardPage,
      layout: "/admin",
    },
    {
        path: "/teacher-managment",
        name: "Teacher Managment",
        icon: Person,
        component: UserProfile,
        layout: "/admin",
      },
    {
        path: "/student-managment",
        name: "Student Managment",
        icon: Person,
        component: UserProfile,
        layout: "/admin",
      },
      {
        path: "/class-managment",
        name: "Class Managment",
        icon: Person,
        component: UserProfile,
        layout: "/admin",
      },
      {
        path: "/attendance-report",
        name: "Attendance Report",
        icon: Person,
        component: UserProfile,
        layout: "/admin",
      },
      {
        path: "/notes",
        name: "Notes",
        icon: Person,
        component: UserProfile,
        layout: "/admin",
      },
      {
        path: "/user-account",
        name: "User Account",
        icon: Person,
        component: UserProfile,
        layout: "/admin",
      },
      {
        path: "/setup",
        name: "Setup",
        icon: Person,
        component: UserProfile,
        layout: "/admin",
      },
      
]

export default dashboardRoutes;
