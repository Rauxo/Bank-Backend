const accountModel = require("../models/account.model");

async function createAccount(req, res) {
  const user = req.user;
  const account = await accountModel.create({ user: user._id });

  res.status(201).json(account);
}

/**
 * - Get User accounts
 * 
 */
async function getUsrAccount(req,res){
  const accounts = await accountModel.find({user: req.user._id});
  res.status(200).json(accounts);
}

module.exports = {
  createAccount,
  getUsrAccount
}