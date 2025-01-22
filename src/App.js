
import './App.css';
import FormComponent from './Assignment1/FormComponent';
import ProductComponent from './Assignment1/ProductComponent';
import TodoApp from './Assignment1/TODOApp';

function App() {
  return (
    <div>
      {/* <header className="App-header">
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
      </header> */}
       <FormComponent />

       <ProductComponent /> 
       
       <TodoApp />  
    </div>
  );
}

export default App;
