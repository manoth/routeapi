'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.get('/', (req, res, next) => {
    res.send({ title: 'MyApp' });
});
exports.default = router;
//# sourceMappingURL=index.js.map