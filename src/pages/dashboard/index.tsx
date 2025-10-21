import { MiButton } from "@/components/button/Button";
import { Card } from "@/components/button/card/Card";
import { Modal } from "@/components/button/modal/modal";
import { MyContext } from "@/context/Context";
import { allowTerm } from "@/services/terms";
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
    setModalIsOpen(false)
  }

  const handleCancel = () => {
    console.log("cancel")
    setModalIsOpen(false)
  }


  const handleSave = () => {
    console.log("save")
    //llamado a un servicio
    allowTerm()
  }


  const [modalIsOpen, setModalIsOpen] = useState(false)


  const handleOpen = () => {
    setModalIsOpen(true)
    return setModalIsOpen
    
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
      {/* {isActive ? <div>Esta activo</div> : <div>Esta desactivado</div>}
      <Switch isSelected={isActive} onValueChange={setIsActive}>
        Airplane mode
      </Switch> */}

      <Button onPress={handleOpen}>Modal</Button>


      <Modal
      title="Modal de prueba"
      onClose={handleClose}
      description="la description"
      onCancel={handleCancel}
      onSave={handleSave}
      isOpen={modalIsOpen}
      >
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, reiciendis cum quae deleniti corrupti fuga neque saepe molestiae sequi laudantium culpa iste laboriosam sit illo consequuntur ipsum ullam, voluptatibus aspernatur.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi consequuntur maxime ipsum error, quae, asperiores ipsam, ratione expedita fugit vero eligendi praesentium dolor doloremque laudantium labore atque? Eum, mollitia impedit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repellendus magnam aliquam doloremque vel nesciunt modi obcaecati commodi nobis, ipsa ut quibusdam ea qui soluta ducimus inventore saepe, suscipit vitae.
        </div>
      </Modal>
    </>
  );
};

export default Dashboard;
