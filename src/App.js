import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Admin } from '../src/layouts/Admin'
import { Sidebar } from '../src/components/Sidebar/Sidebar'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import DashboardView from './views/Dashboard/Dashboard';
import StudentManagment from './views/StudentManagment/StudentManagment'
import { Grid } from '@material-ui/core';
import { DashboardRoutes } from '../src/components/Sidebar/SideBarMenu'
import { ToastContainer, toast } from 'react-toastify';
function App() {
  return (
    <div className="App">
      <Router>
        <Grid container>
          <Grid item xs={3}>
          <Sidebar routes={DashboardRoutes}></Sidebar>
          </Grid>
          <Grid className='mainGridStyle' item xs={9}>
            <Switch>
              <Route path='/' exact component={StudentManagment}></Route>
              <Route path='/dashboard' exact component={DashboardView}></Route>
              <Route path='/student-managment' component={StudentManagment}></Route>
            </Switch>
          </Grid>
        </Grid>
      </Router>
        <ToastContainer />
    </div>
      );
}

      export default App;
