import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container,Row,Col } from 'reactstrap';

const ShowArtista = _ => {
    const [error, setError] = useState(null);
    const [isLoaded,setIsLoaded] = useState(false);
    const [artista, setArtista] = useState({
        id: '',
        title: '',
        nationality:'',
        year:'',
        url:'',
        description:''
      })

    let params=useParams();

    useEffect (() => {
        fetch("https://hardcore-wright-668287.netlify.app/.netlify/functions/api/" + params.id)
        .then(res => res.json())
        .then(
          (result) => {
            setArtista(result);
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
                <img style={{height:'300px'}} src={artista.url}></img>
                <h3>Nombre: {artista.title}</h3>
                <h5>Nacionaldiad: {artista.nationality}</h5>
                <h5>Año: {artista.year}</h5>
                </Col>
                <Col md={6} className={"mt-5"}>
                <h3>Descripción</h3>
                <p>{artista.description}</p>
                </Col>
            </Row>
            <Link to='/artistas' className={"btn btn-secondary"}>Go back</Link>
        </Container>
    );
     
}

export default ShowArtista;