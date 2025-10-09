import { Form, Input, Button } from "@heroui/react";
import React, { useState } from "react";

interface FormData {
  nombre: string;
  email: string;
  phone: string;
  address: string;
  nickname: string;
}

//React.FC => tipado de funcion
export const FormularioUsuario: React.FC = () => {
  //Estado del formulario
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    phone: "",
    address: "",
    nickname: "",
  });

  //Estado para manejar los errores
  const [errores, setErrores] = useState<string[]>([]);

  const [action, setAction] = React.useState(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, //actualiza la propiedad que correspone al campo del formulario
    });
  };

  //...formData es para que el arreglo original no se le realicen cambios y mantenga sus valores intactos
  //entonces aca accedemos a la copia de las propiedades del arreglo y accedemos al nombre del campo

  const validarFormulario = (): string[] => {
    const errores: string[] = [];

    if (!formData.nombre) errores.push("El nombre es requerido");

    if (!formData.email.includes("@"))
      errores.push("El correo debe ser valido");

    return errores;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); //Evita que el formulario se recargue

    const erroresFormulario = validarFormulario();

    if (erroresFormulario.length > 0) {
      setErrores(erroresFormulario);
    } else {
      alert("Formulario enviado correctamente");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            label="Name:"
            placeholder="Enter your Name"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <Input
            label="Email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <Input
            label="Phone:"
            placeholder="Enter your Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <Input
            label="Address:"
            placeholder="Enter your Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Enviar</button>
        {errores.length > 0 && (
          <ul>
            {errores.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
      </form>

      <Form
        className="w-full max-w-xs flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
      }}>
        <Input
          isRequired
          errorMessage="Please enter a valid username"
          label="Username"
          labelPlacement="outside"
          name="nombre"
          placeholder="Enter your username"
          type="text"
        />

        <Input
          isRequired
          errorMessage="Please enter a valid email"
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="Enter your email"
          type="email"
        />
        <div className="flex gap-2">
          <Button color="primary" type="submit">
            Submit
          </Button>
          <Button type="reset" variant="flat">
            Reset
          </Button>
        </div>
        {action && (
          <div className="text-small text-default-500">
            Action: <code>{action}</code>
          </div>
        )}
      </Form>
    </>
  );
};

export default FormularioUsuario;
