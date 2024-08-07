import { Route, Routes } from 'react-router-dom';
import Principal from '../pages/Principal/Principal';

export default function RoutesApp()
{
    return(
        <Routes>
            <Route path='/' element={<Principal />} />
        </Routes>
    );
}