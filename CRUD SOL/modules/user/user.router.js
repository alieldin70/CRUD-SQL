const router = require('express').Router();
const deleted = require('./contorller/Delete_user');
const getall = require('./contorller/GetAll_users');
const get_userwA = require('./contorller/GetAll_User_s a');
const getallEa = require('./contorller/GetAllUserr E a');
const getuserbyid = require('./contorller/GetUser_by_Id');
const signin = require('./contorller/Sign-in');
const signup = require('./contorller/Sign-up');
const Update = require('./contorller/Update');
const getallage = require('./contorller/GetAlluser_age');
const GetAllusers_w_cond = require('./contorller/GetAllusers_w_cond');
//post methods
router.post('/signup', signup);
router.post('/signin', signin);
//put method
router.put('/update/:id', Update);
//delete method
router.delete('/delete/:id', deleted);
//get methods
router.get('/allusers', getall);
router.get('/alluserstartA/:char', get_userwA);
router.get('/alluserendA/:char', getallEa);
router.get('/getuserbyid/:id', getuserbyid);
router.get('/getallusersage', getallage);
router.get('/getalluserwcond/:char', GetAllusers_w_cond);
module.exports = router;