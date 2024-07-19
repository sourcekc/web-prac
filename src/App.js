import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Routes,Navigate} from 'react-router-dom';
import Appbar from './components/Appbar';
import ContactUs from './views/ContactUs';
import AboutUs from './views/AboutUs';
import Careers from './views/Careers';
import Projects from './views/Projects';
import Services from './views/Services';

function App() {
  return (
    <Router>
    <div>

    <div>
    <Appbar/>
    </div>


    <div className="px-[160px]">
      <Routes>
        <Route path="/" element={<Navigate to="/contactUs" replace/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/aboutUs" element={<AboutUs/>}/>
        <Route path="/careers" element={<Careers/>}/>
        <Route path="/contactUs" element={<ContactUs/>}/>
        <Route path="*" element={<Navigate to="/contactUs" replace/>}/>
      </Routes>
    </div>
    
    </div>
    </Router>
  );
}
export default App;
