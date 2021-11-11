import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Button,CardTitle,CardImg,Container,Row,Col,CardText} from 'reactstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import IndexMenu from '../index';

class ListMuseos extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
    
   eliminar = (dato) => {
      var opcion = window.confirm("Estás Seguro que deseas Eliminar el museo "+dato.title);
      if (opcion == true) {
        fetch('https://wizardly-mahavira-c356e8.netlify.app/.netlify/functions/api/'+dato.id, {
          method: 'DELETE'
      }).then(function(res){ window.location.href="/" });
      }
    };
  
    componentDidMount() {
      fetch("https://wizardly-mahavira-c356e8.netlify.app/.netlify/functions/api/")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <>
          <IndexMenu/>
           <Container>
               <Row>
               <Link to="/addmuseo" className={"btn btn-primary mt-4"}>Add Museo</Link>
            {items.map(item => (
                <Col sm={4} className={"mt-5"} key={item.id}>
                    <Card>
                        <CardImg top style={{height:'300px'}} src={item.url} />
                        <CardTitle>
                            <h4 style={{textAlign:'center'}}>{item.title}</h4>
                        </CardTitle>
                        <CardText>
                             <h6 style={{fontSize:'13px'}}>Location: {item.location}</h6>
                            <h6 style={{fontSize:'13px'}}>Type: {item.type}</h6>
                        </CardText>
                        <Row>
                        <Col sm={4} style={{textAlign:'center'}} >
                                <Link className={"btn btn-info"} to={'museoShow/'+ item.id} style={{color:'white'}}>Show</Link>
                            </Col>
                            <Col sm={4} style={{textAlign:'center'}} >
                                <Link className={"btn btn-success"} to={'museo/'+ item.id} style={{color:'white'}}>Update</Link>
                            </Col>
                            <Col sm={4} style={{textAlign:'center'}} className={"mb-3"}>
                                <Button  color="danger" onClick={()=> this.eliminar(item)} >Delete</Button>
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
    }
  }

  export default ListMuseos;