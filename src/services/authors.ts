import axios from 'axios';



export const getAuthors = async () => {
    const response = await axios.get('http://localhost:3000/api/authors');
    console.log(response.data.data)

    return {
        ok: response.data.ok,
        datos: response.data.data
    };
}


export const createAuthor = async ( name: string, nationality: string, birthYear: number, isActive: boolean ) => {

    const response = await axios.post('http://localhost:3000/api/authors', {
        name: name,
        nationality: nationality,
        birthYear: birthYear,
        isActive: isActive
    } )

    return response
}


export const putAuthor = async (Author: {id:string;name:string;value:number;img:string}) => {
    const response = await axios.put('http://localhost:3000/api/properties', Author);
    return response.data
}

export const deleteAuthor = async (authorId:string) => {
    const response = await axios.delete(`http://localhost:3000/api/properties?id=${authorId}`);
    return response.data
}
