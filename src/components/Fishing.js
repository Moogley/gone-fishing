import React, { useState, useEffect } from 'react'
import './FishingStyle.css'


export default function Fishing() {
    const [fish, catchFish] = useState(0);
    const [waiting, setWaiting] = useState(false)
    const [hooked, setHook] = useState(false)
    const [message, setMessage] = useState("Bait your hook")


    const randomTime = (min, max) => {
        const time = Math.floor(Math.random()*(max-min+1)+min);
        console.log(time/1000)
        return time;
    }


    const cast = () => {
        if (waiting) {
            setMessage("Reel in to cast again")
            return;
        }
        setMessage("Waiting for a bite...")
        setWaiting(true)    
    }


    useEffect(() => {
    if (!waiting) return;
        setTimeout(() => {
            setMessage("A bite! Catch it!")
            if (!waiting) return;
            setHook(true);
        }, randomTime(7000, 10000))
    }, [waiting])

    useEffect(() => {
    
        let catchTime = setTimeout(() => {
            setMessage("It got away...")
            setWaiting(false)
            setHook(false);
        }, 700)
        if (!waiting || !hooked) {
            clearTimeout(catchTime)
            return
        }
    }, [hooked, waiting])


    const reelIn = () => {
        if (!waiting) {
            alert("You have not cast your line out!")
            return
        }
        if (waiting && !hooked) {
            setMessage("You reel in your hook with no success.")
            setWaiting(false)
            return
        }
        setWaiting(false)
        setHook(false)
        setMessage("Nice catch!")
        return catchFish(fish + 1)
    }


    return (
        <div className="Fishing-Container">
            <div className="Fishing-Viewport" onClick={reelIn} />
            <div className="Hook-Status">
                <p>{message}</p>
            </div>
            <div className="Fishing-Dashboard" >
                <p>Caught: {fish} 🐟</p>
                <button onClick={cast}>Cast</button>
                <button onClick={reelIn}>Reel In</button>
            </div>
        </div>
    )
}
