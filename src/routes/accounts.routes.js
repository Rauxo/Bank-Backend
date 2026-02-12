const express = require("express");
const authMiddleware  = require("../middleware/auth.middlware");
const accountController = require("../controller/account.controller");


const router = express.Router();

/**
 * - POST /api/accounts/
 * - Create a new account
 * - Protected route, requires authentication
 */

router.post("/", authMiddleware.authMiddleware ,accountController.createAccount  )

/**
 * - GET /api/accounts/
 * - Get User accounts
 * - Protected route, requires authentication
 */
router.get("/", authMiddleware.authMiddleware ,accountController.getUsrAccount  )

/**
 * - GET /api/accounts/balance/:accountId
 * - Get account balance
 * - Protected route, requires authentication
 */
router.get("/balance/:accountId", authMiddleware.authMiddleware ,accountController.getAccountBalance  )

module.exports = router;