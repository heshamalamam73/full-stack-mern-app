import React,{Component} from 'react';
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



  class Items  extends Component {
    state = {
        items: [
            {
                title:'margrita',
                ingredients :['pomodro','mozzarella'],
                img:"https://images.pexels.com/photos/724216/pexels-photo-724216.jpeg?auto=compress&cs=tinysrgb&h=350"
            },
            {
                title:'ortolana',
                ingredients :['pomodro','mozzarella','zuccina','peprone','melanzana'],
                img:'https://images.pexels.com/photos/263041/pexels-photo-263041.jpeg?auto=compress&cs=tinysrgb&h=350'
            },
            {
                title:'funghi',
                ingredients :['pomodro','mozzarella','funghi'],
                img:'https://images.pexels.com/photos/16495/food-pizza-fast-food.jpg?auto=compress&cs=tinysrgb&h=350'
            }    
        ]
    }
 
    render() {
        const item = this.state.items.map(item=>(
            <div>
          {item.title}

            </div>
                
        ))
     
       

        return (
            <div>
                {item}
            </div>
        
        
        )
}}

export default Items ;




