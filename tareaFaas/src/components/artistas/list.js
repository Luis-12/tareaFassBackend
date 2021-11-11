import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Button,CardTitle,CardImg,Container,Row,Col,CardText} from 'reactstrap';
import React from 'react';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import IndexMenu from '../index';

const ListAutores = _ => {
  const [error, setError] = useState(null);
  const [isLoaded,setIsLoaded] = useState(false);
  const [items, setItems] = useState([])
  
  useEffect(() => {
    setTimeout(()=>{
    fetch("https://hardcore-wright-668287.netlify.app/.netlify/functions/api/")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
            console.log(result);
          },
          (error) => {
            setError(error);
            setIsLoaded(true);
          }
        )
    },1000)
      
    }, []);



    
     const eliminar = (dato) => {
        var opcion = window.confirm("Estás Seguro que deseas Eliminar el artista "+dato.title);
        if (opcion == true) {
          fetch('https://hardcore-wright-668287.netlify.app/.netlify/functions/api/'+dato.id, {
            method: 'DELETE'
        }).then(function(res){ window.location.href="/artistas" });
        }
      };
  
   
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } 

        return (
          <>
          <IndexMenu/>
           <Container>
               <Row className={"mb-4"}>
               <Link to="/addartistas" className={"btn btn-primary mt-4"}>Add Artista</Link>
            {items.map(item => (
                <Col sm={4} className={"mt-5"} key={item.id}>
                    <Card>
                        <CardImg top style={{height:'300px'}} src={item.url} />
                        <CardTitle>
                            <h4 style={{textAlign:'center'}}>{item.title}</h4>
                        </CardTitle>
                        <CardText>
                             <h6 style={{fontSize:'13px'}}>Year: {item.year}</h6>
                            <h6 style={{fontSize:'13px'}}>Nationality: {item.nationality}</h6>
                        </CardText>
                        <Row>
                            <Col sm={4} style={{textAlign:'center'}} >
                                <Link className={"btn btn-info"} to={'artistaShow/'+ item.id} style={{color:'white'}}>Show</Link>
                            </Col>
                            <Col sm={4} style={{textAlign:'center'}} >
                                <Link className={"btn btn-success"} to={'artista/'+ item.id} style={{color:'white'}}>Update</Link>
                            </Col>
                            <Col sm={4} style={{textAlign:'center'}} className={"mb-3"}>
                                <Button  color="danger" onClick={()=> eliminar(item)} >Delete</Button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                
            ))}
                </Row>
            </Container>
            </>
        );
      
  }

  export default ListAutores;