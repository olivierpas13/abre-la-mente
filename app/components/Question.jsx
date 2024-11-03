import { useState } from "react";

const Question = ({notAllowed}) => {
  const [option, setOption] = useState(null);

  const answers = [10, 11, 12, 13];

  return (
    <div className={`${notAllowed? "blur-sm" : ""} container mx-auto py-20`}>
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
            <button className="btn btn-primary btn-outline btn-md mr-5 mb-10 ">
              Ver pregunta real
              {/* TODO: Add modal logic to show real image */}
            </button>
            <button className="btn btn-primary btn-outline btn-md mr-5 mb-10 ">
              Cómo resolver
              {/* TODO: Add tutorial about solving this kind of question */}
            </button>
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

        <div className="join grid grid-cols-2 py-10">
          <button className="join-item btn btn-outline">Previous page</button>
          <button className="join-item btn btn-outline">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Question;
