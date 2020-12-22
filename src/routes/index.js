const router= require('express').Router();
const {getUsers,createUser,getUserById,deleteUser,updateUser}= require('../controllers/index.controller');

router.get('/users',getUsers);
router.post('/users',createUser);
router.delete('/users/:id',deleteUser);
router.put('/users/:id',updateUser);
router.get('/users/:id',getUserById);

module.exports=router;