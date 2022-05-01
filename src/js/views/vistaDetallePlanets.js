import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const VistaDetallePlanets = () => {
    //useParams es un hook que se usa para obtener información desde la URL//
    let { id } = useParams();
    // console.log(id)
  const [planeta, setPlaneta] = useState(null)
    useEffect (() =>{
        fetch(`https://www.swapi.tech/api/planets/${id}`)
        .then(res => res.json())
        .then(data => setPlaneta(data.result))
        .catch(err => console.error(err))
    }, []);

    if (planeta === null ) {
        return (
            <p>Cargando...</p>
        )
    }
    return (
        <>
            <div style={{display: "flex"}}>
                <img style={{marginLeft:"50px"}} src= "http://via.placeholder.com/800x600"/>
                <div style={{display: "block", marginLeft:"auto", marginRight:"auto"}}>
                    <h2>{planeta.properties.name}</h2>
                    <p>{planeta.description}</p>
                </div>    
            </div>
            <div style={{borderColor:"#FF0000", borderWidth:"2px", borderStyle: "solid", marginTop:"20px", margin:"80px"}}></div>
            <Row style={{color:"#FF0000", margin:"80px", textAlign:"center"}}>
                <Col >Name <br/>{planeta.properties.name}</Col>
                <Col >Climate <br/>{planeta.properties.climate}</Col>
                <Col >Population <br/>{planeta.properties.population}</Col>
                <Col >Orbital <br/> Period <br/>{planeta.properties.orbital_period}</Col>
                <Col >Rotation <br/> Period <br/>{planeta.properties.rotation_period}</Col>
                <Col >Diameter  <br/>{planeta.properties.diameter}</Col>
            </Row>
        </>

        )
};