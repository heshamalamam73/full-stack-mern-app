import React,{Component} from 'react';
import propTypes from 'prop-types'
import Moment from 'react-moment';


import { 
    Card, 
    CardImg, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    Button } from 'reactstrap';
    import { connect } from 'react-redux';
    import {getItems,deleteItem} from '../acions/itemactions'

  class Items extends Component {
      componentDidMount(){
          this.props.getItems();
      }
    removePost = id =>{
        this.props.deleteItem(id);

    }
    
    render() {
        const {items} = this.props.item;
   
        return (
            <div className='items' > 
                 {items.map(({ _id,title,img,ingerdiants,date}) =>(
                              
                                    <Card key={ _id}> 
                                        <CardBody >
                                            <CardImg src= {img}>
                                                 </CardImg>
                                            <CardTitle> 
                                                {title}
                                            </CardTitle>
                                                <CardSubtitle>
                                                <ul>
                                                    {ingerdiants}
                                                </ul>
                                                 </CardSubtitle>
                                                    <Moment format='DD/MM/YYYY'>{date}</Moment>                                            
                                                 <Button onClick={this.removePost.bind(this, _id)} size='sm' color='danger'>delete</Button>

                                        </CardBody>
                                    </Card>
                                
                                   
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

export default connect(mapStateToProps ,{ getItems,deleteItem })( Items) ;




