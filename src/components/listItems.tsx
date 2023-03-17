import * as React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import {Constant} from '../constant/ConstantVaraible';
import MyRoute from './myRouteCustom/MyRoute';
import NestedList from './MyNestList/NestList';

export const data = (
  <React.Fragment>
    <MyRoute
      goto={Constant.DASHBOARD}
      listName={'Dashboard'}
      listIcon={<DashboardIcon />}
    />
    <MyRoute
      goto={Constant.ORDERS}
      listName={'Orders'}
      listIcon={<ShoppingCartIcon />}
    />
    <MyRoute
      goto={Constant.CUSTOMERS}
      listName={'Customers'}
      listIcon={<PeopleIcon />}
    />
    <MyRoute
      goto={Constant.REPORTS}
      listName={'Reports'}
      listIcon={<BarChartIcon />}
    />
  </React.Fragment>
);
export const mainListItems = <NestedList Data={data} />;
