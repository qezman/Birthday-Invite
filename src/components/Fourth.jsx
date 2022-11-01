import {BiCheck} from "react-icons/all";

const Fourth = ({ form, setForm, handlePageChange }) => {

  return (
    <section className={"px-4"}>
      <div className={"flex items-start gap-x-2"}>
        <p className={"text-lg text-indigo-700 md:text-3xl"}>4.</p>
        <p className={"text-lg text-indigo-700 md:text-3xl md:w-10/12"}>Enter your contact number?</p>
      </div>

      <form onSubmit={(e) => {
        e.preventDefault()
        handlePageChange('forward')
      }} className={"mt-8 text-start mx-6 md:text-2xl"}>
        <input
          type="text"
          placeholder={"Type your answer here"}
          onChange={({target: { value}}) => {
            setForm(prevState => ({
              ...prevState,
              contact: value
            }))
          }}
          name={"inviteeContact"}
          required
          value={form?.contact || ""}
          className={"text-gray-800 outline-none py-2 border-b text-white"}
        />
        <div>
          <button className={"mx-6 py-1 flex rounded bg-red-500 items-center mt-6 px-3 w-16 text-white md:text-xl md:px-4 md:w-20"}>OK <BiCheck className={"ml-2 text-xl md:text-3xl"} /></button>
        </div>
      </form>
    </section>
  )
}
export default Fourth