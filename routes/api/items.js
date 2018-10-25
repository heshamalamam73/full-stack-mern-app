const express = require('express');
const router = express.Router();



//item model 
const item = require('../../models/item');


//@route get api/items 
//@desc get all items
//@access puplic
router.get('/',(req, res)=>{
item.find()
.sort({data :-1})
    .then(items =>res.json(items))

});
//create post 
router.post('/',(req, res)=>{
const newItem = new item({
    title : req.body.title,
    ingerdiants :req.body.ingerdiants,
    img :req.body.img
});
 newItem.save().then(item => res.json(item))


});
//delete post 
router.delete('/:id',(req, res)=>{
    item.findById(req.params.id)
    .then(item =>item.remove().then(()=>res.json({sccess:true})))
    .catch(err => res.status(404).json({sccess:false}))
    
});
// update post 





module.exports = router;

