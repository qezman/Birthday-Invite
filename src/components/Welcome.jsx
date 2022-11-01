import { RiDoubleQuotesL} from "react-icons/all";



const Welcome = ({ handlePageChange }) => {
  return (
    <section className={"px-4"}>
      <div className={"flex items-start gap-x-2"}>
        <RiDoubleQuotesL className={"text-2xl text-indigo-700"} />
        <p className={"text-lg text-indigo-700 md:text-3xl md:w-10/12"}>We're so excited to have you celebrate with us!</p>
      </div>

      <div className={"my-4 px-6"}>
        <button 
          onClick={() => handlePageChange('forward')}
          className={"text-sm text-white px-4 bg-red-500 py-1 rounded-lg md:text-xl"}
        >So exciting</button>
      </div>
    </section>
  )
}
export default Welcome