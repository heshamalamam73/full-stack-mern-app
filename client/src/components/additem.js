import React, { Component } from 'react';
import { Collapse, Button, FormText, Col  ,Form, FormGroup,Label,Input} from 'reactstrap';
import{connect} from 'react-redux';
import { addItem } from '../acions/itemactions'; 
import axios from 'axios';
import Spinner from './spinner'
class Addpost  extends Component {
    state = {
        Collapse: false ,
        title :'',
        img :null,
        ingerdiants:'',
        uploading:false
      };
  
    toggle=()=>{
        this.setState({Collapse : !this.state.Collapse});
    }

    onChange = e =>{
        this.setState({
             [e.target.name]:e.target.value ,
        })

    };
    selectimg = e =>{
        const file = e.target.files[0]
         const maxSize = 10485760
        if (file.size >= maxSize ){
          
             alert('thie file is tooo long , please seclect another file') 
            e.target.value=null

        }else {
                this.setState({
                    img : e.target.files[0],
                })

            }
        
    }
    
    uploadimg = e => {
        e.preventDefault();
        this.setState({
            uploading :true
        })
        const data = new FormData();
        const file = this.state.img;
        data.append('file', file) 
        data.append('upload_preset',"wxhp02hu");
        axios.post('https://api.cloudinary.com/v1_1/momuzio/image/upload',data, {
            onUploadProgress: progressEvent => {
              console.log( Math.round(progressEvent.loaded / progressEvent.total * 100 ))
            }
          })
          .then(res => {
              if (res.data.secure_url )
                console.log(res)
                this.setState({
                    img: res.data.secure_url,
                    uploading:false
                })
            const imgreview = document.getElementById("review")
            imgreview.src =res.data.secure_url
            console.log(res.statusText)
          })
          .catch(err => {
              console.log(err)
          })

    }

    onSubmetpost = e => {
        e.preventDefault();

       
            const newItem ={
                title :this.state.title ,
                img: this.state.img,
                ingerdiants: this.state.ingerdiants
    
            }
        
                this.props.addItem(newItem)
                this.toggle();
                const imgreview = document.getElementById("review")
                 imgreview.src=null;
                this.setState({
                    img:null ,
                    title:'',
                    ingerdiants:''
                })

            

        }
        
 
    
    render() 
            {
            const {img,uploading} =this.state;
            if(uploading ){
                return <Spinner /> 
            }else {

            return(
                <div>
                    <Button style={{ margin: '20px auto', display: 'block',width:'40%'}} color="dark" onClick={this.toggle} >add post </Button>
                    <Collapse isOpen={this.state.Collapse}>
                    <div className='form'>
                    <Form onSubmit={this.onSubmetpost} >
                        <FormGroup row>
                                <Label for="exampleEmail" sm={2}>Name</Label>
                                <Col sm={10}>
                                    <Input value={this.state.title}  onChange={this.onChange} type="text" name="title" id="title" placeholder="Enter your title here " />
                                </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleEmail" sm={2}>Ingriedients</Label>
                            <Col sm={10}>
                                <Input value={this.state.ingerdiants} onChange={this.onChange} style={{display: 'inline-flex',width:'95%'}} type="text" name="ingerdiants" id="exampleEmail" placeholder="Enter your subject here " />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleFile" sm={2}>Photo</Label>
                                <Col sm={10}>
                                     <Input  onChange={this.selectimg} type="file"  accept="image/*"  /> 
                                     <p className='upload' onClick={this.uploadimg} > Upload image </p>
                                     <img alt='preview' id='review' style={{ maxHeight:"400px", maxWidth:"300px"}} />                                      
                                    <FormText color="muted">
                                        you can uploud your photo (jpg , png, jpeg )
                                    </FormText>
                
                                    
                                </Col>
                          </FormGroup>
    
                    <Button style={{margin: '0 auto',display: 'block',}} color='success' > add post</Button>
                    </Form>
                    </div>
                    </Collapse>
    
                 
                </div>
                
            );

        }
     
      
    }
}

const mapStateToProps = state => ({
    item : state.item
});

export default  connect(mapStateToProps,{addItem})(Addpost)