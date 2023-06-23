import { BrowserRouter } from "react-router-dom";
import NavMobile from "./components/NavMobile";
import MainRoutes from "./routes/MainRoutes";



function App() {

  return (
    <>

      <BrowserRouter>
        <NavMobile/>
        <MainRoutes/>
      </BrowserRouter>

    </>
  );
}

export default App;
