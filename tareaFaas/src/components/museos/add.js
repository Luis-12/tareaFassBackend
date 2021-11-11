import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form,FormGroup,Label,Input,Container,Row,Col } from 'reactstrap';
import React from 'react';
import { Link } from 'react-router-dom';

const addMuseo = _ =>{


   const addArt= (event)=>{
        event.preventDefault();
        let museo = {
            "id":event.target.id.value,
            "title":event.target.nombre.value,
            "location":event.target.location.value,
            "type":event.target.type.value,
            "url":event.target.url.value,
            "description": event.target.description.value,
            "pinturas": {}
        };
        fetch('https://wizardly-mahavira-c356e8.netlify.app/.netlify/functions/api/'+event.target.id.value, {
            method: 'Post',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(museo)
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
                            <Label for="location">Location</Label>
                            <Input type="text" name="location" id="location" required/>
                        </FormGroup>
                    </Col>
                    <Col sm={6}>
                        <FormGroup>
                            <Label for="type">Type:</Label>
                            <Input type="text" name="type" id="type" required/>
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
                <Link to='/museos' className={"btn btn-secondary "} style={{marginRight:'20px'}}>Go back</Link>
                <Button type="submit" color="primary" className={"ml-3"} >Add</Button>
            </Form>
        </Container>
    );


}

export default addMuseo;