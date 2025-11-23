import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App.jsx';
import { ProtectedRoute } from '../Componentes/ProtectedRoute/index.jsx';
import Login from '../pages/Login/index.jsx';
import Logout from '../pages/Logout/index.jsx';
import Register from '../pages/Register/index.jsx';


export const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/auth'>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='logout' element={<Logout/>}/>
      </Route>
      <Route path='/' element={
        <ProtectedRoute>
          <App/>
        </ProtectedRoute>
      } />
    </Routes>
    </BrowserRouter>
  );
};