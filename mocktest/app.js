async function showAvatar() {
    document.querySelector(".group").innerHTML = "";
    let response = await fetch('https://swapi.dev/api/vehicles/?page=1');
    let user = await response.json();
    console.log(user.results)
    for (let i of user.results) {
        let page1;
        page1 = `<div class="card">
        <span>Name:</span>${i.name}<br />
        <span>model:</span>${i.model}<br />
        <span>manufacturer:</span>${i.manufacturer}
    </div>`
        document.querySelector(".group").innerHTML += page1;
    }

}
showAvatar()

document.querySelector(".one").addEventListener("click", document.querySelector(".group").innerHTML = "", showAvatar)

