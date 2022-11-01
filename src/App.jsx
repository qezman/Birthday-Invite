import React from 'react'

import Welcome from "./components/Welcome";

import Home from "./components/Home";
import End from "./components/End";
import NotAvailable from "./components/NotAvailable"

import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Fifth from "./components/Fifth";

import Footer from "./components/Footer";

const pages = [
  {
    key: 0,
    component: Home
  },
  {
    key: 1,
    component: Welcome
  },
  {
    key: 2,
    component: First,
  },
  {
    key: 3,
    component: Second,
  },
  {
    key: 4,
    component: Third
  },
  {
    key: 5,
    component: Fourth 
  },
  {
    key: 6,
    component: Fifth
  },
  {
    key: 7,
    component: End
  },
  {
    key: -1,
    component: NotAvailable
  }
]

const App = () => {

  // Form Values. Use the below to track input from the user
  const [form, setForm] = React.useState({})

  // Use this to track the current page i.e. from first to last.
  const [currentPage, setCurrentPage] = React.useState(0)

  // Get the current page using the key and then alias the component property
  // key so the component starts with a capital letter as recommended by react team
  const { component: PageComponent } = pages.find(page => page.key === currentPage)

  // Create a useCallback function to handle page change
  const handlePageChange = React.useCallback((decision) => {
    // if decision is 'forward'
    if (decision === 'forward') {
      // Check if the currentPage is not greater than the number of pages
      // We're doing -2 because array index start at 0 and we do not want
      // to land on the not-available page in the user is going to make it
      if (currentPage < pages.length - 2) {
        setCurrentPage(prevState => prevState + 1)
      } else if (currentPage >= pages.length - 2) {
        // Start from the beginning.
        // Meaning they have completed the registration
        setForm({}) // Reset the form
        setCurrentPage(0)
      }
    } else if (decision === 'backward') { // if decision is 'backward'
      // Check if we are not at last page
      if (currentPage > 0) {
        setCurrentPage(prevState => prevState - 1)
      }
    } else { // if decision is not 'forward' or 'backward' i.e 'not-available'
      setCurrentPage(-1)
    }
  }, [currentPage])

  return (
    <section  className={"w-full bg-backImg flex flex-col justify-center h-screen "}>
      <PageComponent 
        handlePageChange={handlePageChange} 
        form={form}
        setForm={setForm}
      />
      
      <Footer handlePageChange={handlePageChange} />
    </section>
  )
}
export default App