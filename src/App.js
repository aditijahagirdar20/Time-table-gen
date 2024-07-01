import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/AppLayout/AppLayout";
import Router from "./router/Router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppLayout>
          <Router />
        </AppLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
