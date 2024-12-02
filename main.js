document.addEventListener("DOMContentLoaded", () => {
    let div = document.getElementById("insider");
    for (let i = 1; i <= 40; i++) {
        if (i == 2) continue;
        div.innerHTML +=
            '<div><img src="photos/' + i + '.jpg" class="img"/></div> ';
    }
    div.innerHTML += '<div><img src="photos/2.jpg" class="img"/></div> ';
    /*
	div.innerHTML +=
        '<div><img src="photos/1.jpg"style="width: 100%; border-radius: 12px"/></div> ';
	*/
});
