function convertTemperature() {
    const degree = parseFloat(document.getElementById('degree').value);
    const fromUnit = document.getElementById('unit').value;
    const toUnit = document.getElementById('convert-to').value;
    const resultElement = document.getElementById('result');
    const resultUnit = document.getElementById('result-unit');
  
    if (!(degree <= 0 || degree >= 0 )) {
      resultElement.innerHTML = 'Invalid';
      resultUnit.innerHTML = 'Input';
      return;
    }
  
    let result;
  
    if (fromUnit === 'C' && toUnit === 'F') {
      result = (degree * 9/5) + 32;
      resultUnit.innerHTML = '°F';
    } else if (fromUnit === 'C' && toUnit === 'K') {
      result = (degree + 273.15);
      resultUnit.innerHTML = 'K';
    } else if (fromUnit === 'F' && toUnit === 'C') {
      result = (degree - 32) * 5/9;
      resultUnit.innerHTML = '°C';
    } else if (fromUnit === 'F' && toUnit === 'K') {
      result = ((degree - 32)/1.8) + 273.15;
      resultUnit.innerHTML = 'K';
    } else if (fromUnit === 'K' && toUnit === 'C') {
      result = (degree - 273.15);
      resultUnit.innerHTML = '°C';
    } else if (fromUnit === 'K' && toUnit === 'F') {
      result = (((degree - 273.15) / 5) * 9) + 32;
      resultUnit.innerHTML = '°F';
    } else {
      result = degree;
      if (fromUnit === 'C')
      {
        resultUnit.innerHTML = '°C';
      }
       else if (fromUnit === 'F') {
         resultUnit.innerHTML = '°F';
      } 
       else {
         resultUnit.innerHTML = 'K';
       }
    }
  
    resultElement.innerHTML = result.toFixed(1);
  }