import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import '../App.css';

export default function Example2() {

    const { ref, playState, getAnimation } = useWebAnimations({
        keyframes: [
            { transform: 'translate(0,0)' },
            { transform: 'translate(100%,100%)' }
        ],
        timing: {
            delay: 1000, // Start with a 500ms delay
            duration: 3000, // Run for 3000ms
            iterations: Infinity, // Repeatingly
            direction: "alternate", // Run the animation forwards and then backwards
            easing: "ease-in-out", // Use a fancy timing function
        },
        //     // onReady: ({ playState, animate, animation }) => {
        //     //   // Triggered when the animation is ready to play (Google Chrome: available in v84+)
        //     // },
        //     // onUpdate: ({ playState, animate, animation }) => {
        //     //   // Triggered when the animation enters the running state or changes state
        //     // },
        //     // onFinish: ({ playState, animate, animation }) => {
        //     //   // Triggered when the animation enters the finished state (Google Chrome: available in v84+)
        //     // },
        //     // More useful options...
    });



    return (
        <div>
            <div>
                Current animation State: {playState}
            </div>
            <div>
                <button onClick={() => getAnimation().play()}>Play</button>
                <button onClick={() => getAnimation().pause()}>Pause</button>
            </div>
            <div className="target" ref={ref} >
                Green Div
             </div>
        </div>
    )
}