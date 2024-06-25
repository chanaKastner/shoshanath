import { Routes, Route } from "react-router"
import { Home } from "./Home"
import { About } from "./About"
import { Flowers } from "./flowers"
import { Contact } from "./צור קשר"
import { Sub_Categories } from "./sub_categories"

export const NavRoutes = () => {
    return <>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="home" element={<Home></Home>}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="flowers/:name" element={<Flowers />}></Route>
            <Route path="categories/:category" element={<Sub_Categories />}></Route>
            <Route path="contact" element={<Contact />}></Route>

        </Routes>
    </>
}