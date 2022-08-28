import ContentTeam from '../undraw_content_team_re_6rlg.svg'
import './Github.css'
const Github = ()=>{
    const copy = (text) =>{
        navigator.clipboard.writeText(text)
    }
    return(
        <div className="github">
            <div className="content-team">
                <img src={ContentTeam} />
            </div>
            <div className='info'>
                <div className='person'>
                      <i class="fa fa-github"></i>
                      <p><a href='https://github.com/Ahmedmsaber' target="_blank">Ahmed M Saber</a></p>
                      <button  onClick={() => copy("https://github.com/Ahmedmsaber")}><i class="fa fa-clone"></i></button>
                </div>
                <p>Supporter</p>
                <div className='person'>
                      <i class="fa fa-github"></i>
                      <p><a href='https://github.com/ahmedali-dev' target="_blank">Ahmed Ali</a></p>
                      <button onClick={() => copy("https://github.com/ahmedali-dev")}><i class="fa fa-clone"></i></button>
                </div>
              
            </div>
        </div>
    )
}
export default Github