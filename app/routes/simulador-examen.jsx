import Question from "../components/Question";
import { useAuth0 } from "@auth0/auth0-react";
import NotLogged from "../components/NotLogged";
const Simulador = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  // TODO: inform user about the need to be registered to take the test
  return <div>{isAuthenticated ? <Question /> : <NotLogged/>}</div>;

  // return <div>{isAuthenticated ? <Question /> : loginWithRedirect()}</div>;
};

export default Simulador;
