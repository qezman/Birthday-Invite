import {useState} from "react";

const Form = () => {
  const [formData, setFormData] = useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      comments: "",
      isFriendly: true,
      employment: "",
      favColor: ""
    }
  )

  // console.log(formData)
  // console.log(formData.employment)
  // console.log(formData.favColor)
  const handleChange = (e) => {
    setFormData(prevForm => {
      const {name, value, type, checked} = e.target
      return {
        ...prevForm,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit} action="/" className={"flex flex-col mx-6 my-4"}>
      <input
        className={"border-2 px-2 w-36 rounded-lg border-gray-600"}
        type="text"
        placeholder={"First Name"}
        onChange={handleChange}
        name={"firstName"}
        value={formData.firstName}
      />

      <input
        className={"border-2 px-2 w-36 my-3 rounded-lg border-gray-600"}
        type="text"
        placeholder={"Last Name"}
        onChange={handleChange}
        name={"lastName"}
        value={formData.lastName}
      />

      <input
        className={"border-2 px-2 w-36 rounded-lg border-gray-600"}
        type="text"
        placeholder={"Email"}
        onChange={handleChange}
        name={"email"}
        value={formData.email}
      />

      <textarea
        className={"border-2 px-2 w-36 my-3 rounded-lg border-gray-600"}
        placeholder={"Comments"}
        onChange={handleChange}
        name={"comments"}
        value={formData.comments}
      />

      <div className={"flex items-center gap-x-2"}>
        <input
          type="checkbox"
          id={"isFriendly"}
          checked={formData.isFriendly}
          onChange={handleChange}
          name={"isFriendly"}
        />
        <label htmlFor="{isFriendly}">Are you friendly</label>
      </div>

      <fieldset>
        <legend>Current employment status</legend>

        <div className={"flex gap-x-2 items-center"}>
          <input
            type="radio"
            id={"unemployed"}
            name={"employment"}
            value={"unemployed"}
            onChange={handleChange}
            checked={formData.employment === 'unemployed'}
          />
          <label htmlFor={"unemployed"}>Unemployed</label>
        </div>

        <div className={"flex gap-x-2 items-center"}>
          <input
            type="radio"
            id={"part-time"}
            name={"employment"}
            value={"part-time"}
            onChange={handleChange}
            checked={formData.employment === 'part-time'}
          />
          <label htmlFor={"unemployed"}>Part-time</label>
        </div>

        <div className={"flex gap-x-2 items-center"}>
          <input
            type="radio"
            id={"full-time"}
            name={"employment"}
            value={"full-time"}
            onChange={handleChange}
            checked={formData.employment === 'full-time'}
          />
          <label htmlFor={"unemployed"}>Full-time</label>
        </div>
      </fieldset>

      <br/>

      <label htmlFor="favColor">What is your favorite color?</label>
      <select
        name="favColor"
        id="favColor"
        value={formData.favColor}
        onChange={handleChange}
        className={"w-48 border-2 border-black px-2 rounded-lg"}
      >
        <option value="">--Choose Color--</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select>

      <button>Submit</button>
    </form>
  )
}
export default Form