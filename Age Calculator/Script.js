let dob = document.getElementById("inputdate");
let Result = document.getElementById("result");
let btn =  document.getElementById("CalculateAge");

btn.addEventListener("click", () => {
    if ( dob.value == '' ) {
        alert("plear select your date");
    } else {
        //for DOB year
        const date = new Date(dob.value);
        const dob_year = date.getFullYear();

        //current year
        const now = new Date();
        let now_year = now.getFullYear();

        const age = now_year - dob_year;
        Result.innerHTML = `Your Age is ${age}`;

    }
})