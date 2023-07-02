import Navbar from "./Navbar";
import Footer from "./Footer";
import HomePage from "./Home";

function App() {
  return (
    <div>
      <Navbar/>
      <div className="flex-container mb-5">
        <HomePage/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
