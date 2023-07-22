import { BrowserRouter } from "react-router-dom";
import NavMobile from "./components/NavMobile";
import MainRoutes from "./routes/MainRoutes";
import SearchState from "./context/SearchState";



function App() {

  return (
    <SearchState>

      <BrowserRouter>
        <NavMobile/>
        <MainRoutes/>
      </BrowserRouter>

    </SearchState>
  );
}

export default App;
