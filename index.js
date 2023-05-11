// const express = require('express')
// const app = express()
// const cors = require('cors')
// const bodyParser = require('body-parser')
// app.use(cors());
// app.use(bodyParser.json())

//app.use(express.json())
//var jsonParser = bodyParser.json();

// let recipes = [
//     {
//         "id": 1,
//         "dishType": "rice",
//         "image": "https://www.kitchensanctuary.com/wp-content/uploads/2021/03/Egg-fried-rice-square-FS-40.jpg",
//         "title": "egg fried rice",
//         "instructions": "Cook the rice following pack instructions. Boil a separate pan of water and blanch the peas and mangetout for 1 min, then drain and set aside with the rice. Meanwhile, heat the oil in a large non-stick frying pan or wok over a medium heat and fry the onion for 10 mins or until golden brown. Add the garlic and ginger and fry for a further minute. Tip in the blanched vegetables and fry for 5 mins, then the prawns and fry for a further 2 mins. Stir the rice into the pan then push everything to one side. Pour the beaten eggs into the empty side of the pan and stir to scramble them. Fold everything together with the sesame seeds, soy and vinegar, then finish with the spring onions scattered over.",
//         "ingredients" : [
//             {
//                 "name": "egg",
//                 "id": 1
//             },
//             {
//                 "name": "rice",
//                 "id": 2
//             },
//             {
//                 "name": "oil",
//                 "id": 3
//             },
//             {
//                 "name": "black pepper",
//                 "id": 4
//             },
//             {
//                 "name": "garlic salt",
//                 "id": 5
//             },
//             {
//                 "name": "spring onions",
//                 "id": 6
//             }
//         ]
//     },
//     {
//         "id": 2,
//         "dishType": "noodles",
//         "title": "chicken chow mein",
//         "image": "https://www.wellplated.com/wp-content/uploads/2022/08/chicken-chow-mein-takeaway.jpg",
//         "instructions": "Cook the rice following pack instructions. Boil a separate pan of water and blanch the peas and mangetout for 1 min, then drain and set aside with the rice. Meanwhile, heat the oil in a large non-stick frying pan or wok over a medium heat and fry the onion for 10 mins or until golden brown. Add the garlic and ginger and fry for a further minute. Tip in the blanched vegetables and fry for 5 mins, then the prawns and fry for a further 2 mins. Stir the rice into the pan then push everything to one side. Pour the beaten eggs into the empty side of the pan and stir to scramble them. Fold everything together with the sesame seeds, soy and vinegar, then finish with the spring onions scattered over.",
//         "ingredients" : [
//             {
//                 "name": "noodles"
//             },
//             {
//                 "name": "chicken"
//             },
//             {
//                 "name": "oil"
//             },
//             {
//                 "name": "onion salt"
//             },
//             {
//                 "name": "ginger"
//             },
//             {
//                 "name": "chicken stock"
//             }
//         ]
//     },
//     {
//         "id": 3,
//         "dishType": "soup",
//         "title": "egusi soup",
//         "image": "https://assets.epicurious.com/photos/5e2f6334b1633d0009d08cc4/4:3/w_3816,h_2862,c_limit/EgusiStew_HERO_011620_243.jpg",
//         "instructions": "Cook the rice following pack instructions. Boil a separate pan of water and blanch the peas and mangetout for 1 min, then drain and set aside with the rice. Meanwhile, heat the oil in a large non-stick frying pan or wok over a medium heat and fry the onion for 10 mins or until golden brown. Add the garlic and ginger and fry for a further minute. Tip in the blanched vegetables and fry for 5 mins, then the prawns and fry for a further 2 mins. Stir the rice into the pan then push everything to one side. Pour the beaten eggs into the empty side of the pan and stir to scramble them. Fold everything together with the sesame seeds, soy and vinegar, then finish with the spring onions scattered over.",
//         "ingredients" : [
//             {
//                 "name": "okora"
//             },
//             {
//                 "name": "chicken stock"
//             },
//             {
//                 "name": "oil"
//             }
//         ]
//     },
//     {
//         "id": 4,
//         "dishType": "rice",
//         "image": "https://mymorningmocha.com/wp-content/uploads/2021/11/How-to-make-easy-king-prawn-fried-rice.jpg",
//         "title": "prawn stirfry rice",
//         "instructions": "Cook the rice following pack instructions. Boil a separate pan of water and blanch the peas and mangetout for 1 min, then drain and set aside with the rice. Meanwhile, heat the oil in a large non-stick frying pan or wok over a medium heat and fry the onion for 10 mins or until golden brown. Add the garlic and ginger and fry for a further minute. Tip in the blanched vegetables and fry for 5 mins, then the prawns and fry for a further 2 mins. Stir the rice into the pan then push everything to one side. Pour the beaten eggs into the empty side of the pan and stir to scramble them. Fold everything together with the sesame seeds, soy and vinegar, then finish with the spring onions scattered over." ,
//         "ingredients" : [
//             {
//                 "name": "egg",
//                 "id": 1
//             },
//             {
//                 "name": "rice",
//                 "id": 2
//             },
//             {
//                 "name": "oil",
//                 "id": 3
//             },
//             {
//                 "name": "black pepper",
//                 "id": 4
//             },
//             {
//                 "name": "garlic salt",
//                 "id": 5
//             },
//             {
//                 "name": "spring onions",
//                 "id": 6
//             }
//         ]
//     },
//     {
//         "id": 5,
//         "dishType": "soup",
//         "image": "https://www.littlebroken.com/wp-content/uploads/2019/12/Creamy-Chicken-and-Mushroom-Soup-15.jpg",
//         "title": "chicken and mushroom soup",
//         "instructions": "Cook the rice following pack instructions. Boil a separate pan of water and blanch the peas and mangetout for 1 min, then drain and set aside with the rice. Meanwhile, heat the oil in a large non-stick frying pan or wok over a medium heat and fry the onion for 10 mins or until golden brown. Add the garlic and ginger and fry for a further minute. Tip in the blanched vegetables and fry for 5 mins, then the prawns and fry for a further 2 mins. Stir the rice into the pan then push everything to one side. Pour the beaten eggs into the empty side of the pan and stir to scramble them. Fold everything together with the sesame seeds, soy and vinegar, then finish with the spring onions scattered over.",
//         "ingredients" : [
//             {
//                 "name": "egg",
//                 "id": 1
//             },
//             {
//                 "name": "rice",
//                 "id": 2
//             },
//             {
//                 "name": "oil",
//                 "id": 3
//             },
//             {
//                 "name": "black pepper",
//                 "id": 4
//             },
//             {
//                 "name": "garlic salt",
//                 "id": 5
//             },
//             {
//                 "name": "spring onions",
//                 "id": 6
//             }
//         ]
//     },
//     {
//         "id": 6,
//         "dishType": "noodles",
//         "image": "https://www.ambitiouskitchen.com/wp-content/uploads/2021/08/Crispy-Broccoli-Sweet-Spicy-Tahini-Noodles-5.jpg",
//         "title": "sesame seed tahini noodles",
//         "instructions": "Cook the rice following pack instructions. Boil a separate pan of water and blanch the peas and mangetout for 1 min, then drain and set aside with the rice. Meanwhile, heat the oil in a large non-stick frying pan or wok over a medium heat and fry the onion for 10 mins or until golden brown. Add the garlic and ginger and fry for a further minute. Tip in the blanched vegetables and fry for 5 mins, then the prawns and fry for a further 2 mins. Stir the rice into the pan then push everything to one side. Pour the beaten eggs into the empty side of the pan and stir to scramble them. Fold everything together with the sesame seeds, soy and vinegar, then finish with the spring onions scattered over.",
//         "ingredients" : [
//             {
//                 "name": "egg",
//                 "id": 1
//             },
//             {
//                 "name": "rice",
//                 "id": 2
//             },
//             {
//                 "name": "oil",
//                 "id": 3
//             },
//             {
//                 "name": "black pepper",
//                 "id": 4
//             },
//             {
//                 "name": "garlic salt",
//                 "id": 5
//             },
//             {
//                 "name": "spring onions",
//                 "id": 6
//             }
//         ]
//     }
// ]

// const generateId = () => {
//     const maxId = recipes.length > 0
//       ? Math.max(...recipes.map(n => n.id))
//       : 0
//     return maxId + 1
//   }

// const generateImage = (dishTitle) => {



// }

//   app.get('/', (request, response) => {
//     response.send('<h1>Hello World!</h1>')
//   })

//   app.get('/recipes/dishType/:dish', (request, response) => {
//     const dishType = request.params.dish
//     const riceDish = recipes.filter(dish => dish.dishType.includes(dishType))
//     console.log(riceDish);
//     if (riceDish){
//         response.json(riceDish);
//     } else {
//         response.status(404).end()
//       }
    

// })

// app.get('/recipes/searched/:search', (request, response) => {
//     const searched = request.params.search
//     const searchItem = recipes.filter(dish => dish.title.toLowerCase().includes(searched))
//     console.log(searchItem);
//     if (searchItem){
//         response.json(searchItem);
//     } else {
//         response.status(404).end()
//       }
// })

// app.get('/recipes/all', (request, response) => {
//     console.log("hi")
//     response.json(recipes);
// })

// app.get('/recipes/:id', (request, response) => {
//     const requested = Number(request.params.id)
//     const searchItem = recipes.find(dish => dish.id === requested)
//     console.log(searchItem);
//     if (searchItem){
//         response.json(searchItem);
//     } else {
//         response.status(404).end()
//       }
// })


// app.delete('/recipes/delete/:id', (request, response) => {
//     const id = Number(request.params.id)
//     recipes = recipes.filter(recipe => recipe.id !== id)
  
//     response.status(204).end()
//   })

// app.post('/recipes/add',(request, response) => {
//     const body = request.body
//     console.log(body)
    
    
//     // if (!body.content) {
//     //     return response.status(400).json({ 
//     //       error: 'content missing' 
//     //     })
//     //   }


//     // const recipe = {
//     // content: request.body,
//     // important: body.important || false,
//     // date: new Date(),
//     // id: generateId(),
//     // image: generateImage(),
//     // }  

//     const recipe = request.body
//     recipe.id = generateId();
    
//     recipes = recipes.concat(recipe)

//     response.json(recipe)
// })
  
import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import recipe from './routes.js'

dotenv.config()

const app = express()

app.use(cors({
    
}))
app.use(bodyParser.json())

// app.get("/", (req, res)=>{
//     res.json({"Hi":"Hello World"})
// })

// app.use('/api', user)
// const PORT = 3001
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
//   })
app.use('/', recipe)
const PORT = 3001

app.listen(PORT, () => {
    console.log(`Port listening on ${PORT}`)
})
