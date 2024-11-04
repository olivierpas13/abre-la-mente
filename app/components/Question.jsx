import { useState } from "react";

const Question = ({ notAllowed }) => {
  const [option, setOption] = useState(null);

  const answers = [10, 11, 12, 13];

  return (
    <div className={`${notAllowed ? "blur-sm" : ""} container mx-auto py-20`}>
      <div className="mockup-window bg-slate-50 border">
        <div className="bg-slate-1002 flex px-28 py-16 flex-col justify-evenly">
          <h2 className="prose text-lg pb-10">
            Un estudiante universitario ha redactado el informe final de su
            proyecto. El número de páginas totales que lleva escrito cada día
            hasta el final de la semana se puede representar por la serie:
            <span className="font-bold"> 19, 25, 37, 55, 79, ___</span> Si el
            primer elemento corresponde al número de páginas que ha escrito
            hasta el final del día lunes, ¿cuántas páginas escribió hasta el
            sábado?
          </h2>
          {/* Extra actions */}
          <div className="flex">
            <button
              className="btn btn-primary btn-outline btn-md mr-5 mb-10 "
              onClick={() =>
                document.getElementById("pregunta-real").showModal()
              }
            >
              Ver pregunta real
            </button>
            <dialog id="pregunta-real" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Pregunta Q02314 - 2024</h3>
                <img src="q001.png" alt="question 001" />
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Cerrar</button>
                  </form>
                </div>
              </div>
            </dialog>
            <button
              className="btn btn-primary btn-outline btn-md mr-5 mb-10 "
              onClick={() => document.getElementById("resolution").showModal()}
            >
              Cómo resolver
            </button>
            <dialog id="resolution" className="modal">
              <div className="modal-box">
                <h3 className="prose text-lg">
                  <span className="font-bold">Tipo de problema:</span> Secuencia
                  con patrón de diferencias
                </h3>
                <div className="divide-y py-4  divide-black">
                  <div>
                    <span className="font-semibold  ">Instrucciones</span>{" "}
                  </div>

                  <div className="mt-5 pt-5">
                    <ul>
                      <li>
                        <span className="font-bold">Identifica el patrón </span>
                        Calcula la diferencia entre términos consecutivos.
                      </li>
                      <li>
                        <span className="font-bold">Extiende la serie </span>
                        Sigue el patrón para encontrar el siguiente valor.
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  Ejemplo: La serie de índices es (10, 20, 35, 55, 80). Las
                  diferencias son (10, 15, 20, 25). La siguiente diferencia es
                  30. Entonces, el siguiente número es{" "}
                  <span className="font-bold">80 + 30 = 110.</span>
                </p>

                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Cerrar</button>
                  </form>
                </div>
              </div>
            </dialog>
            <button className="btn btn-primary btn-outline btn-md mr-5 mb-10 ">
              Preguntas relacionadas
              {/* TODO: Tag questions to be able to show similar questions */}
            </button>
          </div>
          <div className="grid grid-cols-2 bg-white">
            {answers.map((answer) => (
              <div
                key={answer}
                className={`text-center w-auto py-7 outline outline-1 cursor-pointer hover:bg-secondary hover:bg-opacity-50  outline-gray-400 ${
                  option == answer
                    ? "bg-primary hover:bg-primary text-secondary-content"
                    : ""
                }`}
                onClick={() => setOption(answer)}
              >
                {answer}
              </div>
            ))}
          </div>
        </div>

        <div className="join flex justify-between p-10">
          <button className="join-item btn btn-outline btn-secondary ">
            Anterior pregunta
          </button>
          <button className="join-item btn btn-outline btn-secondary ">
            Siguiente pregunta
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
