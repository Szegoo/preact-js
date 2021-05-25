import LoginForm from './preact-components/login-form';
import AlertBox from './preact-components/alert-box';
import Card from './preact-components/card';
import NavigationBar from './preact-components/navigation-bar';
import Modal from './preact-components/modal';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <LoginForm />
      <AlertBox />
      <Card />
      <Modal />
    </div>
  );
}

export default App;
