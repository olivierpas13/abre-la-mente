const Landing = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(/bg.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-70 "></div>
      <div className="hero-content text-white text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">¿Listo para entrar a la universidad?</h1>
          <p className="mb-5 text-xl">
            <b className="text-blue-950">¡Prepárate con nosotros! </b>
             Con nuestro sistema de preparación y <b className="text-blue-950 ">material oficial</b> de anteriores examenes, podrás
            estudiar para el examen de admisión de la universidad.
          </p>
          <button className="btn btn-primary">Más información</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
