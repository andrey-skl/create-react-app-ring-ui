import './App.css';
import '@jetbrains/ring-ui/dist/style.css';
import Alert from '@jetbrains/ring-ui/dist/alert/alert';
import Header from '@jetbrains/ring-ui/dist/header/header';

function App() {
  return (
    <div className="App">
      <Header>

      </Header>

        <Alert type={Alert.Type.SUCCESS}>
          Hello!
        </Alert>
    </div>
  );
}

export default App;
