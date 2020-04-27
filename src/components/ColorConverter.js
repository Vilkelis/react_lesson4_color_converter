import React from 'react';

function ColorConverter() {
  const colorHexDefault = '#34495e';    
  const errorMessage = 'Ошибка!';
  const errorColor = { r: 234, g: 75, b: 53 };

  const convertHexToRgb = (hex) => {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    if ( result ) {
      return { r: parseInt(result[1], 16),
               g: parseInt(result[2], 16),
               b: parseInt(result[3], 16) };
    } else {
      return null;
    }
  };

  const rgbToString = (rgb, forStyle = false) => {     
    let color = rgb || errorColor;

    if ( forStyle || rgb ) {
      return 'rgb(' + color.r + ',' + color.g + ',' + color.b +')';
    } else {
      return errorMessage;
    }
  };

  const [colorHex, setColorHex] = React.useState(colorHexDefault);
  const [colorRgb, setColorRgb] = React.useState(convertHexToRgb(colorHexDefault));   

  const colorStyle = () => { 
    return {backgroundColor: rgbToString(colorRgb, true)} 
  };

  const handleColorHexChange = evt => { 
    let value = evt.target.value;
    setColorHex(value); 

    if ( value.length >= 7 ) {
      setColorRgb(convertHexToRgb(value));
    }
  };

  return (
    <div className="ColorConverter" style={colorStyle()}>
      <div className="color-box">        
        <input 
          className="color-box__color-hex-input" 
          name="color-hex" 
          value={colorHex}
          onChange={handleColorHexChange} 
        />
        <div className="color-box__color-rbg">
          {rgbToString(colorRgb)}
        </div>
      </div>
    </div>
  );
}

export default ColorConverter;