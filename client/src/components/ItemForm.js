import React, { Component } from 'react'
import axios from 'axios';


 class ItemForm extends Component {
    state={
        title2: '',
        ingerdiants:'',
        img: null,
        loading :true
    }
    onChange = e =>{
      this.setState({
          img : e.target.files[0]

      });
  };
  handleChange = e =>{
      this.setState({
          title2:e.target.vlaue
      })
  }
  componentDidMount(){
      onsubmit = e =>{
        e.preventDefault();
          const file = this.state.img
          const data = new FormData();
          data.append('file', file)
          data.append('upload_preset',"wxhp02hu");
          axios.post('https://api.cloudinary.com/v1_1/momuzio/image/upload',data)
          .then(
              res =>{
                  this.setState({
                      img :res.data.secure_url,
                      loading:false
                  })
              }
             
          )
          .catch(err =>{
              console.log(err)
          })







      }
  }

  render() {
        return (
            <React.Fragment>
                <form onSubmit={this.onsubmit}>
                    <input onChange={this.handleChange} type="text" name="title" />
                    <hr></hr>
                    <input type='file' name='img' onChange={this.onChange}/>
                    <button type='submit' >uploud </button>
                </form>

            </React.Fragment>
    
        )
  }
}

export default ItemForm;

