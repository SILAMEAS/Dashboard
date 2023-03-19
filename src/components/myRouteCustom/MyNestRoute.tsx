import React, {ReactNode} from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ListItemText from '@mui/material/ListItemText';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import {Constant} from '../../constant/ConstantVaraible';
import {useDisclose} from './useDisclose';
import {NavLink} from 'react-router-dom';
import {Type} from './Type';
import MyRoute from './MyRoute';

function MyNestRoute({
  child,
  goto,
  listName,
  listIcon,
  IsNested = false,
}: Type) {
  const disclose = useDisclose();
  return (
    <>
      {IsNested ? (
        <List>
          <ListItemButton onClick={disclose.onToggle} sx={{p: 0}}>
            <MyRoute goto={goto} listName={listName} listIcon={listIcon} />
            {disclose.isOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse
            in={disclose.isOpen}
            timeout="auto"
            unmountOnExit
            sx={{pl: 2}}>
            {child}
          </Collapse>
        </List>
      ) : (
        <MyRoute goto={goto} listName={listName} listIcon={listIcon} />
      )}
    </>
  );
}
export default MyNestRoute;
