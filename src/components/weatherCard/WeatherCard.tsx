import { MdOutlineWbSunny } from "react-icons/md";

function WeatherCard({ wname, temp }: { wname: string; temp: string }) {
  return (
    <div className="flex bg-white items-center mt-2 h-12 mx-2 justify-between ">
      <h2 className="text-start text-gray-600 font-semibold">{wname}</h2>
      <MdOutlineWbSunny fontSize="large" sx={{ fontSize: "20px" }} />
      <h3>
        <strong>{temp}</strong>
      </h3>
    </div>
  );
}

export default WeatherCard;
