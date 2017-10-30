'use strict';

import * as express from 'express';
const router = express.Router();


router.get('/', (req, res, next) => {
    res.send({ title: 'My Page' });
});

router.post('/', (req, res, next) => {
    let data = req.body;
    let fullName = data.firstName + ' ' + data.lastName;
    res.send({ ok: true, fullName: fullName });
});

export default router;