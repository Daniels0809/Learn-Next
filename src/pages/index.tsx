// import { CircleCheckBig, Ban } from "lucide-react";
// import Image from "next/image";
import { useState } from "react";
// import {sumar} from "@/helpers/utils";
import Login from "@/login";
import Dashboard from "./dashboard";
// import { useRouter } from "next/router";
import {goToBack} from "./dashboard";


export default function Home() {




  // const [state, setState] = useState(false);

  // const handClick = () => {
  //   setState(!state);
  // };

  return (
    <>
        <div>{Login()}
        </div>
      {/* <button className="bg-blue-700 miButton" onClick={handClick}>ingresar</button> */}
      {/* <button className="bg-blue-700 miButton" onClick={goToBack}>regresar</button> */}
    </>
  );

}