import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input,Container,Row,Col } from 'reactstrap';

const UpdatePinturas = _ => {
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
    let history = useHistory();

    const handleSubmit = (event) => {
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

        pintura.autores.forEach((element)=>{
            let autore={
                "autor_id": "",
                "title": ""
            }
            autore.autor_id=element.autor_id;
            autore.title=element.title;
            pinturas.autores.push(autore);
        })

        pintura.museos.forEach((element)=>{
            let museo={
                "museo_id": "",
                "title": ""
            }
            museo.museo_id=element.museo_id;
            museo.title=element.title;
            pinturas.museos.push(museo);
        })

        fetch('https://elastic-jackson-7dcb0e.netlify.app/.netlify/functions/api/', {
            method: 'PUT',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(pinturas)
         }).then(function(res){  history.push("/");});
      
    }

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
            <Form className={'mt-4'} onSubmit={handleSubmit}>
                <Row>
                    <Col sm={6}>
                    <Input type="hidden" name="id" id="id" value={pintura.id}/>
                        <FormGroup>
                            <Label for="title">Nombre:</Label>
                            <Input type="text" name="title" id="title" value={pintura.title} onChange={(e)=> setPinturas({...pintura, title: e.target.value })}/>
                        </FormGroup> 
                        <FormGroup>
                            <Label for="location">Location:</Label>
                            <Input type="text" name="location" id="location" value={pintura.age} onChange={(e)=> setPinturas({ ...pintura,age: e.target.value })}/>
                        </FormGroup>
                    </Col>
                    <Col sm={6}>
                        <FormGroup>
                            <Label for="size">Size:</Label>
                            <Input type="text" name="size" id="size" value={pintura.size} onChange={(e)=> setPinturas({ ...pintura,size: e.target.value })}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="url">Url Imagen:</Label>
                            <Input type="text" name="url" id="url" value={pintura.url} onChange={(e)=> setPinturas({...pintura, url: e.target.value })}/>
                        </FormGroup>
                    </Col>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="textarea" name="description" id="description" rows="7"  value={pintura.description} onChange={(e)=> setPinturas({ ...pintura, description: e.target.value })}/>
                    </FormGroup>
                </Row>
                <Link to='/pinturas' className={"btn btn-secondary "} style={{marginRight:'20px'}}>Go back</Link>
                <Button type="submit" color="primary" >Update</Button>
            </Form>
        </Container>
    );
     
}

export default UpdatePinturas;