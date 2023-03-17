import {Button} from '@mui/material';
import {Box} from '@mui/system';
import React from 'react';
import {useLoaderData} from 'react-router-dom';

const Orders = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <Box sx={{width: 'full', height: '100vh'}}>
      <Button variant={'outlined'}>Orders</Button>
    </Box>
  );
};
export default Orders;
