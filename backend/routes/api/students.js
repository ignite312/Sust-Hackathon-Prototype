const express = require('express');
const router = express.Router();
const studentInfo = require('../../json/studentInfo');

router.get('/', (req, res) => {
    res.json(info);
});

router.get('/:id', (req, res) => {
    const found = studentInfo.some(student => student.studentId === req.params.id);
    if(found) {
        res.json(studentInfo.filter(student => student.studentId === req.params.id));
    } else {
        res.status(400).json({ message: `No student found for this requested id ${req.params.id}` });
    }
});

router.post('/', (req, res) => {
    res.send(req.body);
})
module.exports = router;
