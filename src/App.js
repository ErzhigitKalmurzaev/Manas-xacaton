import AllRoutes from "./routes/AllRoutes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
        <AllRoutes/>
        <ToastContainer/>
    </>
  );
}

export default App;
