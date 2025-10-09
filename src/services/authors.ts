import axios from 'axios';



export const getAuthors = async () => {
    const response = await axios.get('http://localhost:3000/api/authors');
    console.log(response.data.data)

    return response.data
}


export const createAuthors = async ( name: string, nationality: string, birthYear: number, isActive: boolean ) => {

    const response = await axios.post('http://localhost:3000/api/authors', {
        name: name,
        nationality: nationality,
        birthYear: birthYear,
        isActive: isActive
    } )

    return response
}


export const editAuthors = async ( authorId:string, name: string, nationality: string, birthYear: number, isActive: boolean ) => {
    
    try{
        const response = await axios.put(`http://localhost:3000/api/authors/${authorId}`, {
        name: name,
        nationality: nationality,
        birthYear: birthYear,
        isActive: isActive
        
    })
    console.log('Response:', response.data)
    }
    catch(error)  {
        console.log('Error: ',error)
    }
}


// export const deletedAuthors = async (authorId:string, name: string, nationality: string, birthYear: number, isActive: boolean){
    
// }
