import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "./components";

function App() {
  return (
    <Router>
      <main>
        <Layout />
      </main>
    </Router>
  );
}

export default App;
