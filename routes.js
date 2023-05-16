import express from 'express'
import { createOrUpdate, getUserByTitle, deleteUserById, getUserById, getUserByDish, readAllUsers, updateUser } from './db.js'
//import AWS from 'aws-sdk'

const router = express.Router()

// READ ALL Users
router.get('/recipes/all', async(request, response) => {
    
    
    const { success, data } = await readAllUsers()
    
    if(success){
        return response.json({success, data})
    }
    return response.status(500).json({success:false, messsage: "Error"})
    
    // console.log("hi")
    // response.json(recipes);
})

// Get recipe by dish
router.get('/recipes/category/:dishType', async(request, response) => {
    const dishType = request.params.dishType
   
    const { success, data } = await getUserByDish(dishType)
    console.log(data)
    // const riceDish = recipes.filter(dish => dish.dishType.includes(dishType))
    // console.log(riceDish);
    if (success){
        response.json({data});
    } else {
        console.log("not working")
        response.status(404).end()
      }
    
})

//get recipe by search item
router.get('/recipes/searched/:search', async(request, response) => {
    const searched = request.params.search
    // const searchItem = recipes.filter(dish => dish.title.toLowerCase().includes(searched))
    const { success, data } = await getUserByTitle(searched)
    //console.log(searchItem);
    if (success){
        console.log(data)
        response.json({success, data});
    } else {

        response.status(404).end()
      }
})

//get all recipes


//get by id
router.get('/recipes/:id', async(request, response) => {
    const id = Number(request.params.id)
    const { success, data } = await getUserById(id)
    
 
    if (success){
        response.json({data});
    } else {
        console.log("not working")
        response.status(404).end()
      }
    
})

//delete recipe
// router.delete('/recipes/delete/:id', async(request, response) => {
//     const id = Number(request.params.id)
//     recipes = recipes.filter(recipe => recipe.id !== id)
  
//     response.status(204).end()
//   })

// Create dish
router.post('/recipes/add', async(request, response) => {
    
        const { success, data } = await createOrUpdate(request.body)
        //response.setHeader('Content-Type', 'image/jpeg')
        
        if(success){
            return response.json({success, data})
        }
    
        return response.status(500).json({success: false, message: 'Error'})
    
})


// Update User by ID
router.put('/recipes/update/:id', async(req, res) => {
    
    // const { id } = req.params
    // user.id = parseInt(id)
    console.log(req.body)
    const { success, data } = await updateUser(req.body)

    if(success){
        return res.json({success, data})
    }

    return res.status(500).json({success: false, message: "Error"})
})


// Delete User by Id
router.delete('/recipes/delete/:id', async (req, res) => {
    const { id } = req.params
    const { success, data } = await deleteUserById(id)
    if (success) {
      return res.json({ success, data })
    }
    return res.status(500).json({ success: false, message: 'Error'})
})
  



export default router