import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input,Container,Row,Col } from 'reactstrap';

const UpdateAutores = _ => {
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

    let history = useHistory();
    let params=useParams();

    const handleSubmit = (event) => {
        event.preventDefault();
        let artista = {
            "id":event.target.id.value,
            "title":event.target.nombre.value,
            "nationality":event.target.nacionalidad.value,
            "year":event.target.year.value,
            "url":event.target.url.value,
            "description": event.target.description.value
        };
        fetch('https://hardcore-wright-668287.netlify.app/.netlify/functions/api/', {
            method: 'PUT',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(artista)
         }).then(function(res){ history.push("/"); });

    }

    useEffect (() => {
        fetch("https://artista-server.herokuapp.com/artista/" + params.id)
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
            <Form className={'mt-4'} onSubmit={handleSubmit}>
                <Row className={'mb-2'}>
                    <Col sm={6}>
                    <Input type="hidden" name="id" id="id" value={artista.id}/>
                        <FormGroup>
                            <Label for="nombre">Nombre:</Label>
                            <Input type="text" name="nombre" id="nombre" value={artista.title} onChange={(e)=> setArtista({...artista, title: e.target.value })}/>
                        </FormGroup> 
                        <FormGroup>
                            <Label for="year">Año:</Label>
                            <Input type="text" name="year" id="year" value={artista.year} onChange={(e)=> setArtista({...artista, year: e.target.value })}/>
                        </FormGroup>
                    </Col>
                    <Col sm={6}>
                        <FormGroup>
                            <Label for="nacionalidad">Nacionalidad:</Label>
                            <Input type="text" name="nacionalidad" id="nacionalidad" value={artista.nationality} onChange={(e)=> setArtista({...artista,nationality: e.target.value })}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="url">Url Imagen:</Label>
                            <Input type="text" name="url" id="url" value={artista.url} onChange={(e)=> setArtista({...artista,url: e.target.value })}/>
                        </FormGroup>
                    </Col>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="textarea" name="description" id="description" rows="7"  value={artista.description} onChange={(e)=> setArtista({...artista, description: e.target.value })}/>
                    </FormGroup>
                </Row>
                <Link to='/artistas' className={"btn btn-secondary "} style={{marginRight:'20px'}}>Go back</Link>
                <Button type="submit" color="primary" >Update</Button>
            </Form>
        </Container>
    );
     
}

export default UpdateAutores;