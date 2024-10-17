const Package = ({ title, price, unique, perks }) => {
  return (
    <div className=" p-12 card border-solid text-center border border-gray-300">
      <h2 className="text-3xl text-primary font-semibold tracking-wide uppercase">{title}</h2>
      <div className="card-body border-solid">
        <div className="text-4xl text-gray-400">{price}</div>
        <p className="m-0 prose text-sm font-semibold py-2">{unique}</p>
        <button className="btn btn-outline btn-primary">ELEGIR PAQUETE</button>
        <ul>
          {perks.map((perk, index) => (
            <li className="text-gray-500 text-sm my-4" key={index}>{perk}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Package;
