console.log("testz");

let image_names = 
            ["1.jpeg","2.png", "3.jpg","4.jpg", "5.jpg", "6.jpg", "7.jpg","8.jpg",
            "9.jpg", "10.jpg", "11.jpg","12.png", "13.jpg", "14.jpg","15.jpg","16.jpg",
            "17.jpg","18.jpg", "19.jpg","20.jpg", "21.jpg","22.jpg", "23.jpg", "24.jpg"];




/*let showPicture = (ind) => {
    console.log(ind);
}*/

let date = new Date();
console.log(date.getFullYear() + " " + date.getMonth()+1 + " " + date.getDate());
 
function showPicture (p) {
    if (date.getFullYear() >= 2022 && date.getDate() >= p.currentTarget.ind+1) {
        console.log(p.currentTarget.ind);
        document.getElementById("daily_image").src = ("pics/" + image_names[p.currentTarget.ind]);
    }
    else {
        console.log("Ezt még nem tudod kinyitni!");
    }
}

function alma() {
    console.log("alma");
    //document.getElementById("5").innerHTML = a;
}


let buttons_arr = [];
for (let i=0; i<24; i++) {
    let temp = document.createElement("button");
    temp.innerHTML = i+1;
    temp.id = i;
    temp.ind = i;
    temp.addEventListener("click", showPicture, false);
    temp.className = "button";
    console.log(i+1 + " " + date.getDate());
    if (i+1 > date.getDate()) {
        temp.className = "button_forbidden";
        console.log("hello");
    }
    buttons_arr.push(temp);
}

for (let i=0; i<buttons_arr.length; i++) {
    document.body.appendChild(buttons_arr[i]);
}




