import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container,Row,Col } from 'reactstrap';

const ShowMuseo= _ => {
    const [error, setError] = useState(null);
    const [isLoaded,setIsLoaded] = useState(false);
    const [museo, setMuseo] = useState({
        id: '',
        title: '',
        location:'',
        url:'',
        type:'',
        description:'',
        pinturas: []
      })

    let params=useParams();

    useEffect (() => {
        fetch("https://wizardly-mahavira-c356e8.netlify.app/.netlify/functions/api/" + params.id)
        .then(res => res.json())
        .then(
          (result) => {
            setMuseo(result);
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
                <img style={{height:'300px'}} src={museo.url}></img>
                <h3>Nombre: {museo.title}</h3>
                <h5>Location: {museo.location}</h5>
                <h5>Type: {museo.type}</h5>
                <hr />
                <h5>Pinturas</h5>
                <ul>
                {museo.pinturas.map(item => (
                    <li><a href={'/showpintura/'+ item.pintura_id}>{item.title}</a></li>
                    ))}
                    </ul>
                </Col>
                <Col md={6} className={"mt-5"}>
                <h3>Descripción</h3>
                <p>{museo.description}</p>
                </Col>
            </Row>
            <Link to='/museos' className={"btn btn-secondary"}>Go back</Link>
        </Container>
    );
     
}

export default ShowMuseo;