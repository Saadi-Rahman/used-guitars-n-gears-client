import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';
import router from './Router/Routes';

function App() {
  return (
    <div className='bg-stone-100'>
      <div className="bg-stone-300 max-w-screen-xl mx-auto">
        <RouterProvider router={router}></RouterProvider>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
