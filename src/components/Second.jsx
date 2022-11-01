import {BiCheck} from "react-icons/all";

const Second = ({ setForm, form, handlePageChange }) => {
  return (
    <section className={"px-4"}>
      <div className={"flex items-start gap-x-2"}>
        <p className={"text-lg text-indigo-700 md:text-3xl"}>2.</p>
        <p className={"text-lg text-indigo-700 md:text-3xl md:w-10/12"}>And what name shall we put down on the guest list?</p>
      </div>

      <form onSubmit={(e) => {
        e.preventDefault()
        handlePageChange('forward')
      }} className={"mt-8 text-start mx-6 md:text-2xl lg:mx-10"}>
        <input
          type="text"
          placeholder={"Type your full name here"}
          onChange={({target: {value}}) => {
            setForm(prevState => ({
              ...prevState,
              name: value
            }))
          }}
          required
          name={"inviteeName"}
          value={form?.name || ""}
          // Changed the color of the text
          className={"outline-none text-gray-800 py-2 border-b text-white"}
        />

      
        <div>
          <button
            className={"mx-6 py-1 flex rounded bg-red-500 items-center mt-6 lg:mx-10 px-3 w-16 text-white md:text-xl md:px-4 md:w-20"}
          >
            OK <BiCheck className={"ml-2 text-xl md:text-3xl"} />
          </button>
        </div>
      </form>
    </section>
  )
}
export default Second