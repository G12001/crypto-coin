import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import {
  About,
  Facts,
  FAQs,
  Feature,
  Header,
  Navbar,
  Service,
  Footer,
} from "./components/index";

function App() {
  return (
    <div className="position-relative">
      <Navbar />
      <Header />
      <About />
      <Facts />
      <Feature />
      <Service />
      <FAQs />
      <Footer />
    </div>
  );
}

export default App;
