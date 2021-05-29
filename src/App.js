import LoginForm from './preact-components/login-form';
import AlertBox from './preact-components/alert-box';
import Card from './preact-components/card';
import NavigationBar from './preact-components/navigation-bar';
import Modal from './preact-components/modal';
import Table from './preact-components/table';
import HeroImage from './preact-components/heroImage';

function App() {
  return (
    <div className="App">
      {/* change the color and background color with 
        color and backgroundColor props
        the default:
          background: #141414
          color: white
       */}
      <NavigationBar />

      {/* you can change the image with src prop */}
      <HeroImage />
      <LoginForm />

      {/*you can choose from color variants with type prop
        these are the types: 
        alert-box -green color
        alert-box_warning -orange color
        alert-box_danger -red color
        if you leave type empty the type is gonna be
        random.  
      */}
      <AlertBox />
      <Card />
      <Modal />
      <Table />
    </div>
  );
}

export default App;
