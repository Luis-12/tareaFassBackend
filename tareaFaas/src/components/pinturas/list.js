import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Button,CardTitle,CardImg,Container,Row,Col,CardText} from 'reactstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import IndexMenu from '../index';

class ListPinturas extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
    
   eliminar = (dato) => {
      var opcion = window.confirm("Estás Seguro que deseas Eliminar la pintura "+dato.title);
      if (opcion == true) {
        fetch('https://elastic-jackson-7dcb0e.netlify.app/.netlify/functions/api/'+dato.id, {
          method: 'DELETE'
      }).then((res)=>{ window.location.href="/" },(error)=>{window.location.href="/"});
      }
    };
  
    componentDidMount() {
      setTimeout(()=>{
      fetch("https://elastic-jackson-7dcb0e.netlify.app/.netlify/functions/api/")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
      },2000)
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
               <Link to="/addpintura" className={"btn btn-primary mt-4"}>Add Pintura</Link>
            {items.map(item => (
                <Col sm={4} className={"mt-5"} key={item.id}>
                    <Card>
                        <CardImg top style={{height:'300px'}} src={item.url} />
                        <CardTitle>
                            <h4 style={{textAlign:'center'}}>{item.title}</h4>
                        </CardTitle>
                        <CardText>
                             <h6 style={{fontSize:'13px'}}>Age: {item.age}</h6>
                            <h6 style={{fontSize:'13px'}}>Size: {item.size}</h6>
                        </CardText>
                        <Row>
                        <Col sm={4} style={{textAlign:'center'}} >
                                <Link className={"btn btn-info"} to={'showpintura/'+ item.id} style={{color:'white'}}>Show</Link>
                            </Col>
                            <Col sm={4} style={{textAlign:'center'}} >
                                <Link className={"btn btn-success"} to={'pintura/'+ item.id} style={{color:'white'}}>Update</Link>
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

  export default ListPinturas;