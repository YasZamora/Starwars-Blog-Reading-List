import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const VistaDetalleCharacter = () => {
    //useParams es un hook que se usa para obtener información desde la URL//
    let { id } = useParams();
    // console.log(id)
  const [personaje, setPersonaje] = useState(null)
    useEffect (() =>{
        fetch(`https://www.swapi.tech/api/people/${id}`)
        .then(res => res.json())
        .then(data => setPersonaje(data.result))
        .catch(err => console.error(err))
    }, []);
    console.log(personaje)
    if (personaje === null ) {
        return (
            <p>Cargando...</p>
        )
    }
    return (
        <>
            <div style={{display: "flex"}}>
                <img src= "http://via.placeholder.com/800x600"/>
                <div style={{display: "block", marginLeft:"auto", marginRight:"auto"}}>
                    <h2>{personaje.properties.name}</h2>
                    <p>{personaje.description}</p>
                </div>    
            </div>
            <div style={{borderColor:"#FF0000", borderWidth:"2px", borderStyle: "solid", marginTop:"20px", margin:"80px"}}></div>
            <Row style={{color:"#FF0000", margin:"80px", textAlign:"center"}}>
                <Col >Name <br/>{personaje.properties.name}</Col>
                <Col >Birth <br/> Year <br/>{personaje.properties.birth_year}</Col>
                <Col >Gender <br/>{personaje.properties.gender}</Col>
                <Col >Height <br/>{personaje.properties.height}</Col>
                <Col >Skin<br/>Color <br/>{personaje.properties.skin_color}</Col>
                <Col >Eye <br/> Color <br/>{personaje.properties.eye_color}</Col>
            </Row>
        </>

        )
};