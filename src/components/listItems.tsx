import * as React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import {Constant} from '../constant/ConstantVaraible';
import MyRoute from './myRouteCustom/MyRoute';
import NestedList from './MyNestList/NestList';
import {NavLink} from 'react-router-dom';
import {ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import MyNestRoute from './myRouteCustom/MyNestRoute';

export const mainListItems = (
  <React.Fragment>
    <MyNestRoute
      IsNested={true}
      goto={Constant.DASHBOARD}
      listName={'Dashboard'}
      listIcon={<DashboardIcon />}
      child={
        <MyNestRoute
          IsNested={true}
          goto={Constant.ORDERS}
          listName={'Orders'}
          listIcon={<ShoppingCartIcon />}
          child={
            <MyNestRoute
              goto={Constant.CUSTOMERS}
              listName={'Customers'}
              listIcon={<PeopleIcon />}
            />
          }
        />
      }
    />
    <MyNestRoute
      goto={Constant.ORDERS}
      listName={'Orders'}
      listIcon={<ShoppingCartIcon />}
      IsNested={true}
      child={
        <>
          <MyRoute
            goto={Constant.REPORTS}
            listName={'REPORTS'}
            listIcon={<BarChartIcon />}
          />
          <MyRoute
            goto={Constant.REPORTS}
            listName={'REPORTS'}
            listIcon={<BarChartIcon />}
          />
        </>
      }
    />
  </React.Fragment>
);
// export const mainListItems = <NestedList Data={data} />;
