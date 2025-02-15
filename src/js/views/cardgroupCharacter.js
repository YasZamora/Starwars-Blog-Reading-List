import React, { useEffect, useState, useContext } from "react";
import { Card, Row, Col, Button } from 'react-bootstrap';
import {Link} from "react-router-dom";
import { Context } from "../store/appContext";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

const Feature = (props) => {
  const [feature, setFeature] = useState({})
  const caracteristicas = props.people.url
   useEffect (() => {
    fetch(caracteristicas)
    .then(res => res.json())
    .then(data => setFeature(data.result.properties)) 
    .catch(err => console.error(err))
   }, []);
   return (
     <>
    <p> Gender: {feature.gender}</p>
    <p>Hair Color: {feature.hair_color}</p>
    <p>Eye color : {feature.eye_color}</p>
    </>
   )
  };

export const CardgroupCharacter = () => {
  const [dato, setDato] = useState([])
  useEffect (() => {
    fetch("https://www.swapi.tech/api/people")
  .then(res => res.json())
  .then(data => setDato(data.results))
  //data.results es el array de objetos en donde cada objeto es un personaje//
  //entonces al colocar setDato(data.results), queda que dato es igual a data.results//
  .catch(err => console.error(err))
  }, []);
  const {store, actions} = useContext(Context);
  console.log(store.favoritos)
 
    return (
        <>
        <h4 style={{color:"red"}}>Characters</h4>
        <Row  md={5} className="g-4">
  {dato.map((people, idx) => (
    //al colocar dato.map se va a iterar cada objeto pudiendo acceder a el y cada objeto se llamará como el atributo people//
    <Col>
      <Card>
        <Card.Img variant="top" src="https://support.primaryimage.uk/wp-content/uploads/2017/07/400x200.png" style={{objectFit:"cover", height:"200px"}} />
        <Card.Body>
          <Card.Title>{people.name}</Card.Title>
          {/* //se accede a la clave name dentro del objeto// */}
          <Card.Text>
            <Feature people={people} />
          </Card.Text>
        </Card.Body>
        <div>
          <Link to={`/vistaDetalleCharacter/${people.uid}`}>
        <Button style={{float:"left",}} variant="outline-primary">Learn more!</Button>
        </Link>
        {/* onclick recibe como argumento un callback (función sin ejecutarse) */}
        {/* estos callback es el nombre de la función sin el parentesis, por ejemplo: actions.handlerfavoritos */}
        {/* Hay situaciones donde por temas de simplificación, se le suele pasar la ejecución como argumento (ej: actions.handlerfavoritos(uid)) */}
        {/* ante este tipo de sutaciones, el onclick arrojará error dado que no acepta resultado de una función (entregado por el return, resultado de la ejecución de esta) */}
        {/* Para salir del cacho, se suele crear un callback dentro del mismo onclick a través de una función anónima: () => action.handlefavoritos(uid) */}
        <Button onClick={() => actions.handlerFavoritos(people.name)} variant="outline-warning" style ={{float:"right"}}><i className="fa-regular fa-heart"></i></Button>{' '}
        </div>
       
      </Card>
     
    </Col>
  ))}
</Row>
</>
        )

};
