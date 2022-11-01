import {BiCheck} from "react-icons/all";

const First = ({ handlePageChange, form, setForm }) => {
  

  return (
    <section className={"px-4"}>
      <div className={"flex items-center gap-x-2"}>
        <p className={"text-lg text-indigo-700 md:text-3xl"}>1.</p>
        <p className={"text-lg text-indigo-700 md:text-3xl md:w-10/12"}>So, can you make it?</p>
      </div>

      <form onSubmit={(e) => {
        e.preventDefault()
        if (form?.canMakeIt === false) {
          handlePageChange('not-available')
        } else handlePageChange('forward')
      }} action="/">
        <fieldset className={"md:text-lg lg:text-xl"}>
          <div className={"flex items-center gap-x-2 text-indigo-700 pt-3 py-1"}>
            {/* 
              Moved the input tag inside the label so clicking on the text 'Yes' 
              also clicks the input and added className="mr-3"
            */}
            <label htmlFor="yes">
              <input
                type="radio"
                id="yes"
                className="mr-3"
                name={"inviteeChoice"}
                value={"yes"}
                required
                onChange={() => {
                  setForm(prevState => ({
                    ...prevState,
                    canMakeIt: true
                  }))
                }}
                checked={form?.canMakeIt === true || false}
              />
              Yes
            </label>
          </div>

          <div className={"flex items-center gap-x-2 text-indigo-700"}>
            {/* 
              Moved the input tag inside the label so clicking on the text 'No' 
              also clicks the input and added className="mr-3"
            */}
            <label htmlFor="no">
              <input
                className="mr-3"
                type="radio"
                id="no"
                name={"inviteeChoice"}
                value={"no"}
                required
                onChange={() => {
                  setForm(prevState => ({
                    ...prevState,
                    canMakeIt: false
                  }))
                }}
                checked={form?.canMakeIt === false || false}
              />
              No
            </label>
          </div>
        </fieldset>

      {/* 
        Moved the button inside the form component so enter click on the 
        keyboard submits the form
      */}
        <div 
          // Removed this styling from the div and placed it on the button for better event handling

          // className={"mx-6 py-1 flex rounded bg-red-500 items-center mt-4 px-3 w-16 text-white md:text-xl md:px-4 md:w-20"}
        >
          <button
            className={"mx-6 py-1 flex rounded bg-red-500 items-center mt-4 px-3 w-16 text-white md:text-xl md:px-4 md:w-20"}
          >
            OK
            <BiCheck className={"ml-2 text-xl md:text-3xl"} />
          </button>
        </div>
      </form>
    </section>
  )
}
export default First