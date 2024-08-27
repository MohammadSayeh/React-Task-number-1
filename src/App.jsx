import Clients from "./assets/Clients";
import Employees from "./assets/Employees";
import Footer from "./assets/Footer";
import Navbar from "./assets/Navbar";

export default function App(){
  return(
    <div>
      <Navbar />
      <Employees />
      <Footer/>
      <Clients/>
    </div>
    
  )
}