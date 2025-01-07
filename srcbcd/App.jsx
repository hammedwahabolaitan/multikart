import Router from "./frame/Router";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function App() {
  return (
    <RecoilRoot>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={true}
        newestonTop={false}
        closeOnClick
        // className="max-w-32 fixed z-50 border"
      />
      <div className="bg-blac text-whit ">
        <Router />
      </div>
    </RecoilRoot>
  );
}