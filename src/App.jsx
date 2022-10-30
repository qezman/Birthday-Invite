import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Fifth from "./components/Fifth";
import Home from "./components/Home";
import {useState} from "react";
import End from "./components/End";


const App = () => {

  const [show, setShow] = useState(true)

  const handleShow = () => {
    setShow(prevState => !prevState)
  }

  return (
    <section  className={"w-full bg-backImg flex flex-col justify-center h-screen "}>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>

        <Route path={"/welcome"}>
          <Welcome />
        </Route>

        <Route path={"/first"}>
          <First />
        </Route>

        <Route path={"/second"}>
          <Second />
        </Route>

        <Route path={"/third"}>
          <Third />
        </Route>

        <Route path={"/fourth"}>
          <Fourth />
        </Route>
s
        <Route path={"/fifth"}>
          <Fifth />
        </Route>

        <Route path={"/end"}>
          <End />
        </Route>
      </Switch>
      <Footer />
    </section>
  )
}
export default App