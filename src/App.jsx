import './index.css';
import AppRouter from './config/Router';
import Theme from './config/Theme/theme';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { saveUserDetails } from './redux/Slices/AuthSlice';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem("userDetails");
    if (storedUser) {
      dispatch(saveUserDetails(JSON.parse(storedUser)));
    }
  }, []);

  return (
    <Theme theme={false}>
      <div className='min-h-screen'>
        <AppRouter /> 
      </div>
    </Theme>
  )
}

export default App
