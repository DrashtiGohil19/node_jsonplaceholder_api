var express = require('express');
const { registration, login } = require('../controller/loginController');
const { addUser, getUser, updateUser, deleteUser, searchUser } = require('../controller/userController');
const { addPost, getPost, updatePost, deletePost, searchPost } = require('../controller/postController');
const { addComment, getComment, updateComment, deleteComment, searchComment } = require('../controller/commentController');
const { addAlbum, getAlbum, updateAlbum, deleteAlbum, searchAlbum } = require('../controller/albumController');
const { addPhotos, getPhotos, updatePhoto, searchphotos, deletephotos } = require('../controller/photosController');
const { addtodo, getTodo, updateTodo, searchTodo, deleteTodo } = require('../controller/todoController');
const { checkToken } = require('../middlewere/auth');
var router = express.Router();

router.post("/register",registration)
router.get("/",login)

// ---- user ----

router.post("/adduser",checkToken,addUser);
router.get("/getusers",getUser)
router.put('/updateuser/:id',updateUser)
router.delete('/deleteuser/:id',deleteUser)
router.get('/searchuser',searchUser)

// ---- post ----

router.post('/addpost/:id',addPost)
router.get('/getpost',getPost)
router.put('/updatepost/:id',updatePost)
router.delete('/deletepost/:id',deletePost)
router.get('/searchpost',searchPost)

// ---- comment ----

router.post('/addcomment/:id',addComment)
router.get('/getcomment',getComment)
router.put('/updatecomment/:id',updateComment)
router.delete('/deletecomment/:id',deleteComment)
router.get('/searchcomment',searchComment)

// ---- album ----

router.post('/addalbum/:id',addAlbum)
router.get('/getalbum',getAlbum)
router.put('/updatealbum/:id',updateAlbum)
router.delete('/deletealbum/:id',deleteAlbum)
router.get('/searchalbum',searchAlbum)

// ---- photos ----

router.post('/addphotos/:id',addPhotos)
router.get('/getphotos',getPhotos)
router.put('/updatephotos/:id',updatePhoto)
router.get('/searchphotos',searchphotos)
router.delete('/deletephotos/:id',deletephotos)

// ---- todo ----

router.post('/addtodo/:id',addtodo)
router.get('/gettodo',getTodo)
router.put('/updatetodo/:id',updateTodo)
router.get('/searchtodo',searchTodo)
router.delete('/deletetodo/:id',deleteTodo)

module.exports = router;
