import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form,FormGroup,Label,Input,Container,Row,Col } from 'reactstrap';
import React from 'react';
import { Link } from 'react-router-dom';

const addPintura = _ =>{


   const addPint= (event)=>{
        event.preventDefault();
        let pinturas = {
            "id":event.target.id.value,
            "title":event.target.title.value,
            "age":event.target.location.value,
            "size":event.target.size.value,
            "url":event.target.url.value,
            "description": event.target.description.value,
            "autores":[],
            "museos":[]
        };
        fetch('https://elastic-jackson-7dcb0e.netlify.app/.netlify/functions/api/'+event.target.id.value, {
            method: 'Post',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(pinturas)
         }).then(function(res){ window.location.href= "/" });
    }

    return(
        <Container className={'container-sm'}>
            <Form className={'mt-4'} onSubmit={addPint}>
                <Row>
                    <Col sm={6}>
                    <FormGroup>
                            <Label for="nombre">ID:</Label>
                            <Input type="text" name="id" id="id" required/>
                        </FormGroup> 
                        <FormGroup>
                            <Label for="title">Nombre:</Label>
                            <Input type="text" name="title" id="title" required/>
                        </FormGroup> 
                        <FormGroup>
                            <Label for="location">Location:</Label>
                            <Input type="text" name="location" id="location" required/>
                        </FormGroup>
                    </Col>
                    <Col sm={6}>
                        <FormGroup>
                            <Label for="size">Size:</Label>
                            <Input type="text" name="size" id="size" required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="url">Url Imagen:</Label>
                            <Input type="text" name="url" id="url" required/>
                        </FormGroup>
                    </Col>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="textarea" name="description" id="description" rows="7"  required/>
                    </FormGroup>
                </Row>
                <Link to='/pinturas' className={"btn btn-secondary "} style={{marginRight:'20px'}}>Go back</Link>
                <Button type="submit" color="primary" className={"ml-3"} >Add</Button>
            </Form>
        </Container>
    );
     


}

export default addPintura;