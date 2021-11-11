import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form,FormGroup,Label,Input,Container,Row,Col } from 'reactstrap';
import React from 'react';
import { Link } from 'react-router-dom';

const addArtista = _ =>{


   const addArt= (event)=>{
        event.preventDefault();
        let artista = {
            "id":event.target.id.value,
            "title":event.target.nombre.value,
            "nationality":event.target.nacionalidad.value,
            "year":event.target.year.value,
            "url":event.target.url.value,
            "description": event.target.description.value
        };
        console.log(artista)
        fetch('https://hardcore-wright-668287.netlify.app/.netlify/functions/api/'+event.target.id.value, {
            method: 'Post',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(artista)
         }).then(function(res){ window.location.href= "/" });
    }

    return(
        <Container className={'container-sm'}>
            <Form className={'mt-4'} onSubmit={addArt}>
                <Row className={'mb-2'}>
                    <Col sm={6}>
                    <FormGroup>
                            <Label for="nombre">ID:</Label>
                            <Input type="text" name="id" id="id" required/>
                        </FormGroup> 
                        <FormGroup>
                            <Label for="nombre">Nombre:</Label>
                            <Input type="text" name="nombre" id="nombre" required/>
                        </FormGroup> 
                        <FormGroup>
                            <Label for="year">Año:</Label>
                            <Input type="text" name="year" id="year" required/>
                        </FormGroup>
                    </Col>
                    <Col sm={6}>
                        <FormGroup>
                            <Label for="nacionalidad">Nacionalidad:</Label>
                            <Input type="text" name="nacionalidad" id="nacionalidad" required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="url">Url Imagen:</Label>
                            <Input type="text" name="url" id="url" />
                        </FormGroup>
                    </Col>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="textarea" name="description" id="description" rows="7"  required/>
                    </FormGroup>
                </Row>
                <Link to='/artistas' className={"btn btn-secondary "} style={{marginRight:'20px'}}>Go back</Link>
                <Button type="submit" color="primary" className={"ml-3"} >Add</Button>
            </Form>
        </Container>
    );


}

export default addArtista;