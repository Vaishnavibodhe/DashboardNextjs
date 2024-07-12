'use client'
import Link from 'next/link';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import LuggageIcon from '@mui/icons-material/Luggage';
import QrCodeIcon from '@mui/icons-material/QrCode';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PaymentsIcon from '@mui/icons-material/Payments';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import DiscountIcon from '@mui/icons-material/Discount';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


const Sidebar = () => {
    const [state, setState] = React.useState({
       
        left: false,
        
       
      });
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
      const list = (anchor) => (
    <Box 
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="bg-blue-950 text-white ">
        {/*['', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))*/}
        <ListItem className="mt-15" >
            <ListItemButton>
              <ListItemIcon>
              <HomeIcon className="text-white"/>
              </ListItemIcon>
              <Link href="/"><ListItemText primary={"Home"} /></Link>
            </ListItemButton>
          </ListItem>

          <ListItem className="" >
            <ListItemButton>
              <ListItemIcon>
              <LuggageIcon className="text-white"/>
              </ListItemIcon>
              <Link href="/orders"><ListItemText primary={"Orders"} /></Link>
            </ListItemButton>
          </ListItem>

          <ListItem className="" >
            <ListItemButton>
              <ListItemIcon>
              <QrCodeIcon className="text-white"/>
              </ListItemIcon>
              <Link href="/products"><ListItemText primary={"products"} /></Link>
            </ListItemButton>
          </ListItem>

          <ListItem className="" >
            <ListItemButton>
              <ListItemIcon>
              < DeliveryDiningIcon className="text-white"/>
              </ListItemIcon>
            <Link href="/delivery"><ListItemText primary={"Delivery"} /></Link>
            </ListItemButton>
          </ListItem>

          <ListItem className="" >
            <ListItemButton>
              <ListItemIcon>
              < StorefrontIcon className="text-white"/>
              </ListItemIcon>
              <Link href="/marketing"><ListItemText primary={"Marketing"} /></Link>
            </ListItemButton>
          </ListItem>

          <ListItem className="" >
            <ListItemButton>
              <ListItemIcon>
              < PaymentsIcon className="text-white"/>
              </ListItemIcon>
              <Link href="/payments"><ListItemText primary={"Payments"} /></Link>
            </ListItemButton>
          </ListItem>

          <ListItem className="" >
            <ListItemButton>
              <ListItemIcon>
              < BuildCircleIcon className="text-white"/>
              </ListItemIcon>
              <ListItemText primary={"Tools"} />
            </ListItemButton>
          </ListItem>

          <ListItem className="" >
            <ListItemButton>
              <ListItemIcon>
              <  DiscountIcon className="text-white"/>
              </ListItemIcon>
              <Link href="/discount"><ListItemText primary={"Discount"} /></Link>
            </ListItemButton>
          </ListItem>

          <ListItem className="" >
            <ListItemButton>
              <ListItemIcon>
              <  PeopleAltIcon className="text-white"/>
              </ListItemIcon>
              <Link href="/audience"><ListItemText primary={"Audience"} /></Link>
            </ListItemButton>
          </ListItem>

          <ListItem className="mt-12" >
            <ListItemButton>
              <ListItemIcon>
              <  AccountBalanceWalletIcon className="text-white"/>
              </ListItemIcon>
              <ListItemText primary={"Available Credits 222.10"} />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );
  return (
    <>
   {/*['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))*/}
     <React.Fragment >
        <MenuIcon  onClick={toggleDrawer("left",true)}/>
        <Drawer 
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
     </React.Fragment>
     
    </>
  )
}

export default Sidebar