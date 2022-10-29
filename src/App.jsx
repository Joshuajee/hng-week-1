import Footer from './Footer';
import ListItem from './ListItem';
import profile from './assets/profile__img.png';

const lists = [
  {name: "Twitter Link", link: "https://twitter.com/EvuetaphaJoshua/", id: "twitterLink"},
  {name: "Zuri Team", link: "https://training.zuri.team/", id: "btn__zuri"},
  {name: "Zuri Books", link: "http://books.zuri.team/", id: "books"},
  {name: "Python Books", link: "https://books.zuri.team/", id: "book_python"},
  {name: "Background Check for Coders", link: "https://background.zuri.team", id: "pitch"},
  {name: "Design Books", link: "https://books.zuri.team/design-rules/", id: "book_design"},
]


function App() {
  return (
    <div>

      <div className="app">

        <img className='profile' alt='profile' id="profile__img" src={profile} />

        <h2 className='name' id="twitter">EvuetaphaJoshua</h2>

        <h2 id="slack" style={{display: "none"}}> joshuajee </h2>

        {
          lists.map((list, index) => <ListItem key={index} name={list.name} link={list.link} id={list.id} />)
        }

      </div>

      <Footer />

    </div>
  );
}

export default App;
