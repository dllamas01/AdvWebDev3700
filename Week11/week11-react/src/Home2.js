import React, {useState} from 'react';
import Books from "./Books";
import {Button} from "bootstrap-react";
import {Col, Row} from "react-bootstrap";

function Home2(props) {
    const[name, setName]= useState('');
    const[age, setAge]= useState('');
    const[power, setPower]= useState('');
    const superHero=[
        {"Hulk": {Age: 135 , Power : 'Smash'}},
        {"SpiderMan": {Age:16, Power: 'Webs'}},
        {"IronMan": {Age:45, Power: 'The Suit'}}
    ]
    //Approximation
    // function findThisRow(inName){
    //     for(let i=0; i<superHero.length; i++){
    //         let k = superHero[i].keys[0];
    //         if(k === inName) return superHero[i];
    //     }
    //     return null;
    // }
    const handClick1= (inName) => {
        console.log(`inName=${inName}`);
        let k = Object.keys(superHero);
        // console.log
        const row = superHero.find( heroObj => {
            return Object.keys( heroObj)[0] === inName;
        })
        console.log("Row"); console.log(row);
        let r = Object.keys(row)[0];
        setName(r);
        setAge(row[r].Age);
        setPower(row[r].Power);
    }

    return (
        <div>
            <Row>
            <Row>
                <h2>Welcome Human</h2>
            </Row>
            <Row>
                <Col sm={3}></Col>
                <Col sm={4}>{name} is {age} years old and power is {power}</Col>
            </Row>
                <Col sm={4}>
                    <Button variant="Danger" onClick={ () =>
                        handClick1("IronMan")}> Ironman</Button>
                </Col>
                <Col sm={4}>
                    <Button variant="Danger" onClick={ () =>
                        handClick1("SpiderMan")}> SpiderMan</Button>
                </Col>
                <Col sm={4}>
                    <Button variant="Danger" onClick={ () =>
                        handClick1("Hulk")}> Hulk</Button>
                </Col>
            </Row>
        </div>
    );
}

export default Home2;