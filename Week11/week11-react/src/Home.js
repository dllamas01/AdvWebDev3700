import React, {useState} from 'react';
import Books from "./Books";
import {Button} from "bootstrap-react";

function Home(props) {
    const likes = 500;
    // const name = "Bruce";
    const oName = "Hulk";
    const origName = "Bruce";
    const[name,setName] = useState(oName);
    const handleClick = () => {
        console.log("Well that clicked me off")
    }
    const handleClick2 = (name) => {
        console.log(`Well ${name} that clicked me off`)
        if(name === origName){
            name = oName;
        }else if(name == oName){
            name = origName;
        }
        setName(name);
    }
    return (
        <div>
            <h2> Welcome Home {name} </h2>
            <p> So far this many {likes} on my page  </p>
            <Button onClick={handleClick} variant="primary"> Click Me </Button>
            <Button onClick={ () => {
                handleClick2(name)}} variant="primary"> Click Me 2</Button>
            <Books />
        </div>
    );
}

export default Home;