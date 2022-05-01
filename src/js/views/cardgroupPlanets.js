import React, { useEffect, useState, useContext } from "react";
import { Card, Row, Col, Button } from 'react-bootstrap';
import {Link} from "react-router-dom";
import { Context } from "../store/appContext";


const Feature = (props) => {
    const [feature, setFeature] = useState({})
    const caracteristicas = props.planets.url
     useEffect (() => {
      fetch(caracteristicas)
      .then(res => res.json())
      .then(data => setFeature(data.result.properties)) 
      .catch(err => console.error(err))
     }, []);
     return (
       <>
      <p>Population: {feature.population}</p>
      <p>Terrain: {feature.terrain}</p>

      </>
     )
    };
export const CardgroupPlanets =() => {
  const [dato, setDato] = useState([])  
  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets")
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
    <h4 style={{color:"red"}}>Planets</h4>
    <Row  md={5} className="g-4">
{dato.map((planets, idx) => (
//al colocar dato.map se va a iterar cada objeto pudiendo acceder a el y cada objeto se llamará como el atributo people//
<Col>
  <Card>
    <Card.Img variant="top" src="https://support.primaryimage.uk/wp-content/uploads/2017/07/400x200.png" style={{objectFit:"cover", height:"200px"}} />
    <Card.Body>
      <Card.Title>{planets.name}</Card.Title>
      {/* //se accede a la clave name dentro del objeto// */}
      <Card.Text>
        <Feature planets={planets} />
      </Card.Text>
    </Card.Body>
    <div>
      <Link to={`/vistaDetallePlanets/${planets.uid}`}>
    <Button style={{float:"left",}} variant="outline-primary">Learn more!</Button>
    </Link>
    <Button onClick={() => actions.handlerFavoritos(planets.name)} variant="outline-warning" style ={{float:"right"}}><i className="fa-regular fa-heart"></i></Button>{' '}
    </div>
   
  </Card>
 
</Col>
))}
</Row>
</>
)
};