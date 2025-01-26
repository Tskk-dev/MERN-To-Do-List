const bcrypt = requre ('bcrypt')
const user = require ('../models/users.model')
const jwt = requre('jsonwebtoken')
const asyncHander = require('express-async-handler')

const login = asyncHander(async(req,res) =>{

})
const refresh = (req,res) =>{
    
}
const logout = (req,res) =>{
    
}

module.exports = {
    login,
    refresh,
    logout
}

