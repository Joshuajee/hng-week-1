import ListItem from './ListItem';
import profile from './profile__img.png';


function App() {
  return (
    <div>

      <div className="app">

        <img className='profile' alt='profile' src={profile} />
        <h2 className='name'>Annette Black</h2>

        <ListItem name={"Twitter Link"}/>

        <ListItem name={"Zuri Team"}/>

        <ListItem name={"Zuri Books"}/>

        <ListItem name={"Python Books"}/>

        <ListItem name={"Background Check for Coders"}/>

        <ListItem name={"Design Books"}/>


      </div>

    </div>
  );
}

export default App;
