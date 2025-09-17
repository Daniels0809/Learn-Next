import { useRouter } from "next/router";    

const Dashboard = () => {

    const router = useRouter();
    console.log(router.route);

if(router.route == "/dashboard"){
  console.log("estas en el dashboard");
}

const goToBack = () => {
      router.back();
    };

    return(
        <>
        <button className="miButton" onClick={goToBack}>Regresar</button>
        </>
    )
  };

export default Dashboard;

