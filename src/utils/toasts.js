import { toast } from "react-toastify";
const styles = {
  position: "top-right",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

export const customToast = (type, message) => toast[type](message, styles);
