import { Router } from "express" // imported router from Router 
import { registerUser } from "../controllers/user.controller.js"

const router = Router() // created a router variabele in router is stored

router.route("/register").post(registerUser) //


export default router