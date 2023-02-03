import './App.css';
import MyComp from './Button';
import logo from './logo.svg';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img alt="logo" className="App-logo" src={logo as string} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          Learn React
        </a>
        <MyComp change={() => console.log('Hello world')} />
      </header>
    </div>
  );
}

export default App;
