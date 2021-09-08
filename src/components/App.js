// create your App component here
import React,{useEffect, useState} from "react"

function App(){

    const [dog, setDog] = useState([])
    const [display, setDisplay] = useState(false)
    useEffect(() =>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            setDog(data)
            setDisplay(true)
        })
    }, [])

    if(!display) return <h2>Loading...</h2>
    console.log(dog)

    return <div>
        <img src={dog.message} alt="A Random Dog"/>
    </div>
}

export default App