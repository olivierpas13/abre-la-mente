import Landing from "../components/Landing";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Abre La Mente" },
    { name: "description", content: "Preuniversitario y material de estudio UCE - Preparación universitaria Abre La Mente" },
  ];
};

export default function Index() {
  return (
    <div>
      <Landing />
    </div>
  );
}

