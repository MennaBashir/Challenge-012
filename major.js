let day = document.querySelector("#d");
let month = document.querySelector("#m");
let year = document.querySelector("#y");
let ye = new Date();
let minus_ye = ye.getFullYear() - 1;
let check1 = () => {
    if (day.value === "" && month.value === "" && year.value === "") {
        document.querySelectorAll("form label").forEach((el) => {
            el.classList.add("act1");
        });
        document.querySelectorAll("form span").forEach((el) => {
            el.style.opacity = "1";
        });
        document.querySelectorAll("form input").forEach((el) => {
            el.classList.add("act2");
        });
    }
    else if (day.value === "") {
        document.querySelector("form .day label").classList.add("act1");
        document.querySelector("form .day span").style.opacity = "1";
        day.classList.add("act2");
    }
    else if (month.value === "") {
        document.querySelector("form .month label").classList.add("act1");
        document.querySelector("form .month span").style.opacity = "1";
        month.classList.add("act2");
    }
    else if (year.value === "") {
        document.querySelector("form .year label").classList.add("act1");
        document.querySelector("form .year span").style.opacity = "1";
        year.classList.add("act2");
    }
}

let check2 = () => {
    if (day.value > 30 || day.value < 1 && day.value !== "") {
        document.querySelector("form .day label").classList.add("act1");
        document.querySelector("form .day span").style.opacity = "1";
        document.querySelector("form .day span").innerHTML = "Must be a valid day";
        day.classList.add("act2");
    }
    else if (month.value > 12 || month.value < 1 && month.value !== "") {
        document.querySelector("form .month label").classList.add("act1");
        document.querySelector("form .month span").style.opacity = "1";
        document.querySelector("form .month span").innerHTML = "Must be a valid month";
        month.classList.add("act2");
    }
    else if (year.value !== "" && year.value > ye.getFullYear()) {
        document.querySelector("form .year label").classList.add("act1");
        document.querySelector("form .year span").style.opacity = "1";
        document.querySelector("form .year span").innerHTML = "Must be in the past";
        year.classList.add("act2");
    }
    else if (year.value !== "" && year.value < 1930) {
        document.querySelector("form .year label").classList.add("act1");
        document.querySelector("form .year span").style.opacity = "1";
        document.querySelector("form .year span").innerHTML = "Must be in greater than 1930";
        year.classList.add("act2");
    }


}
document.querySelector("button").addEventListener("click", (x) => {
    document.querySelectorAll("form label").forEach((el) => {
        el.classList.remove("act1");
    });
    document.querySelectorAll("form span").forEach((el) => {
        el.style.opacity = "0";
    });
    document.querySelectorAll("form input").forEach((el) => {
        el.classList.remove("act2");
    });
    check1();
    check2();
    let dy = Math.abs(30 + ye.getDate() - day.value);
    let mo = Math.abs(12 - month.value);
    let yr=Math.abs(minus_ye - year.value);
    if (dy >= 30) {
        dy -= 30;
        mo += 1;
    }
    if(mo>=12){
        mo-=12;
        yr+=1;
    }
    if ((day.value <= 30 && day.value >= 1) && (month.value <= 12 && month.value >= 1) && (year.value >= 1930 && year.value <= ye.getFullYear()) && day.value !== "" && year.value !== "" && month.value != "") {
        document.querySelector(".txt .day span").innerHTML = `${dy}`;
        document.querySelector(".txt .month span").innerHTML = `${mo}`;
        document.querySelector(".txt .year span").innerHTML = `${yr}`;
    }
    x.preventDefault();

})
