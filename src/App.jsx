import { useState } from 'react';
import Footer from './Footer';
import ListItem from './ListItem';
import share_ from './assets/share.png';
import shareHover from './assets/share-hover.png';
import menu_ from './assets/menu.png';
import menuHover from './assets/menu-hover.png';
import profile_img from './assets/profile__img.png';
import profile_alt from './assets/profile_alt.png';
import slack from './assets/slack.png';
import github from './assets/github.png';

const lists = [
  {name: "Twitter Link", link: "https://twitter.com/EvuetaphaJoshua/", id: "twitterLink"},
  {name: "Zuri Team", link: "https://training.zuri.team/", id: "btn__zuri"},
  {name: "Zuri Books", link: "http://books.zuri.team/", id: "books"},
  {name: "Python Books", link: "https://books.zuri.team/", id: "book_python"},
  {name: "Background Check for Coders", link: "https://background.zuri.team", id: "pitch"},
  {name: "Design Books", link: "https://books.zuri.team/design-rules/", id: "book_design"},
]


function App() {

  const [profile, setProfile] = useState(profile_img);
  const [share, setShare] = useState(share_);
  const [shareClass, setShareClass] = useState('share');
  const [menu, setMenu] = useState(menu_);
  const [menuClass, setMenuClass] = useState("mobile-menu");

  const shareHoverFunc = () => {
    setShare(shareHover)
    setShareClass("share-hover")
  }

  const shareFunc = () => {
    setShare(share_)
    setShareClass("share")
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
    <div>

      <div className="app">

        <img onMouseOver={shareHoverFunc} onMouseOut={shareFunc} className={shareClass} alt='share' id="share" src={share} />

        <img onMouseOver={menuHoverFunc} onMouseOut={menuFunc} className={menuClass} alt='menu' id="mobile-menu" src={menu} />

        <div className='profile-section'>

          <img onMouseOver={() => setProfile(profile_alt)} onMouseOut={() => setProfile(profile_img)} className='profile' alt='profile' id="profile__img" src={profile} />

          <h2 className='name' id="twitter">EvuetaphaJoshua</h2>

          <h2 id="slack" style={{display: "none"}}> joshuajee </h2>
        </div>

        {
          lists.map((list, index) => <ListItem key={index} name={list.name} link={list.link} id={list.id} />)
        }

        <div className="socials-container">

          <img alt={"slack"} src={slack} />

          <img alt={"github"} src={github} />

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default App;
