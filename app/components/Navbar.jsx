import { Link } from "@remix-run/react";
import { useAuth0 } from "@auth0/auth0-react"
import { CgProfile } from "react-icons/cg";import { MdAccountCircle } from "react-icons/md";
;

const Navbar = () => {
  const { loginWithRedirect, isLoading, user, isAuthenticated, logout } = useAuth0();

  return (
    <div className="navbar bg-white fixed top-0 left-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            {/* REPLACE WITH ICON */}
            {">"}
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Material de estudio UCE</a>
            </li>
            <li>
              <a>Cursos</a>
              <ul className="p-2">
                <li>
                  <a>Numérico</a>
                </li>
                <li>
                  <a>Verbal</a>
                </li>
                <li>
                  <a>Abstracto</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Simulador UCE</a>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost h-10">
          <img src="/logo.png" alt="" className="h-12" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/material"}>Material de estudio UCE</Link>
          </li>
          <li>
            <details>
              <summary>Cursos</summary>
              <ul className="p-2">
                <li>
                  <a>Numérico</a>
                </li>
                <li>
                  <a>Verbal</a>
                </li>
                <li>
                  <a>Abstracto</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Simulador UCE</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn btn-outline btn-primary btn-sm mr-4">Contáctanos</a>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {isAuthenticated? <img
                alt="Profile picture"
                src={
                  user?.picture}
              />: <MdAccountCircle color="#020079" className="w-10 h-10" />}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              {isAuthenticated ? (
                <button>Perfil</button>
              ) : (
                <button onClick={() => loginWithRedirect()} className="">
                  Ingresar
                </button>
              )}
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              {
                isAuthenticated? <button onClick={()=>logout()}>Cerrar sesión</button> : null
              }
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
