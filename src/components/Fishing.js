import React, { useState } from 'react'
import './FishingStyle.css'


const cast = () => {
    console.log("Casting line...")
    setTimeout(() => {console.log("Bite!")}, 7000)
}

export default function Fishing() {

    const [fish, catchFish] = useState(0);

    return (
        <div className="Fishing-Container">
            <div className="Fishing-Viewport" onClick={() => catchFish(fish + 1)}>
                <p>&gt;&lt;&gt; = {fish}</p>
            </div>
            <div className="Fishing-Dashboard" >
                <p>Caught: {fish}</p>
                <button onClick={() => cast()}>Cast</button>
                <button>Catch</button>

            </div>
        </div>
    )
}
