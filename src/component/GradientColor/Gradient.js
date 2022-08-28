import '../ColorCard/ColorCard.css'
const Gradient = ()=>{
    const state = {
        colors:[]
    }
    const generateColor= ()=>{
        let letters = '1a2b3c4d5e6f7890'
        for(let j=0; j<100;j++){
            let color = []
            let color2 =[]
            for(let i = 0; i<6; i++){
                let letter = letters[Math.floor(Math.random() * 16)]
                color.push(letter)
                }
            for(let i = 0; i<6; i++){
                let letter2 = letters[Math.floor(Math.random() * 16)]
                color2.push(letter2)
                }
                let newColor = "#"+color.join('')
                let newColor2 = "#"+color2.join('')
                state.colors.push({color1: newColor,color2: newColor2})
                
    }
    }
    console.log(state.colors);
    generateColor()
    const copy = (text) =>{
        navigator.clipboard.writeText(text)
    }

    return(
       <>
          {state.colors.length ? state.colors.map( (color)=> <div className="card" key={Math.random()}>
            <div className="color-card" style={{backgroundImage: `linear-gradient(45deg ,${color.color1} 0%, ${color.color2} 73%)`}}>

            </div>
            <div className="color-code">
                <p>{color.color1},{color.color2}</p>
                <button onClick={() => copy(`${color.color1},${color.color2}`)}><i className="fa fa-clone"></i></button>
            </div>
            
        </div> ) : "Loading"}
       
       </>
    )
}
export default Gradient