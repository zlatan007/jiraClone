import './index.css';
import AppRouter from './config/Router';
import Theme from './config/Theme/theme';

function App() {

  return (
    <Theme theme={false}>
      <div className='min-h-screen'>
        <AppRouter /> 
      </div>
    </Theme>
  )
}

export default App
