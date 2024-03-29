function calculateAge() {
    var birthdateInput = document.getElementById("birthdate");
    var birthdate = new Date(birthdateInput.value);
    var today = new Date();
    
    var ageYears = today.getFullYear() - birthdate.getFullYear();
    var ageMonths = today.getMonth() - birthdate.getMonth();
    var ageDays = today.getDate() - birthdate.getDate();
    
    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }
    
    document.getElementById("age").innerHTML = "Your age is currently " + ageYears + " years, " + ageMonths + " months, and " + ageDays + " days.";
}