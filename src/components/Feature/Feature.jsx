import { AiFillCheckCircle } from "react-icons/ai";
function Feature({ feature }) {
  return (
    <div>
      <p className="flex items-center">
        <AiFillCheckCircle className="text-green-400 mr-2" />
        {feature}
      </p>
    </div>
  );
}

export default Feature;
