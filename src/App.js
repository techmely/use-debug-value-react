import logo from "./logo.svg";
import "./App.css";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [response, loading, error] = useFetch(
    "https://fakestoreapi.com/products"
  );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          <span style={{ color: "orange" }}>useDebugValue</span> trong React.js
        </h1>
        {loading ? (
          <p>loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : response?.length <= 0 ? (
          <p>Empty</p>
        ) : (
          response?.map((product) => <p key={product.title}>{product?.title}</p>)
        )}
      </header>
    </div>
  );
}

export default App;
