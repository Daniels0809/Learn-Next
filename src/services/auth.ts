import axios from "axios";

const API_URL = "http://localhost:3000/api/auth";

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.get(`${API_URL}?email=${email}&password=${password}`);
    const data = response.data;

    if (!data.ok || !data.user) {
      throw new Error(data.message || "Usuario o contraseña incorrectos");
    }

    return data.user;
  } catch (error: any) {
  const msg =
    error.response?.data?.message ||
    error.message ||
    "Error al iniciar sesión";
  throw new Error(msg);
}
};




















// export class userServices {

//     url = 'http://localhost:3000/api/users';

//     // constructor(

//     // )

//     async getUsers(){
//         const result = await fetch(`${this.url}`);
        


//         return result
//     }

//         async postUsers(){

//         const result = await fetch(`${this.url}`,{
//             method:'post'
//             });


//         return result
//     }



// }

