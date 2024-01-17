// import { Router } from 'express';
// import { authorController, bookController, subjectController, departmentController } from './api/controllers';
import { employeeService } from './api/services';
import swaggerSpec from './utils/swagger';
const Router = require('express');

//import {employeeController} from './api/controllers';


const employeeController = require('./api/controllers/employee.controller');
const departmentController = require('./api/controllers/department.controller');
const bookController = require('./api/controllers/book.controller');
const authorController = require('./api/controllers/author.controller');
const subjectController = require('./api/controllers/subject.controller');


let router = Router();


router.get('/', function(req, res, next) {
  res.send('Welcome byaatchesssss');
});

router.get('/a', (req, res, next)=>{
  res.send("using api route");
});

//router.get("/b", employeeController.getEmployee);
// router.get('/employee', employeeController.getEmployee);

router.get('/employee/:id', employeeController.getEmployeeById);

router.get('/department/:id', departmentController.getDepartmentById);

router.get('/books/:id', bookController.getBooksById);

router.get('/books', bookController.getAllBooks);

router.get('/employee', employeeController.getAllEmployee);

router.get('/authors/:id', authorController.getAuthorsById);

router.get('/authors', authorController.getAllAuthors);

router.get('/department', departmentController.getAllDepartment);

router.get('/subject', subjectController.getAllSubject);

router.get('/subject/:score', subjectController.getSubjectById);



//router.get("/s", subjectController.getSubject);


// router.get("/c", bookController.getBooks);


// router.get('/author', authorController.getAuthors);



module.exports = router;
