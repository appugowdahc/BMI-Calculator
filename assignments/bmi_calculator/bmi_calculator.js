// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    bmi= mass/(height*height)

    if(typeof mass==='number' && typeof height ==='number' && mass >0 && height >0) {
        return mass/(height*height)
    } else {
        return "INVALID INPUT"
    }
    



}

module.exports = BMICalculator;
