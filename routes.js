import express from 'express'
import { createOrUpdate, getRecipeByTitle, deleteRecipeById, getRecipeById, getRecipeByDish, readAllRecipes, updateRecipe } from './db.js'


const router = express.Router()

//get all recipes
router.get('/recipes/all', async(request, response) => {
    const { success, data } = await readAllRecipes() 
    if(success){
        return response.json({success, data})
    }
    return response.status(500).json({success:false, messsage: "Error"})
})

//get recipe by dish
router.get('/recipes/category/:dishType', async(request, response) => {
    const dishType = request.params.dishType
   
    const { success, data } = await getRecipeByDish(dishType)
    if (success){
        response.json({data});
    } else {
        response.status(404).end()
      }
    
})

//get recipe by search item
router.get('/recipes/searched/:search', async(request, response) => {
    const searched = request.params.search
    const { success, data } = await getRecipeByTitle(searched)
    if (success){
        response.json({success, data});
    } else {

        response.status(404).end()
      }
})

//get recipe by id
router.get('/recipes/:id', async(request, response) => {
    const id = Number(request.params.id)
    const { success, data } = await getRecipeById(id)
    if (success){
        response.json({data});
    } else {
        response.status(404).end()
      }
    
})

// Add recipe to database
router.post('/recipes/add', async(request, response) => {
        const { success, data } = await createOrUpdate(request.body)
        if(success){
            return response.json({success, data})
        }
        return response.status(500).json({success: false, message: 'Error'})
    
})

// Update User by ID
router.put('/recipes/update/:id', async(req, res) => {
    const { success, data } = await updateRecipe(req.body)
    if(success){
        return res.json({success, data})
    }

    return res.status(500).json({success: false, message: "Error"})
})

// Delete User by Id
router.delete('/recipes/delete/:id', async (req, res) => {
    const { id } = req.params
    const { success, data } = await deleteRecipeById(id)
    if (success) {
      return res.json({ success, data })
    }
    return res.status(500).json({ success: false, message: 'Error'})
})
  



export default router