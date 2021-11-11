import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container,Row,Col } from 'reactstrap';

const ShowPinturas = _ => {
    const [error, setError] = useState(null);
    const [isLoaded,setIsLoaded] = useState(false);
    const [pintura, setPinturas] = useState({
        id: '',
        title: '',
        size:'',
        age:'',
        url:'',
        description:'',
        autores:[],
        museos:[]
      })

    let params=useParams();

    useEffect (() => {
        fetch("https://elastic-jackson-7dcb0e.netlify.app/.netlify/functions/api/" + params.id)
        .then(res => res.json())
        .then(
          (result) => {
            setPinturas(result);
            setIsLoaded(true);
          },
          (error) => {
            setError(error);
            setIsLoaded(true);
          }
        )
    },[]);

    if (error) {
        return <div>Error: {error.message}</div>;
      }
    if (!isLoaded) {
        return <div>Loading...</div>;
      } 
    return(
        <Container className={'container-sm'}>
            <Row>
                <Col md={6} className={"mt-5"}>
                <img style={{height:'300px'}} src={pintura.url}></img>
                <h4>Nombre: {pintura.title}</h4>
                <h6>Año: {pintura.age}</h6>
                <h6>Size: {pintura.size}</h6>
                <hr/>
                <h2>Artista</h2>
                <ul>
                {pintura.autores.map(item => (
                <li><a href={"/artistaShow/" + item.autor_id}>{item.title}</a> </li>
                ))}
                </ul>
                <hr/>
                <h2>Museo</h2>
                <ul>
                {pintura.museos.map(item => (
                <li><a href={"/museoShow/" + item.museo_id}>{item.title}</a> </li>
                ))}
                </ul>
                </Col>
                <Col md={6} className={"mt-5"}>
                <h3>Descripción</h3>
                <p>{pintura.description}</p>
                </Col>
            </Row>
            <Link to='/pinturas' className={"btn btn-secondary"}>Go back</Link>
        </Container>
    );
     
}

export default ShowPinturas;