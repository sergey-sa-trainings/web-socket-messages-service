import { Routes, Route } from 'react-router-dom';
import { Main } from '../../screens/Main/Main';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index path='/' element={<Main />} />
      <Route path='*' element={<Main />} />
    </Routes>
  );
}