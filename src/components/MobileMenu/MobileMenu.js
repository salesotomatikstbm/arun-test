import React, { Fragment, useState } from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import { Link } from "react-router-dom";
import './style.css';

const menus = [
    {
        id: 1,
        title: 'முகப்பு',
        link: '/home',
    },
    {
        id: 2,
        title: 'வரலாறு',
        link: '/history',
    },
    {
        id: 3,
        title: 'தமிழ்நாடு',
        link: '/tamilnadu',
    },
    {
        id: 4,
        title: 'இந்தியா',
        link: '/india',
    },
    {
        id: 5,
        title: 'உலகம்',
        link: '/world',
    },
    {
        id: 6,
        title: 'சினிமா',
        link: '/cinema',
    },
    {
        id: 7,
        title: 'தொழில்',
        link: '/job',
    },
      {
        id: 8,
        title: 'யூடியூப்',
        link: '/youtube',
    },
];

const MobileMenu = () => {
    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
        setMenuState(false); // close menu after click
    };

    return (
        <div>
            {/* Mobile Menu Drawer */}
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(false)}>
                        <i className="ti-close"></i>
                    </div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, index) => (
                        <ListItem
                            className={item.id === openId ? 'active' : null}
                            key={index}
                        >
                            {item.submenu ? (
                                <Fragment>
                                    <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>
                                        {item.title}
                                        <i
                                            className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}
                                        ></i>
                                    </p>
                                    <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                        <List className="subMenu">
                                            {item.submenu.map((submenu, i) => (
                                                <ListItem key={i}>
                                                    <Link
                                                        onClick={ClickHandler}
                                                        to={submenu.link}
                                                    >
                                                        {submenu.title}
                                                    </Link>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Collapse>
                                </Fragment>
                            ) : (
                                <Link
                                    onClick={ClickHandler}
                                    to={item.link}
                                >
                                    {item.title}
                                </Link>
                            )}
                        </ListItem>
                    ))}
                </ul>
            </div>

            {/* Menu Toggle Button */}
            <div className="showmenu" onClick={() => setMenuState(true)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    );
};

export default MobileMenu;
