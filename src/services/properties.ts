import axios from 'axios';



export const getProperties = async () => {
    const response = await axios.get('http://localhost:3000/api/properties');
    console.log(response.data.data)

    return response.data
}


export const createProperty = async (name: string, value: number, img: string) => {

    const response = await axios.post('http://localhost:3000/api/properties', {
        name: name,
        value: value,
        img: img
    } )

    return response
}


export const editProperty = async ( id:string, name: string, value: number, img: string) => {
    
    try{
        const response = await axios.put(`http://localhost:3000/api/properties/${id}`, {
        name: name,
        value: value,
        img: img
        
    })
    console.log('Response:', response.data)
    }
    catch(error)  {
        console.log('Error: ',error)
    }
}



