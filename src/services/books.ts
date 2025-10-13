import axios from "axios";

export const getBooks = async () => {
  const response = await axios.get("http://localhost:3000/api/books");
  console.log(response.data.data);

  return {
    ok: response.data.ok,
    datos: response.data.data,
  };
};

export const createBook = async ( book: {
    idBook: number,
  title: string,
  authorId: number,
  category: string,
  publishedYear: number,
  availableCopies: number,
  img: string,
  createdAt: string
}) => {
  const response = await axios.post("http://localhost:3000/api/books", book);

  return response;
};

export const putBook = async (book: {
  idBook: number;
  title: string;
  authorId: number;
  category: string;
  publishedYear: number;
  availableCopies: number;
  img: string;
  createdAt: string;
}) => {
  const response = await axios.put(`http://localhost:3000/api/books`, book);
  return response.data;
};

export const deleteBook = async (id: string) => {
  try {
    const response = await axios.delete(`http://localhost:3000/api/books`, {
      params: { id },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
