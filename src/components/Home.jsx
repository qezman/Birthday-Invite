import {FaClock} from "react-icons/all";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <section className={"flex flex-col h-screen"}>
      <div className={"px-4 pt-32"}>
        <h1 className={"text-indigo-800 text-center py-3 text-3xl font-bold lg:text-4xl"}>You're invited!</h1>
        <p className={"text-center text-indigo-900 w-7/12 mx-auto text-lg md:text-xl md:w-6/12 lg:w-4/12"}>Hi, you are invited to our son x's birthday party in Ilorin</p>
      </div>

      <footer className={"bg-gray-100 flex flex-col justify-center items-center top-[100vh] sticky"}>

        <div className={"flex items-center text-xs gap-x-1 py-2 md:text-lg lg:text-xl"}>
          <FaClock />
          <p>Takes 30 sec</p>
        </div>

        <div className={"pb-4"}>
          <Link to={"/welcome"}>
            <button className={"bg-red-500 text-white px-3 py-1 rounded tracking-wide text-lg md:text-xl lg:text-2xl"}>RSVP</button>
          </Link>
        </div>
      </footer>
    </section>
  )
}
export default Home