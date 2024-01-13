function convertTemperature() {
    let temperatureInput = parseFloat(document.getElementById('temperature').value);
    let unit = document.getElementById('unit').value;
    let resultElement = document.getElementById('result');

    if (isNaN(temperatureInput)) {
        resultElement.textContent = 'Please enter a valid number.';
    } else {
        let convertedTemperatures = convert(temperatureInput, unit);
        resultElement.innerHTML = `Celsius: ${convertedTemperatures.celsius}°C<br>
        Fahrenheit: ${convertedTemperatures.fahrenheit}°F<br>
        Kelvin: ${convertedTemperatures.kelvin}K`;
    }
}

function convert(temperature, unit) {
    let celsius, fahrenheit, kelvin;

    switch (unit) {
        case 'celsius':
            celsius = temperature;
            fahrenheit = (celsius * 9/5) + 32;
            kelvin = celsius + 273.15;
            break;
        case 'fahrenheit':
            fahrenheit = temperature;
            celsius = (fahrenheit - 32) * 5/9;
            kelvin = (fahrenheit - 32) * 5/9 + 273.15;
            break;
        case 'kelvin':
            kelvin = temperature;
            celsius = kelvin - 273.15;
            fahrenheit = (kelvin - 273.15) * 9/5 + 32;
            break;
        default:
            throw new Error('Invalid unit selected.');
    }

    return {
        celsius: celsius.toFixed(2),
        fahrenheit: fahrenheit.toFixed(2),
        kelvin: kelvin.toFixed(2)
    };
}
