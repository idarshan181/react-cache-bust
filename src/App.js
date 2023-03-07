import logo from "./logo.svg";
import "./App.css";
import packageJson from "../package.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h5>{packageJson.version}</h5>
        <a href="https://www.google.com">Google</a>
      </header>
      <section>
        <h5>First Commit</h5>
      </section>
      <section>
        <h5>Third Commit</h5>
      </section>
      <section>
        <h5>Fourth Commit</h5>
      </section>
      {/* 
      <section>
        <h5>Five Commit</h5>
      </section> */}
    </div>
  );
}

export default App;
