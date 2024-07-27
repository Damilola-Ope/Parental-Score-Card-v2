const express = require('express');
const router = express.Router();
const {createUser, getUsers, deleteUser} = require('../controllers/userinfo.controller');

//Create
router.post('/', createUser);

// Read
router.get('/', getUsers);

//update
// router.put('/:id',updateProduct);

//delete
router.delete('/:id',deleteUser);

module.exports = router;