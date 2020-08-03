import React from 'react';
import useWebAnimations,{rollIn} from "@wellyshen/use-web-animations";
import '../App.css';

export default function Example3() {

    const { ref, playState, getAnimation } = useWebAnimations({ 
        ...rollIn,
        timing: {
            duration: 3000, 
            iterations: Infinity, 
            direction: "alternate", 
            easing: "ease-in-out",
        }
    })
    return (
        <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',paddingTop:'50px'}}>
            <div>
                Current animation State: {playState}
            </div>
            <div>
                <button onClick={()=>getAnimation().play()}>Play</button>
                <button onClick={()=>getAnimation().pause()}>Pause</button>
            </div>
            <div className="target" ref={ref} >
                bounce
            </div>
        </div>
    )
}