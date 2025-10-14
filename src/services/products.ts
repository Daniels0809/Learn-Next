import axios from "axios";

export const getProducts = async () => {
  const response = await axios.get("http://localhost:3000/api/products");
  console.log(response.data.data);

  return {
    ok: response.data.ok,
    datos: response.data.data,
  };
};

export const createProduct = async (
  sku: string,
  name: string,
  brand: string,
  quantity: number,
  price: number,
  isActive: boolean,
  category: string,
  imageUrl: string,
  createdAt: string,
) => {
  const response = await axios.post("http://localhost:3000/api/products", {
    sku: sku,
    name: name,
    brand: brand,
    quantity: quantity,
    price: price,
    isActive: isActive,
    category: category,
    imageUrl: imageUrl,
    createdAt: createdAt
  });

  return response;
};

export const putProduct = async (product: {
  _id:string;
  sku: string;
  name: string;
  brand: string;
  quantity: number;
  price: number;
  isActive: boolean;
  category: string;
  imageUrl: string;
  createdAt: string;
}) => {
  const response = await axios.put(`http://localhost:3000/api/products`, product);
  return response.data;
};

export const deleteProduct = async (id:string) => {
    try{
          const response = await axios.delete(`http://localhost:3000/api/products`, { params: {id}}
  );
  return response.data;
    } catch (error) {
        console.error(error)
        throw error;
    }

};
