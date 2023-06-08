import {db, Table} from './db.config.js'
import AWS from 'aws-sdk'

import { createClient } from 'pexels';

//create or update recipe
const createOrUpdate = async (data) =>{
    const clientPexel = createClient(process.env.PEXELS_KEY)
    const query = `${data.title}`;
    const paramsForId = {
        TableName: Table
    }

    const { Items = [] } = await db.scan(paramsForId).promise()
    const generateId = () => {
            const maxId = Items.length > 0
              ? Math.max(...Items.map(n => n.id))
              : 0
            return maxId + 1
          }

    const recipe = {
        "id": {N: generateId()},
        "title":{S: `${data.title}`},
        "instructions":{S:`${data.instructions}`},
        "ingredients":{S:`${data.ingredients}`},
        "imageLink":{S:`${data.imageLink}`}
    }

    const params = {
        TableName: Table,
        Item: {"id": generateId(),
                "title": `${data.title}`,
                "instructions": `${data.instructions}`,
                "ingredients": `${data.ingredients}`,
                "image": `${await clientPexel.photos.search({ query, per_page: 1 }).then(data => data.photos[0].src.original) }`,
                "dishType": `${data.dishType}`
            }
    }

    try{
        await db.put(params).promise()
        return { success: true }
    } catch(error){
        return { success: false}
    }
}

//read all recipes
const readAllRecipes = async()=>{
    const params = {
        TableName: Table
    }
    try{
        const { Items = [] } = await db.scan(params).promise()
        return { success: true, data: Items }

    } catch(error){
        return { success: false, data: null }
    }
}


    
//read recipes by dish
const getRecipeByDish = async (value, key = 'dish') => {
    const params = {
        TableName: Table,
        FilterExpression : 'dishType = :dishType',
        ExpressionAttributeValues : {':dishType' : value}
    }
    
    try {
        const { Items = {} } =  await db.scan(params).promise()
        
        return { success: true, data: Items }
    } catch (error) {
        return {  success: false, data: null}        
    }
}


const getRecipeByTitle = async (value, key = 'title') => {
    const params = {
        TableName: Table,
        ScanFilter: {
            "title": {
                 ComparisonOperator: "CONTAINS",
                 AttributeValueList: [`${value}`]
            }
       }
    }
    
    try {
        const { Items = {} } =  await db.scan(params).promise()
        
        return { success: true, data: Items }
    } catch (error) {
        return {  success: false, data: null}        
    }
}

//read recipes by ID
const getRecipeById = async (value, key = 'id') => {
    const params = {
        TableName: Table,
        Key: {
            [key]: parseInt(value)
        }
    }
    try {
        const { Item = {} } =  await db.get(params).promise()
        return { success: true, data: Item }
    } catch (error) {
        return {  success: false, data: null}        
    }
}

//delete recipe by ID
const deleteRecipeById = async(value, key = 'id' ) => { 
    const params = {
        TableName: Table,
        Key: {
            [key]: parseInt(value)
        }
    }
        
    try {
        await db.delete(params).promise()
        return {  success: true }

    } catch (error) {
        return{ success: false }
    }
}

//update recipe
const updateRecipe = async (data) => {
    // Set the parameters
    const newInstructions = JSON.stringify(data.instructions)
    console.log(newInstructions)
    const params = {
        TableName: Table,
        Key: {
            "id":
                {N: data.id}
        },

        Item: {
        ...data
        }
        
        };
    try {
        const { Item = {} } =  await db.put(params).promise()
        return { success: true, data: Item }
    } catch (error) {
        return {  success: false, data: null}        
    }
  };

export {
    createOrUpdate,
    readAllRecipes,
    getRecipeById,
    getRecipeByDish,
    getRecipeByTitle,
    deleteRecipeById,
    updateRecipe
}