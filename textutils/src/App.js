import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import "./app.css";

function App() {
  return (
    <>
      {/* <Navbar title={333}/> */}
      <Navbar title="TextUtils" />
      {/* <Navbar/> */}

      <div className="container my-3">
        <TextForm heading="Enter the text below"/>  
      </div>
    </>
  );
}

export default App;
