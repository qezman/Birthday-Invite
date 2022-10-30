import {FaAngleDown, FaAngleUp} from "react-icons/all";
import {useState} from "react";
import {useHistory} from 'react-router-dom'

const Footer = () => {
  const history = useHistory()
  const [page, setPage] = useState(0)

  const addPage = () => {
    console.log("added")
    setPage(history.go(1))
  }

  const subtractPage = () => {
    setPage(history.go(-1))
  }
  return (
    <section className={"sticky top-[100vh] bg-indigo-100 flex items-center justify-between px-1 py-2"}>
      <div className={"flex"}>
        <div className={"w-8 bg-red-500 p-2 border-r rounded-bl rounded-tl"}>
          <FaAngleUp onClick={addPage} className={"text-white"} />
        </div>
        <div className={"w-8 bg-red-500 p-2 rounded-tr rounded-br"}>
          <FaAngleDown onClick={subtractPage} className={"text-white"} />
        </div>
      </div>

      <div className={"bg-red-500 text-white text-xs px-2 py-2 rounded md:text-lg md:py-3"}>
        Powered by Que
      </div>
    </section>
  )
}
export default Footer