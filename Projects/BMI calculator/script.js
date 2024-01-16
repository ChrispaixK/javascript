// Function to calculate BMI
function calculateBMI() {
    // Get the user's height and weight from input fields
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);

    // Check if the inputs are valid numbers
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert('Please enter valid values for height and weight.');
        return;
    }

    // Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    let bmi = weight / Math.pow(height / 100, 2);

    // Display the result with two decimal places
    let resultElement = document.getElementById('result');
    resultElement.innerHTML = `<p>Your BMI: ${bmi.toFixed(2)}</p>`;

    // Provide a simple interpretation of BMI
    if (bmi < 18.5) {
        resultElement.innerHTML += '<p>Underweight</p>';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultElement.innerHTML += '<p>Normal weight</p>';
    } else if (bmi >= 25 && bmi < 29.9) {
        resultElement.innerHTML += '<p>Overweight</p>';
    } else {
        resultElement.innerHTML += '<p>Obese</p>';
    }
}
