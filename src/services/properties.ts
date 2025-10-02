import axios from 'axios';


export const getProperties = async () => {
    const response = await axios.get('http://localhost:3000/api/properties');
    console.log(response.data.data)

    return response.data
}


export const createProperty = async (name, value, img) => {

    const response = await axios.post('http://localhost:3000/api/properties', {
        name: name,
        value: value,
        img: img
    } )
}



