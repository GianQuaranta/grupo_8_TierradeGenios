const express = require('express');
const apiUserController = require('../../controllers/api/apiUserController');
const router = express.Router();
// const multer = require('multer')
const path = require ('path')


/* const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        
        cb(null, path.resolve(__dirname,"../../Public/img","users"))
        },
    
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
}) 

const upload = multer({storage}) */

router.get('/api/users', apiUserController.list);
//router.get('/api/users/:id', apiUserController.detail);


module.exports = router;