import "./index.css"
function App({ name, image, description, price }) {
  return (
    <div className="block">
      <div className='sub-heder'>
        <button className='close'><code>-</code> Back to main</button>
        <button className='heart'>X</button>
      </div>
      <div className='sub-body'>
        <img src={image} alt="hello"></img>
        <div className='right-div'>
          <h1 style={{ textTransform: "uppercase" }}>{name}</h1>
          <p>{description}</p>
          <span>{price}</span> <br></br>
          <button className='add'>Add to cart</button>
          <button className='whis'>
            whislist
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
