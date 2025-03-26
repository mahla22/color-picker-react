import React, {useState} from "react";

function ColorPicker() {
    const [color, setColor] = useState("#FFFFFF");

    function handleChangeColor(event) {
        setColor(event.target.value)
    }
    return(
        <>
            <div className="container">
                <h1>Color Picker</h1>
                <div className="display-color" style={{backgroundColor: color}}> Selected Color: {color}</div>
                <h2>pick a color</h2>
                <input type="color" id="colorSelection" value={color} onChange={handleChangeColor}/>
            </div>
        </>
    );
}
export default ColorPicker