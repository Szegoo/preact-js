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
      <NavigationBar />
      <HeroImage />
      <LoginForm />
      <AlertBox />
      <Card />
      <Modal />
      <Table />
    </div>
  );
}

export default App;
