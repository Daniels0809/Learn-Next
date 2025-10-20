import { MiButton } from "@/components/button/Button";
import { Card } from "@/components/button/card/Card";
import { Modal } from "@/components/button/modal/modal";
import { MyContext } from "@/context/Context";
import { Button, Switch } from "@heroui/react";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

const Dashboard = () => {
  const router = useRouter();

  const { userLogged, setIsActive, isActive } = useContext(MyContext);

  console.log(userLogged);

  const handleClick = () => {
    console.log(userLogged);

    router.back();
  };

  const handleClose = () => {
    console.log("close")
  }

  const handleCancel = () => {
    console.log("cancel")
  }


  const handleSave = () => {
    console.log("save")
  }


  const [isOpenModal, setIsOpenModal] = useState(false)


  const handleModal = () => {
    const isOpenModal = true
    
  }


  return (
    <>
      <div>Este es el dashboard</div>
      <Card
        title={"Hola"}
        color={"green"}
        background={"green"}
        image={""}
        description={"INTENTO"}
      />

      <Card
      color="green"
      title="prueba"
      image=""
      description="description"
      >
        <div>aqui va el button</div>
        <div>
          <MiButton
          text="button"
          icon={"x"}
          />
        </div>

      </Card>
      <div>El ususario {userLogged.name} esta logueado</div>
      <Button onPress={handleClick} className="mt-7" color="danger">
        regresar
      </Button>
      {isActive ? <div>Esta activo</div> : <div>Esta desactivado</div>}
      <Switch isSelected={isActive} onValueChange={setIsActive}>
        Airplane mode
      </Switch>


      <Modal
      title="Modal de prueba"
      onClose={handleClose}
      description="la description"
      onCancel={handleCancel}
      onSave={handleSave}
      isOpen={handleModal}
      >
        <div>
          Contenido de children
        </div>
      </Modal>
    </>
  );
};

export default Dashboard;
