import './App.css';
import Navbar from './component/Navbar/Navbar';
import Sidebar from './component/Sidebar/Sidebar';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {Route ,BrowserRouter,NavLink,Routes} from 'react-router-dom'
import ColorCard from './component/ColorCard/ColorCard';
import Gradient from './component/GradientColor/Gradient';
import About from './component/About/About';
import Github from './component/Github/Github';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
    <div className="container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route exact path='/' element={<ColorCard/>} />
            <Route path='/gradient' element={<Gradient/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/github' element={<Github/>} />
          </Routes>
        </div>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
