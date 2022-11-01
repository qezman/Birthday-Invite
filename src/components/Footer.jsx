import {FaAngleDown, FaAngleUp} from "react-icons/all";

const Footer = ({ handlePageChange }) => {
  return (
    <section className={"sticky top-[100vh] bg-indigo-100 flex items-center justify-between px-1 py-2"}>
      <div className={"flex"}>
        <div 
          onClick={() => handlePageChange('backward')}
          className={"w-8 bg-red-500 p-2 border-r rounded-bl rounded-tl"}
        >
          <FaAngleUp className={"text-white"} />
        </div>
        <div 
          onClick={() => handlePageChange('forward')}
          className={"w-8 bg-red-500 p-2 rounded-tr rounded-br"}
        >
          <FaAngleDown className={"text-white"} />
        </div>
      </div>

      <div className={"bg-red-500 text-white text-xs px-2 py-2 rounded md:text-lg md:py-3"}>
        Powered by Que
      </div>
    </section>
  )
}
export default Footer