import {BiCheck} from "react-icons/all";
import {Link} from "react-router-dom";
import {useState} from "react";

const Third = () => {
  const [formData, setFormData] = useState({
    inviteeAge: ""
  })

  const handleChange = (e) => {
    setFormData(preForm => {
      const {name, value} = e.target
      return {
        ...preForm,
        [name]: value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }
  return (
    <section className={"px-4"}>
      <div className={"flex items-start gap-x-2"}>
        <p className={"text-lg text-indigo-700 md:text-3xl"}>3.</p>
        <p className={"text-lg text-indigo-700 md:text-3xl md:w-10/12"}>What is your age?</p>
      </div>

      <form onSubmit={handleSubmit} className={"mt-8 text-start mx-6 md:text-2xl"}>
        <input
          type="text"
          placeholder={"Type your answer here"}
          onChange={handleChange}
          name={"inviteeAge"}
          className={"text-white py-2 md:px-6 lg:px-12 border-b text-white bg-[#C3C6FF]"}
        />
      </form>

      <Link to={"/fourth"}>
        <div className={"mx-6 py-1 flex rounded bg-red-500 items-center mt-6 px-3 w-16 text-white md:text-xl md:w-20"}>
          <p>OK</p>
          <BiCheck className={"text-xl md:text-3xl"} />
        </div>
      </Link>
    </section>
  )
}
export default Third