import React, { useState } from 'react'
import './FishingStyle.css'

let hooked = false

const randomTime = (min, max) => {
    const time = Math.floor(Math.random()*(max-min+1)+min);
    console.log(`Fish will bite in ${time/1000} seconds.`)
    return time
}

// const fishHooked = () => {
    
    
// }

const cast = () => {
    console.log("Casting line...")
    setTimeout(() => {
        console.log(`You have a bite!`)
        let interval = setInterval(() => {
            console.log(`fishHooked - hooked = ${hooked}`)
            hooked = true;
            setTimeout(() => {
                hooked = false;
                clearInterval(interval)
            }, 3000)
        }, 1)
    }, randomTime(7000, 9000))
}

export default function Fishing() {
    const [fish, catchFish] = useState(0);
    console.log(hooked)    

    return (
        <div className="Fishing-Container">
            <div className="Fishing-Viewport" onClick={() => catchFish(fish + 1)} />
            <div className="Fishing-Dashboard" >
                <p>Caught: {fish} 🐟</p>
                <button onClick={cast}>Cast</button>
                {hooked ? 
                    <button onClick={() => catchFish(fish + 1)}>Catch</button> 
                    : 
                    <button onClick={() => console.log("Fish is not hooked")}>Catch</button>
                }
                

            </div>
        </div>
    )
}
