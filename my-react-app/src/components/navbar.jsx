import { Link } from "react-router-dom"
import '../style/navbar.css'
import '../style/fontawesome/css/all.min.css'
import { useEffect, useState } from "react"
import componentsData from '../data.json'
export const Nav = () => {
    const [showNav, setShowNav] = useState(true);
    const click = () => {
        setShowNav(!showNav);
    }
    // function getData() {
    //     fetch("../data.json")
    //         .then(response => response.json())
    //         .then(data => {
    //             alert(data[0].componentName);
    //         })
    //         .catch(error => alert(error));
    // }

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await getData();
    //             setMyData(response);
    //         }
    //         catch (error) {
    //             console.error(error);
    //         }
    //     };
    //     fetchData();
    // }, []);

    // let className = 'link';
    {/* let className = 'menu';
  if (this.props.isActive) {
    className += ' menu-active';
  }
  return <span className={className}>תפריט</span>
} */}
    return <>
        {(showNav) ? <nav className="navbar" >
            <i className="fa-solid fa-times" onClick={click}></i>
            <img src='/לוגולאתר.gif' alt="logo" id="logo"></img>
            {/* <div className="nav-btn">
                <ul className="navbar-links">
                <li className="navbar-dropdown">
                <div className="link"><Link to="home" className="nav-link active" data-bs-toggle="tab"><i className="fa-solid fa-home"></i> דף הבית </Link></div>
                </li>
</ul>
</div> */}
            {/* <div className="nav-btn"> */}
                <ul className="navbar-links">
                    {/* {(
                        componentsData.map((component) =>
                        (
                            <li className="navbar-dropdown">
                                <div className="link"><Link to={component.to} className="nav-link active" data-bs-toggle="tab"><i className={component.icon}></i> {component.componentName} </Link></div>

                                <div className="dropdown">
                                    {
                                        (componentsData.categories && componentsData.categories.length > 0 ? (
                                            componentsData.categories.map((category) =>
                                            (

                                                < div className="link"><Link to={component.to} className="nav-link " data-bs-toggle="tab">{category.componentName} </Link></div>

                                            ))) :
                                            <></>
                                        )
                                    } </div>
                            </li>
                        )))
                    } */}


                    <li className="navbar-dropdown">
                    <div className="link"><Link to="home" className="nav-link active" data-bs-toggle="tab"><i className="fa-solid fa-home"></i> דף הבית</Link></div>
                    </li>
                    <li className="navbar-dropdown">
                        <div className="link"><Link to="about" className="nav-link " data-bs-toggle="tab"><i className="fa-solid fa-spa"></i> אודותינו</Link></div>
                    </li>
                    <li className="navbar-dropdown">
                        <div className="link"><Link to="flowers/זרי אירוסין" className="nav-link " data-bs-toggle="tab"><i className="fa-solid fa-caret-down"></i> זרי אירוסין</Link></div>
                        <div className="dropdown">
                            <div className="link"><Link to="categories/זרים חיים" className="nav-link " data-bs-toggle="tab">זרים חיים</Link></div>
                            <div className="link"><Link to="categories/זרים משולבים" className="nav-link " data-bs-toggle="tab">זרים משולבים</Link></div>
                        </div>
                    </li>
                    <li className="navbar-dropdown">
                        <div className="link"><Link to="flowers/זרי כלה" className="nav-link " data-bs-toggle="tab"><i className="fa-solid fa-caret-down"></i> זרי כלה </Link></div>
                        <div className="dropdown">
                            <div className="link"><Link to="categories/זרי כלה ליד" className="nav-link " data-bs-toggle="tab">זרי כלה ליד</Link></div>
                            <div className="link"><Link to="categories/זרי חישוק" className="nav-link " data-bs-toggle="tab">זרי חישוק</Link></div>
                            <div className="link"><Link to="categories/זרי סחלב" className="nav-link " data-bs-toggle="tab">זרי סחלב</Link></div>
                            <div className="link"><Link to="categories/זרי תכשיט" className="nav-link " data-bs-toggle="tab">זרי תכשיט</Link></div>
                        </div>
                    </li>
                    <li className="navbar-dropdown">
                        <div className="link"><Link to="flowers/סידורי פרחים" className="nav-link " data-bs-toggle="tab"><i className="fa-solid fa-caret-down"></i> סידורי פרחים</Link></div>
                        <div className="dropdown">
                            <div className="link"><Link to="categories/זרי פרחים" className="nav-link " data-bs-toggle="tab">זרי פרחים</Link></div>
                            <div className="link"><Link to="categories/עיצובי פרחים" className="nav-link " data-bs-toggle="tab">עיצובי פרחים</Link></div>
                            <div className="link"><Link to="categories/עיצובים מתוקים" className="nav-link " data-bs-toggle="tab">עיצובים מתוקים</Link></div>
                            <div className="link"><Link to="categories/פרלינים" className="nav-link " data-bs-toggle="tab">פרלינים</Link></div>
                        </div>
                    </li>
                    <li className="navbar-dropdown">
                        <div className="link"><Link to="flowers/עיצובי מתנות" className="nav-link " data-bs-toggle="tab"><i className="fa-solid fa-caret-down"></i> עיצובי מתנות</Link></div>
                        <div className="dropdown">
                            <div className="link"><Link to="categories/עיצובי מתנות" className="nav-link " data-bs-toggle="tab">עיצובי מתנות</Link></div>
                            <div className="link"><Link to="categories/עיצובים לחתן" className="nav-link " data-bs-toggle="tab">עיצובים לחתן</Link></div>
                            <div className="link"><Link to="categories/עיצובים לכלה" className="nav-link " data-bs-toggle="tab">עיצובים לכלה</Link></div>

                        </div>
                    </li>
                    <li className="navbar-dropdown">
                        <div className="link"><Link to="flowers/מלאכותי" className="nav-link " data-bs-toggle="tab"><i className="fa-solid fa-caret-down"></i> מלאכותי</Link></div>
                        <div className="dropdown">
                            <div className="link"><Link to="categories/סידורי פרחים" className="nav-link " data-bs-toggle="tab">סידורי פרחים</Link></div>
                            <div className="link"><Link to="categories/כלי נוי" className="nav-link " data-bs-toggle="tab">כלי נוי</Link></div>
                        </div>
                    </li>
                    <li className="navbar-dropdown">
                        <div className="link"><Link to="categories/עציצים" className="nav-link " data-bs-toggle="tab"><i className="fa-solid fa-leaf"></i> עציצים</Link></div>
                    </li>
                    <li className="navbar-dropdown">
                        <div className="link"><Link to="flowers/חגים" className="nav-link " data-bs-toggle="tab"><i className="fa-solid fa-caret-down"></i> חגים</Link></div>
                        <div className="dropdown">
                            <div className="link"><Link to="categories/ראש השנה" className="nav-link " data-bs-toggle="tab">ראש השנה</Link></div>
                            <div className="link"><Link to="categories/חנוכה" className="nav-link " data-bs-toggle="tab">חנוכה</Link></div>
                            <div className="link"><Link to="categories/טו בשבט" className="nav-link " data-bs-toggle="tab">טו בשבט</Link></div>
                            <div className="link"><Link to="categories/פורים" className="nav-link " data-bs-toggle="tab">פורים</Link></div>
                            <div className="link"><Link to="categories/שבועות" className="nav-link " data-bs-toggle="tab">שבועות</Link></div>
                        </div>
                    </li>
                    <li className="navbar-dropdown">
                        <div className="link"><Link to="flowers/עיצוב אירועים" className="nav-link " data-bs-toggle="tab"><i className="fa-solid fa-caret-down"></i> עיצוב אירועים</Link></div>
                        <div className="dropdown">
                            <div className="link"><Link to="categories/בר מצווה" className="nav-link " data-bs-toggle="tab">בר מצווה</Link></div>
                            <div className="link"><Link to="categories/עיצוב בארים" className="nav-link " data-bs-toggle="tab">עיצוב בארים</Link></div>
                            <div className="link"><Link to="categories/מרכזי שולחן" className="nav-link " data-bs-toggle="tab">מרכזי שולחן</Link></div>
                        </div>
                    </li>
    
                   
                   
                    <li className="navbar-dropdown">
                        <div className="link"><Link to="contact" className="nav-link " data-bs-toggle="tab"><i className="fa-solid fa-phone"></i> צור קשר </Link></div>
                    </li>
                </ul>
            {/* </div> */}
            {/* <div className="hamburger-menu-container">
                <div className="hamburger-menu">
                    <div></div>
                </div>
            </div> */}
        </nav> :
            <i className="fa-solid fa-bars" onClick={click}></i>}
    </>
}
