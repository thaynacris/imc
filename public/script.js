function calculateIMC() {
    // Converter valores para float, substituindo vírgula por ponto
    function convertToFloat(value) {
        const normalizedValue = value.replace(',', '.');
        return parseFloat(normalizedValue);
    }

    // Verificar se a altura está em centímetros e convertê-la para metros
    function normalizeHeight(value) {
        return value > 3 ? value / 100 : value;
    }

    // Verificar se o peso está em formato inadequado e convertê-lo
    function normalizeWeight(value) {
        return value > 300 ? value / 10 : value;
    }

    const weightInput = document.getElementById('weight').value;
    const heightInput = document.getElementById('height').value;

    let weight = convertToFloat(weightInput);
    let height = convertToFloat(heightInput);

    // Normalizar a altura e o peso, se necessário
    weight = normalizeWeight(weight);
    height = normalizeHeight(height);

    // Verificar se os valores são números e positivos
    if (isNaN(weight) || weight <= 0 || isNaN(height) || height <= 0) {
        document.getElementById('result').innerText = "Por favor, insira valores válidos.";
        return;
    }

    const imc = weight / (height * height);

    let classification = '';
    if (imc < 18.5) {
        classification = 'Abaixo do peso';
    } else if (imc < 25) {
        classification = 'Peso normal';
    } else if (imc < 30) {
        classification = 'Sobrepeso';
    } else {
        classification = 'Obesidade';
    }

    document.getElementById('result').innerText = `Seu IMC é ${imc.toFixed(2)} (${classification}).`;
}
