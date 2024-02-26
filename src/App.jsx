import { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  const [darkText, setDarkText] = useState(true);

  const textColor = darkText ? "black" : "white";

  return (
    <>
      <div className="container">
        <div>
          <div className="color-container" style={{ backgroundColor: color }}>
            <h3 style={{ color: textColor }}>
              {color ? color : "Empty Value"}
            </h3>
          </div>
          <SetColor
            color={color}
            setColor={setColor}
            setDarkText={setDarkText}
            darkText={darkText}
          />
        </div>
      </div>
    </>
  );
}

function SetColor({ color, setColor, setDarkText, darkText }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        autoFocus
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Enter color name"
        name="Input Color"
        autoComplete="off"
      />
      <button onClick={() => setDarkText(!darkText)}>Toggle Text Color</button>
    </form>
  );
}

export default App;
