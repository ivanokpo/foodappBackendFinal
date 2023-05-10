import {db, Table} from './db.config.js'
import AWS from 'aws-sdk'

// Create or Update users
const createOrUpdate = async (data) =>{
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
    


    // const generateId = () => {
    //         const maxId = Object.keys(data).length > 0
    //           ? Math.max(Object.keys(data).length)
    //           : 0
    //         return maxId + 1
    //       }

    let updatedData = AWS.DynamoDB.Converter.input(data, true);

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
                "image": `${data.image}`,
                "dishType": `${data.dishType}`
            }
    }
//use AWS code commit
    console.log(generateId())
   
    
    try{
        await db.put(params).promise()
        return { success: true }
    } catch(error){
        return { success: false}
    }
}

// Read all users
const readAllUsers = async()=>{
    const params = {
        TableName: Table
    }

    try{
        const { Items = [] } = await db.scan(params).promise()
        console.log("h")
        return { success: true, data: Items }

    } catch(error){
        return { success: false, data: null }
    }

}


    
// Read Users by dish
const getUserByDish = async (value, key = 'dish') => {
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

const getUserByTitle = async (value, key = 'title') => {
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

// Read Users by ID
const getUserById = async (value, key = 'id') => {
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

// Delete User by ID
const deleteUserById = async(value, key = 'id' ) => { 
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


export {
    createOrUpdate,
    readAllUsers,
    getUserById,
    getUserByDish,
    getUserByTitle,
    deleteUserById
}