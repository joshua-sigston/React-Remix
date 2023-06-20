const axios = require('axios');
const APIKey = 'oBMRQylpLI6uL1Nzmh1190LXyFNXSnKmhoxo3PJhEkG6V400lABqnFVs';

// async function seedImg() {
//     const randomNum = Math.floor(Math.random() * 50) + 1
//     try {
//         const res = await axios.get('https://api.pexels.com/v1/search?query=camping&per_page=50', {
//             headers: {
//                 Accept: "application/json",
//                 Authorization: APIKey
//             },
//             params: {
//                 query: 'camping'
//             }
 
//         })
//         // console.log(res.data.photos[randomNum].src.medium);
//         // return res.data.photos[randomNum].src.medium;
//         return res
//     }
//     catch(err) {
//         console.log(err);
//     }
// }

function seedImg() {
    fetch("https://api.pexels.com/v1/search?query=van%20camper&per_page=30",{
  headers: {
    Authorization: APIKey
  }
})
   .then(resp => {
     return resp.json()
   })
   .then(data => {
     console.log(data.photos)
   })
   return null
}

console.log(seedImg())