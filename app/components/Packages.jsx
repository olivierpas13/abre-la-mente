import Package from "./Package";
const Packages = () => {
  const packages = [
    {
      title: "Básico",
      price: "GRATIS",
      unique: "Comparte y consigue el paquete básico.",
      perks: [
        "20 preguntas con respuestas",
        "30 preguntas sin respuestas",
        "Cuenta en Abre La Mente (Básico)",
      ],
    },
    {
      title: "Pro",
      price: "$4.99",
      unique: "El paquete más popular.",
      perks: [
        "100 preguntas con respuestas",
        "Cuenta en Abre La Mente (Pro)",
        "Simulador de preguntas reales con feedback",
      ],
    },
    {
      title: "Plus",
      price: "$9.99",
      unique: "Asegura tu ingreso a la universidad.",
      perks: [
        "500 preguntas con respuestas",
        "Cuenta en Abre La Mente (Plus)",
        "Simulador de preguntas reales con feedback",
        "Soporte prioritario",
        "Acceso a herramientas de inteligencia artificial",
      ],
    },
  ];
  return (
    <div className="grid grid-cols-3 w-screen gap-16 px-10 pb-36">
      {packages.map((pack, index) => (
        <Package
          key={index}
          title={pack.title}
          price={pack.price}
          unique={pack.unique}
          perks={pack.perks}
        />
      ))}
    </div>
  );
};

export default Packages;
