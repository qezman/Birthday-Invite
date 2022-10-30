import {Link} from "react-router-dom";
import {BiUser, FaUser} from "react-icons/all";
import {useState} from "react";

const Fifth = () => {
  const [formData, setFormData] = useState({
    inviteePartner: ""
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
        <p className={"text-lg text-indigo-700 md:text-3xl"}>4.</p>
        <form onSubmit={handleSubmit} action="/">
          <p className={"text-lg text-indigo-700 md:text-3xl md:w-10/12"}>Will you be bringing anybody, <input
            type="text"
            onChange={handleChange}
            name={"inviteePartner"}
            className={"bg-[#C3C6FF] w-20"}
            placeholder={"___________"}
          />?</p>
        </form>
      </div>

      <Link>
        <div className={"bg-red-500 w-8/12 mx-5 mt-6 text-center text-lg text-white py-2 md:text-xl md:my-6 md:w-5/12"}>
          Submit
        </div>
      </Link>

      <div className={"flex items-center mx-4 text-3xl gap-x-10 md:gap-x-16 lg:gap-x-20 mt-4 text-white md:text-5xl lg:text-6xl"}>
        <BiUser /> <BiUser /> <BiUser /> <BiUser />
      </div>
    </section>
  )
}
export default Fifth