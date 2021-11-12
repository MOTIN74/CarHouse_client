import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
  import { Button } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProducts from '../../Dashboard/AddProducts/AddProducts'
import Admin from '../../Admin/Admin';
import useAuth from '../../../Hooks/useAuth';
import ExploreCars from '../ExploreCars/ExploreCars';
import MyOrder from '../MyOrder/MyOrder';
import DashboardHome from '../DashboardHome/DashboardHome';
import AdminRoute from '../../AdminRoute/AdminRoute';
import Review from '../Review/Review ';
import Pay from '../Pay/Pay';
import { Nav } from 'react-bootstrap';
const drawerWidth = 150;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const {logOut,user} = useAuth()
const {administrator} = useAuth()
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <img className="w-75" src="https://i.ibb.co/sK4Tr2g/car-10.jpg" alt="" />
      <Divider />
      <Link to="/home"><Button color="inherit">Home</Button></Link>
      <Link to={`${url}/dashboardHome`} ><Button color="inherit">Dashboard Home</Button></Link>
      <Link to={`${url}/explore`} ><Button color="inherit">Explore Cars</Button></Link>

     {!administrator && <Box>
      
      <Link to={`${url}/orders`} ><Button color="inherit">My Orders</Button></Link>
      <Link to={`${url}/pay`} ><Button color="inherit">Payment</Button></Link>
      <Link to={`${url}/review`} ><Button color="inherit">Review</Button></Link>
     </Box>}
     

      {administrator && <Box>
        <Link to={`${url}/addProducts`} ><Button color="inherit">Add Products</Button></Link>
            <Link to={`${url}/admin`} ><Button color="inherit">Admin</Button></Link>
            <Link to={`${url}/makeAdmin`} ><Button color="inherit">Make Admin</Button></Link>
      </Box> }
      {
       user.email ? <Nav.Link className="mx-2" onClick={logOut}>Log out</Nav.Link> : <Nav.Link className="mx-2" as={Link} to="/log">Log in</Nav.Link>
     }  
    
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box  sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar 
        position="fixed" 
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar  >
          <IconButton 
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5 " noWrap component="div">
            Dashboard
            
          </Typography>
         
        </Toolbar>
      </AppBar>
     
      <Box 
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer 
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
            
          }}
          
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          
        >
          {drawer}
          
        </Drawer>
        <Drawer 
        
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch >
    
        
        <Route exact path={`${path}/dashboardHome`}>
        <DashboardHome></DashboardHome>
        </Route>
        <Route path={`${path}/explore`}>
        <ExploreCars></ExploreCars>
        </Route>
        <AdminRoute path={`${path}/makeAdmin`}>
        <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <Route path={`${path}/orders`}>
        <MyOrder></MyOrder>
        </Route>
        <Route exact path={`${path}/pay`}>
                    <Pay/>
                    </Route>
        <Route path={`${path}/review`}>
        <Review></Review>
        </Route>
        <AdminRoute path={`${path}/addProducts`}>
        <AddProducts></AddProducts>
        </AdminRoute>
        <AdminRoute path={`${path}/admin`}>
        <Admin></Admin>
        </AdminRoute>
        {/* <AdminRoute path={`${path}/addDoctor`}>
        <AddDoctor></AddDoctor>
        </AdminRoute> */}
      </Switch>
       
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
