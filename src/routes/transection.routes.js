const {Router} = require('express');
const authMiddleware = require("../middleware/auth.middlware")
const transectionController = require("../controller/transection.controller");  

const router = Router();
/**
 * - POST /api/transection
 * - Crrate a new transection
 */
router.post('/',authMiddleware.authMiddleware,transectionController.createTransection)


module.exports = router;