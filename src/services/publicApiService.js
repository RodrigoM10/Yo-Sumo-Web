import axios from 'axios';



const axiosInstance = axios.create({
    baseURL: 'https://yo-sumo-app.herokuapp.com/api'
    // headers: {
    //   Authorization: `Bearer ${localStorage.getItem('token')}`,
    // },
  });

  export async function getPetitions() {

    try {
        const response  = await  axiosInstance.get('/petition')
        
        return response;
    } catch(e) {
        console.log(e)
    }  
}

export async function SavePetitions(petitionData) {

    console.log({petitionData})
     const responseData = {
        title: petitionData.title,
        image: petitionData.image,
        description:petitionData.description,
        nameAuthor:petitionData.name,
        phoneAuthor:petitionData.cellphone,
        emailAuthor:petitionData.email,

     }

     console.log({responseData})
    try {
        const response  = await  axiosInstance.post('/petition',responseData)
        console.log("Peticion guardada")
        return response;
    } catch(e) {
        console.log(e)
    }  
}