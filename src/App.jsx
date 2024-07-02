import { createBrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/wishlist",
  },
]);

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
