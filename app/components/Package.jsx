import { updateUser } from "../services/user";
import { useAuth0 } from "@auth0/auth0-react";

const Package = ({ title, price, unique, perks }) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className=" md:p-12 py-6 card border-solid text-center border border-gray-300">
      <h2 className="text-3xl text-primary font-semibold tracking-wide uppercase">
        {title}
      </h2>
      <div className="card-body border-solid">
        <div className="text-4xl text-gray-400">{price}</div>
        <p className="m-0 prose text-sm font-semibold py-2">{unique}</p>

        <button
          className="btn"
          onClick={() => {price === "GRATIS" ? loginWithRedirect() : document.getElementById("accessCode"+title).showModal()}}
        >
          ELEGIR PAQUETE
        </button>

        <dialog id={"accessCode"+title} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Consigue tu código de acceso</h3>
            <p className="py-4">
              Contáctanos para mejorar tu cuenta adquiriendo el paquete{" "}
              <span className="font-bold">{title}</span> y sus ventajas!
            </p>
            <a
              href={`https://api.whatsapp.com/send/?phone=593992468823&text=Hola%2C%20estoy%20interesado%20en%20el%20paquete%20${encodeURIComponent(
                title
              )},%20quiero%20conseguir%20un%20c%C3%B3digo%20de%20acceso.`}
              className="btn btn-primary btn-outline"
            >
              Conseguir
            </a>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button></button>
          </form>
        </dialog>
        {/* <button
          className="btn btn-outline btn-primary"
          onClick={() =>
            updateUser("67276e224296b7f94a9c3493", { tier: "nodejs" })
          }
        >
          ELEGIR PAQUETE
        </button> */}
        <ul>
          {perks.map((perk, index) => (
            <li className="text-gray-500 text-sm my-4" key={index}>
              {perk}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Package;
