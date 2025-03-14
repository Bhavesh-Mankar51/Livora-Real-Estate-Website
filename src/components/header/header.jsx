import React, {useState} from 'react';
import "./header.css";
import "/Users/bhaveshmankar/real-estate/src/index.css";
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler';


const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
          return { right: !menuOpened && "-100%" };
        }
    };


    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./Livora-2.png" alt="logo" width={100} />
                <OutsideClickHandler onOutsideClick={() => {setMenuOpened(false)}}>
                    <div className="flexCenter h-menu"
                    style={getMenuStyles(menuOpened)}>
                        <a href=""><h5>Residencies</h5></a>
                        <a href=""><h5>Our Value</h5></a>
                        <a href=""><h5>Contact Us</h5></a>
                        <a href=""><h5>Get Started</h5></a>
                        <button className="button">
                            <a className="h-button" href="">Contact</a>
                        </button>
                    </div>
                </OutsideClickHandler>
                
                <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
                    <BiMenuAltRight size={30}/>
                </div>
            </div>
            
        </section>
    );
}

export default Header;