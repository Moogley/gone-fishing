import React, { useState } from 'react'
import './FishingStyle.css'

let waiting = false
let hooked = false

const randomTime = (min, max) => {
    const time = Math.floor(Math.random()*(max-min+1)+min);
    console.log("Casting line...")
    console.log("Waiting for a bite...")
    return time;
}

const cast = () => {
    if (waiting) {
        console.log("You must reel in your hook before you may cast again")
        return;
    }
    waiting = true
    setTimeout(() => {
        if (!waiting) return;
        console.log(`You have a bite! Catch it!`);
        hooked = true;
        setInterval(() => {
            setTimeout(() => {
                if (!hooked) {
                    return;
                };
                console.log("It got away...")
                waiting = false
                hooked = false;
            }, 700)
        })
    }, randomTime(7000, 35000))    
}

export default function Fishing() {
    const [fish, catchFish] = useState(0);

    const reelIn = () => {
        if (!waiting) {
            alert("You have not cast your line out!")
            return
        }
        if (waiting && !hooked) {
            console.log("You reel in your hook with no success.")
            waiting = false
            return
        }
        console.log("You caught a fish!")
        hooked = false
        waiting = false
        return catchFish(fish + 1)
    }

    return (
        <div className="Fishing-Container">
            <div className="Fishing-Viewport" onClick={reelIn} />
            <div className="Fishing-Dashboard" >
                <p>Caught: {fish} 🐟</p>
                <button onClick={cast}>Cast</button>
                <button onClick={reelIn}>Reel In</button>
            </div>
        </div>
    )
}
