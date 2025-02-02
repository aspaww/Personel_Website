// src/components/common/Toast.jsx
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useToastConfig from '../../hooks/useToastConfig'; // Yeni hook

const Toast = () => {
  const config = useToastConfig();
  
  return <ToastContainer {...config} />;
};

export default Toast;