import React,{Component} from 'react';
import propTypes from 'prop-types'
import { 
    Container,
    Row,
    Col,
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    Button } from 'reactstrap';
    import { connect } from 'react-redux';
    import {getItems} from '../acions/itemactions'

  class Items extends Component {
      componentDidMount(){
          this.props.getItems();
      }
    
    render() {
        const {items} = this.props.item;

        return (

            <div >
            {items.map(({id,title,img,ingredients}) =>(
                <h1 key={id}>{title}</h1>
            ))}           
            </div>
        
        
        );


    }
}

 Items.propType ={
     getItems :propTypes.func.isRequired,
     item : propTypes.object.isRequired
 }
    const mapStateToProps = (state) => ({
        item : state.item
    });

export default connect(mapStateToProps ,{getItems})(Items) ;




