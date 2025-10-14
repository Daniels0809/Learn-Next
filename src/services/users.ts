import axios from "axios";

export const getUser = async () => {
  const response = await axios.get("http://localhost:3000/api/users");
  console.log(response.data.data);

  return {
    ok: response.data.ok,
    datos: response.data.data,
  };
};

export const createUser = async ( user: {
  username: string;
  password: string;
  role: string;
  createdAt: string;
}) => {
  const response = await axios.post("http://localhost:3000/api/users", user);

  return response;
};

export const putUser = async (user: {
  username: string;
  password: string;
  role: string;
  createdAt: string;
}) => {
  const response = await axios.put(`http://localhost:3000/api/users`, user);
  return response.data;
};

export const deleteUser = async (id: string) => {
  try {
    const response = await axios.delete(`http://localhost:3000/api/users`, {
      params: { id },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
