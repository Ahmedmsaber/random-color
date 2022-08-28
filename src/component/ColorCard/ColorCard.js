
import './ColorCard.css'

const ColorCard = ()=>{
    const state = {
        colors:[

        ]

    };
    const generateColor= ()=>{
        let letters = '1a2b3c4d5e6f7890'
        for(let j=0; j<100;j++){
            let color = []

            for(let i = 0; i<6; i++){
                let letter = letters[Math.floor(Math.random() * 16)]
                color.push(letter)
                }
                let newColor = "#"+color.join('')
                state.colors.push(newColor)
              
    }
    }
    generateColor()
    const copy =(text)=>{
        navigator.clipboard.writeText(text)
    }
    return(
        <>
       {state.colors.length ? state.colors.map( (color)=> <div className="card" key={Math.random()}>
            <div className="color-card" style={{background: color}}>

            </div>
            <div className="color-code">
                <p>{color}</p>
                <button onClick={() => copy(color)}><i class="fa fa-clone"></i></button>
            </div>
            
        </div> ) : "Loading"}
   
        </>
    )
}
export default ColorCard