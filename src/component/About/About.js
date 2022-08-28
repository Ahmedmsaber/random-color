import './About.css'
import IconReact from '../undraw_react_re_g3ui.svg'
const About = ()=>{
    return(
        <div className='about'>
            <div className='about-image'>
                <img src={IconReact} />
            </div>
            <div className='about-words'>
                <h2>What About Us</h2>
                <p>We are Student Make a Simple Random Color Generator Maybe Help any One to Select Color To Insert it in his Design </p>
                <p style={{fontWeight: "700"}}>Made By ReactJS</p>
            </div>
        </div>
    )
}
export default About