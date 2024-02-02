import { userModel } from "../db/mongo.js";

// Create a new user in the database
export async function createUser (req, res) {
  // Create a new user instance based on the request body
  const user = new userModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age
  })

  try {
    // Save the user to the database
    const newUser = await user.save()

    // Respond with the newly created user
    res.status(201).json(newUser)

  } catch (error) {
    // Throw an error if user inputed something incorrectly
    res.status(400).json({message: message.error})
  }
};

// Retrieve a single user by ID
export async function getUser (req, res) {
  try {
    // Find the user by ID in the database
    const user = await userModel.findById(req.params.id)

    // Check if the user exists
    if(!user){
      return res.status(404).json({message: "Cannot find a user"})
    }

    // Respond with the found user
    res.status(200).json(user)
  } catch (error) {
    // An unexpected error occurred on the server
    res.status(500).json({message: error.message})
  }
};

// Retrieve all users from the database
export async function getAllUsers (req, res) {
  try {
    // Find all users in the database
    const users = await userModel.find()

    // Respond with the array of users
    res.status(200).json(users)

  } catch (error) {
    // An unexpected error occurred on the server
    res.status(500).json({message: error.message})
  }
};

// Delete a user by ID from the database
export async function deleteUser  (req, res) {
  try {
    // Find the user by ID in the database
    const user = await userModel.findById(req.params.id)

    // Check if the user exists
    if(!user){
      return res.status(404).json({message: "Cannot find a user"})
    }

    // Delete the user from the database
    await user.deleteOne()

    // Respond indicating the user has been deleted
    res.json({message: "User is deleted"})

  } catch (error) {
    // An unexpected error occurred on the server
    res.status(500).json({message: error.message})
  }
};

// Update a user by ID in the database
export async function updateUser (req, res) {
  try {
    // Find the user by ID in the database
    const user = await userModel.findById(req.params.id)

    // Check if the user exists
    if(!user){
      return res.status(404).json({message: "Cannot find a user"})
    }
    
    // Update user properties if provided in the request body
    if(req.body.firstName != null){
      user.firstName = req.body.firstName
    }

    if(req.body.lastName != null){
      user.lastName = req.body.lastName
    }

    if(req.body.age != null){
      user.age = req.body.age
    }
    
    // Save the updated user to the database
    const updatedUser = await user.save()
    
    // Respond with the updated user
    res.json(updatedUser)
    
  } catch (error) {
    // An unexpected error occurred on the server
    res.status(500).json({message: error.message})
  }
};

