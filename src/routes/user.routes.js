import { Router } from "express" // imported router from Router 
import { registerUser } from "../controllers/user.controller.js"
import { upload } from "../middlewares/multer.middlerware.js"

const router = Router() // created a router variabele in router is stored

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser) //


export default router