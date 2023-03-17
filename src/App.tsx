
import React from 'react';
import DashboardContent from './components/Dashboard';


function App() {
  const [ResizeWindow, setResizeWindow] = React.useState(0);
  React.useEffect(() => {
    function handleResize() {
      setResizeWindow(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
  });

  return <DashboardContent ResizeWindow={ResizeWindow}/>;
}

export default App;
