import { BiUser } from 'react-icons/all'

const Fifth = ({ form, setForm, handlePageChange }) => {
  return (
    <section className={"px-4"}>
      <div className={"flex items-start gap-x-2"}>
        <p className={"text-lg text-indigo-700 md:text-3xl"}>4.</p>
        <form onSubmit={e => {
          e.preventDefault()
          handlePageChange('forward')
        }}>
          <p className={"text-lg text-indigo-700 md:text-3xl md:w-10/12"}>Will you be bringing anybody, how many?
            <input
              type="number"
              onChange={({target: { value }}) => {
                setForm(prevState => ({
                  ...prevState,
                  companions: value
                }))
              }}
              name={"inviteePartner"}
              className={"ml-3 outline-none text-gray-700 p-1 rounded-sm w-20"}
              value={form?.companions || ""}
              placeholder={"___________"}
             /></p>
             <button className={"bg-red-500 w-8/12 mx-5 mt-6 text-center text-lg text-white py-2 md:text-xl md:my-6 md:w-5/12"}>
                Submit
              </button>
        </form>
      </div>
      <div
        className={"flex items-center mx-4 text-3xl gap-x-10 md:gap-x-16 lg:gap-x-20 mt-4 text-white md:text-5xl lg:text-6xl"}>
        <BiUser/> <BiUser/> <BiUser/> <BiUser/>
      </div>
    </section>
  )
}
export default Fifth