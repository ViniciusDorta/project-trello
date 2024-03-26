import { Route, Routes } from 'react-router-dom';
import Kanban from '../pages/Kanban';

export default function RoutesApp()
{
    return(
        <Routes>
            <Route path='/' element={<Kanban />} />
        </Routes>
    );
}