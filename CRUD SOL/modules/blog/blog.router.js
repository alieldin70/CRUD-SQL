const router = require('express').Router();
const Add_blog = require('./controller/Add_blog');
const Delete_blog = require('./controller/Delete_User');
const getallblogs = require('./controller/GetAllblogs');
const getblogs_user = require('./controller/Getblogs_user');
const Update_blog = require('./controller/Update_blog');
//post method
router.post('/blog', Add_blog);
//put method
router.put('/blog/:id', Update_blog);
//delete method
router.delete('/blog/:id', Delete_blog);
//get methodes
router.get('/blog', getallblogs);
router.get('/blog/:id', getblogs_user);

module.exports = router;