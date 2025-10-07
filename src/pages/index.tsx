import { ToastContainer } from "react-toastify";
import { Button, Input, Switch } from "@heroui/react";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { notification } from "@/helpers/utils";
import { MyContext } from "@/context/Context";

const userLogueado = {
  name: "daniel",
  role: "admin",
  isActive: true,
  date: "24/12/2025",
};

export default function Home() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");


  const { setUserLogged, setIsActive, isActive } = useContext(MyContext);

  const router = useRouter();

  const handleClick = async () => {
    if (user === "daniel" && pass === "12345") {
      setUserLogged(userLogueado);
      notification("login exitoso", "success");
      setIsActive(isActive);
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex items-center">
      <div className="max-w-3/6">
        <div>Login</div>

        <label>User</label>

        <Input
          label=""
          placeholder="Enter your user"
          type="text"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />

        <label>Password</label>
        <Input
          label=""
          placeholder="Enter your password"
          type="password"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />

        <Button onPress={handleClick} className="mt-7" color="primary">
          Login
        </Button>

        <Button
          onPress={() => {
            setIsActive(!isActive);
          }}
          className="mt-7"
          color="primary"
        >
          Button
        </Button>

        {isActive ? <div>Esta activo</div> : <div>Esta desactivado</div>}

        <Switch isSelected={isActive} onValueChange={setIsActive}>
          Airplane mode
        </Switch>
      </div>
    </div>
  );
}
