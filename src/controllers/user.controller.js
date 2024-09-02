import { asyncHandler } from "../utils/asyncHandler.js";

// this method will register the user
// asyncHandler is a higher order function
// it has for parameters next req res another one i forgot
//
const registerUser = asyncHandler( async(req, res) => {
    res.status(200).json({ // returning the respose of the connection in json format
        message: "chai aur code"
    })
})

// now we have to create a route in the routes folder


export {registerUser}