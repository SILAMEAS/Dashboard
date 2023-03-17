import React from 'react';
import {NavLink} from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import BarChartIcon from '@mui/icons-material/BarChart';
import ListItemText from '@mui/material/ListItemText';
import {Type} from './Type';

function MyRoute({listIcon = <BarChartIcon />, listName, goto}: Type) {
  return (
    <NavLink to={goto}>
      <ListItemButton>
        <ListItemIcon>{listIcon}</ListItemIcon>
        <ListItemText primary={listName} />
      </ListItemButton>
    </NavLink>
  );
}

export default MyRoute;
