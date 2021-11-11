import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText,Container,Row,Col } from 'reactstrap';

const UpdateMuseos = _ => {
    const [error, setError] = useState(null);
    const [isLoaded,setIsLoaded] = useState(false);
    const [museo, setMuseo] = useState({
        id: '',
        title: '',
        location:'',
        url:'',
        type:'',
        description:'',
        pinturas:[]
      })


    let params=useParams();
    let history = useHistory();


    const handleSubmit = (event) => {
        event.preventDefault();
        let museo = {
            "id":event.target.id.value,
            "title":event.target.title.value,
            "location":event.target.location.value,
            "url":event.target.url.value,
            "type":event.target.type.value,
            "description": event.target.description.value,
            pinturas:[]
        };

        
        museo.pinturas.forEach((element)=>{
            let pintura={
                "pintura_id": "",
                "title": ""
            }
            pintura.autor_id=element.autor_id;
            pintura.title=element.title;
            museo.pinturas.push(pintura);
        })

        fetch('https://wizardly-mahavira-c356e8.netlify.app/.netlify/functions/api/', {
            method: 'PUT',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(museo)
         }).then(function(res){  history.push("/");});
        
    }

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
            <Form className={'mt-4'} onSubmit={handleSubmit}>
                <Row>
                    <Col sm={6}>
                    <Input type="hidden" name="id" id="id" value={museo.id}/>
                        <FormGroup>
                            <Label for="title">Nombre:</Label>
                            <Input type="text" name="title" id="title" value={museo.title} onChange={(e)=> setMuseo({...museo, title: e.target.value })}/>
                        </FormGroup> 
                        <FormGroup>
                            <Label for="location">Location:</Label>
                            <Input type="text" name="location" id="location" value={museo.location} onChange={(e)=> setMuseo({...museo, location: e.target.value })}/>
                        </FormGroup>
                    </Col>
                    <Col sm={6}>
                        <FormGroup>
                            <Label for="type">Type:</Label>
                            <Input type="text" name="type" id="type" value={museo.type} onChange={(e)=> setMuseo({...museo, type: e.target.value })}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="url">Url Imagen:</Label>
                            <Input type="text" name="url" id="url" value={museo.url} onChange={(e)=> setMuseo({...museo, url: e.target.value })}/>
                        </FormGroup>
                    </Col>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="textarea" name="description" id="description" rows="7"  value={museo.description} onChange={(e)=> setMuseo({...museo, description: e.target.value })}/>
                    </FormGroup>
                </Row>
                <Link to='/museos' className={"btn btn-secondary "} style={{marginRight:'20px'}}>Go back</Link>
                <Button type="submit" color="primary" className={"mt-4"}>Update</Button>
            </Form>
        </Container>
    );
     
}

export default UpdateMuseos;