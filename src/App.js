
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Appointment from './Components/Appointment/Appointment';

function App() {
  return (
    <div>
      <ToastContainer />
      <Appointment />

    </div>
  );
}

export default App;
