import React from 'react'

const NotAvailable = ({ setForm }) => {
  // Reset the form when the user lands on this page 
  // Since the user is not going to be in attendance

  React.useEffect(() => {
    setForm({})
  }, [setForm])
  
  return (
    <section className={"px-4 text-center w-11/12 mx-auto md:w-3/12"}>
      <p className={"text-gray-800 text-lg md:text-xl lg:text-xl"}>
        Oh no, that's such a shame you can't come.
      </p>
    </section>
  )
}
export default NotAvailable