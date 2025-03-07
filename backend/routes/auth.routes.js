import express from "express"
import { isUserLoggedIn, userLogin, userLogout, userRegister } from "../controllers/auth.js"
import { loginSchemaValidation, registerSchemaValidation } from "../middlewares/auth.middlewares.js"


const router=express.Router()

router.post('/register',registerSchemaValidation, userRegister)

router.post('/login', loginSchemaValidation, userLogin)

router.post('/logout',userLogout)

router.get('/verify',isUserLoggedIn)


export { router }