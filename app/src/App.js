import './App.css';

function App() {
  return (
    <div className="app">
      <h1 className="header">Upload your image</h1>

      <p className="">File should be Jpeg, Png...</p>

      <div className="uploader">
        <div className="logo"></div>
        <p>Drag & drop your image here</p>
      </div>

      <p className>Or</p>

      <button>Choose a file</button>
    </div>
  );
}

export default App;
