import { NavLink, Routes } from 'react-router-dom'
import './Sidebar.css'
const Sidebar = () =>{
    return(
        <div className="sidebar">
        <ul>
            
            <li><NavLink to="/"><i className="fa fa-home"></i><p>Home</p></NavLink></li>
            <li><NavLink to="/gradient"><i className="fa fa-adjust"></i><p>Gradient</p></NavLink></li>
            <li><NavLink to="/about"><i className="fa fa-info-circle"></i><p>About</p></NavLink></li>
            <li><NavLink to="/github"><i className="fa fa-github"></i><p>Our Github</p></NavLink></li>
        </ul>
    </div>
    )
}
export default Sidebar