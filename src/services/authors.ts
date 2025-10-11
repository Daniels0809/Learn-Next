import axios from "axios";

export const getAuthors = async () => {
  const response = await axios.get("http://localhost:3000/api/authors");
  console.log(response.data.data);

  return {
    ok: response.data.ok,
    datos: response.data.data,
  };
};

export const createAuthor = async (
  authorId: number,
  name: string,
  nationality: string,
  birthYear: number,
  isActive: boolean
) => {
  const response = await axios.post("http://localhost:3000/api/authors", {
    authorId: authorId,
    name: name,
    nationality: nationality,
    birthYear: birthYear,
    isActive: isActive,
  });

  return response;
};

export const putAuthor = async (author: {
  _id: string;
  name: string;
  nationality: string;
  birthYear: number;
  isActive: boolean;
}) => {
  const response = await axios.put(`http://localhost:3000/api/authors`, author);
  return response.data;
};

export const deleteAuthor = async (id:string) => {
    try{
          const response = await axios.delete(`http://localhost:3000/api/authors`, { params: {id}}
  );
  return response.data;
    } catch (error) {
        console.error(error)
        throw error;
    }

};
