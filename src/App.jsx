import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here
  const data = imageData();
  return (
    <div className="container">
      {data.map((item) => (
        <div key={item.id} className="image-container">
          <img src={item.img} alt={`Image ${item.id}`} />
        </div>
      ))}
    </div>
  );
}

export default App;
