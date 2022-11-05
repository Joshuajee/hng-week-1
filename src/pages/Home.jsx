import { useState } from 'react';
import { Link } from "react-router-dom";
import ListItem from '../components/ListItem';
import share_ from '../assets/share.png';
import shareHover from '../assets/share-hover.png';
import menu_ from '../assets/menu.png';
import menuHover from '../assets/menu-hover.png';
import profile_img from '../assets/profile__img.png';
import profile_alt from '../assets/profile_alt.png';
import slack from '../assets/slack.png';
import github from '../assets/github.png';
import toolTip from '../assets/tooltip.png';

const lists = [
  {name: "Twitter Link", link: "https://twitter.com/EvuetaphaJoshua/", id: "twitter"},
  {name: "Zuri Team", link: "https://training.zuri.team/", id: "btn__zuri"},
  {name: "Zuri Books", link: "http://books.zuri.team/", id: "books"},
  {name: "Python Books", link: "https://books.zuri.team/python-for-beginners?ref_id=joshuajee", id: "book__python"},
  {name: "Background Check for Coders", link: "https://background.zuri.team", id: "pitch"},
  {name: "Design Books", link: "https://books.zuri.team/design-rules/", id: "book__design"},
]

export default function Home () {

    const [profile, setProfile] = useState(profile_img);
    const [share, setShare] = useState(share_);
    const [menu, setMenu] = useState(menu_);
    const [menuClass, setMenuClass] = useState("mobile-menu");

    const shareHoverFunc = () => {
        setShare(shareHover)
    }

    const shareFunc = () => {
        setShare(share_)
    }

    const menuHoverFunc = () => {
        setMenu(menuHover)
        setMenuClass("mobile-menu-hover")
    }

    const menuFunc = () => {
        setMenu(menuHover)
        setMenuClass("mobile-menu")
    }


    return (
        <>

            <div className='share-hover'>
                <img onMouseOver={shareHoverFunc} onMouseOut={shareFunc} alt='share' id="share" src={share} />
              
                <img class="tooltiptext" src={toolTip} alt="Share Link" />
            </div>

            <img onMouseOver={menuHoverFunc} onMouseOut={menuFunc} className={menuClass} alt='menu' id="mobile-menu" src={menu} />

            <div className='profile-section'>

                <img onMouseOver={() => setProfile(profile_alt)} onMouseOut={() => setProfile(profile_img)} className='profile' alt='profile' id="profile__img" src={profile} />

                <h2 className='name' >EvuetaphaJoshua</h2>

                <h2 id="slack" style={{display: "none"}}> joshuajee </h2>

            </div>

            {
                lists.map((list, index) => <ListItem key={index} name={list.name} link={list.link} id={list.id} />)
            }

            <Link id={"contact"} className="list-item" to={"/contact"}> Contact Me </Link>

            <div className="socials-container">

                <img alt={"slack"} src={slack} />

                <img alt={"github"} src={github} />

            </div>

        </>
    )
}