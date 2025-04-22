import './index.css';
import AppRouter from './config/Router';
import Theme from './config/Theme/theme';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkIsAuthenticated, saveUserDetails } from './redux/Slices/AuthSlice';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    if(localStorage.getItem("userDetails")) {
      dispatch(saveUserDetails(JSON.parse(localStorage.getItem("userDetails"))));
      dispatch(checkIsAuthenticated(true));
    }
  }, [localStorage.getItem("userDetails")]);

  console.log("");

  return (
    <Theme theme={false}>
      <div className='min-h-screen'>
        <AppRouter /> 
      </div>
    </Theme>
  )
}

export default App
