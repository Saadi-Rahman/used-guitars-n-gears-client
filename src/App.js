import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes';

function App() {
  return (
    <div className="bg-stone-100 md:mx-10 lg:mx-32">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
