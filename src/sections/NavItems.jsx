import {navLinks} from "../constants/index.js";

function NavItems() {
    return (
       <ul className="nav-ul">
           {navLinks.map(({id, name, href}) => (<li key={id} className="nav-li"><a href={href} className="nav-li_a">{name}</a></li>))}
       </ul>
    )
}

export default NavItems
