// src/hooks/useToastConfig.js
const useToastConfig = () => ({
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    theme: "colored",
    style: { 
      fontSize: '14px',
      letterSpacing: '0.5px'
    }
  });
  
  export default useToastConfig;