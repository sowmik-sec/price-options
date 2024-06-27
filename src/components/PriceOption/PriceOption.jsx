import Feature from "../Feature/Feature";

function PriceOption({ option }) {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-500 rounded-md p-4 text-white flex flex-col">
      <h2 className="text-center">
        <span className="text-7xl font-extrabold">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl text-center my-8">{name}</h4>
      <div className="pl-6 flex-grow">
        {features.map((feature, i) => (
          <Feature key={i} feature={feature} />
        ))}
      </div>
      <button className="mt-12 bg-green-600 w-full py-2 font-bold rounded-lg hover:bg-green-900">
        Buy Now
      </button>
    </div>
  );
}

export default PriceOption;
