const express=require('express');

const { getAllTeachers, createTeacher, getTeacher, updateTeacher, deleteTeacher, allow, setRole, approveStudent, deleteStudent } = require('../controllers/adminController');
const { verifyToken, registerAdmin } = require('../controllers/authController');
const router = express.Router()

router.post('/register', registerAdmin);
router.route('/').get(verifyToken,getAllTeachers).post(verifyToken,allow('admin'),setRole('teacher'),createTeacher);
router.route('/:id').get(getTeacher).patch(updateTeacher).delete(deleteTeacher);
router.route('/rejectStudent/:id').delete(deleteStudent);
router.route('/approvestudent/:id').patch(approveStudent);

module.exports = router
