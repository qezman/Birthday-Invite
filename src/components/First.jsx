import {BiCheck, GiTick, TiTick} from "react-icons/all";
import {useState} from "react";
import {Link} from "react-router-dom";

const First = () => {
  const [tickYes, setTickYes] = useState(false)
  const [tickNo, setTickNo] = useState(false)

  const handleTickYes = () => {
    setTickYes(prevState => !prevState)
  }

  const handleTickNo = () => {
    setTickNo(prevState => !prevState)
  }
  return (
    <section className={"px-4"}>
      <div className={"flex items-center gap-x-2"}>
        <p className={"text-lg text-indigo-700 font-bold md:text-3xl"}>1.</p>
        <p className={"text-lg text-indigo-700 md:text-3xl md:w-10/12"}>So, can you make it?</p>
      </div>

      <div onClick={handleTickYes} className={`cursor-pointer mx-6 flex items-center mt-3 justify-between w-7/12 md:w-3/12 rounded ${tickYes && "border-2"} border border-green-500 px-1 py-2 md:text-xl`}>
        <div className={"flex gap-x-2"}>
          <p className={"bg-green-600 text-white px-2"}>Y</p>
          <p className={"text-green-600"}>Yes</p>
        </div>
        {tickYes && <BiCheck className={"text-xl text-green-600"} />}
      </div>

      <div onClick={handleTickNo} className={`mx-6 flex items-center mt-3 justify-between w-7/12 cursor-pointer rounded ${tickNo && "border"} border-red-500 px-1 py-2 md:w-3/12 text-xl`}>
        <div className={"flex gap-x-2"}>
          <p className={"bg-gray-300 text-red-600 px-2"}>N</p>
          <p className={"text-red-600"}>No</p>
        </div>
        {tickNo && <BiCheck className={"text-red-600 text-xl"} />}
      </div>

      <Link to={"/second"}>
        <div className={"mx-6 py-1 flex rounded bg-red-500 items-center mt-4 px-3 w-16 text-white md:text-xl md:px-4 md:w-20"}>
          <p>OK</p>
          <BiCheck className={"text-xl md:text-3xl"} />
        </div>
      </Link>
    </section>
  )
}
export default First