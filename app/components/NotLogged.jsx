import { useAuth0 } from "@auth0/auth0-react";
import Question from "./Question";
const NotLogged = () => {
  const {loginWithPopup, loginWithRedirect} = useAuth0();
  return (
    <div >

      <Question notAllowed/>

      <div className="modal modal-open" role="dialog">
        <div className="modal-box">
          <h3 className="text-xl text-error font-bold">Se necesita una cuenta</h3>
          <p className="py-4">Crea una cuenta completamente gratis para poder usar el <span className="font-bold">mejor simulador </span>del país, con <span className="font-bold">preguntas oficiales </span> del examen UCE</p>
          <button onClick={()=>loginWithPopup()} className="btn btn-outline  mr-5 btn-primary">
            Crear cuenta
          </button>
          <button onClick={()=>loginWithPopup()} className="btn btn-outline  btn-primary">
            Iniciar sesión
          </button>
        </div>
        <label className="modal-backdrop " htmlFor="my_modal_7">
        </label>
      </div>
    </div>
  );
};

export default NotLogged;
