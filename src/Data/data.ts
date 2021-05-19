import { ClothesType } from '../client/types/appSpecificTypes'
 
//implemented data structure array for modularity in the future to be able to add more clothes 


   const clothingData:ClothesType[]   = [
     {
       id: 1,
       name: 'Classic Tee',
       price: 75,
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
       img: "./images/classic-tee.jpg",
       sizes: ['S', 'M', "L"]
     }

  ]


  export default clothingData