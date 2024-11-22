const carData = {
    sarawak: [
        { name: "Proton Saga", price: "RM135/day", image: "images/ps.jpg", pax: "5 passengers available" },
        { name: "Perodua Bezza", price: "RM140/day", image: "images/pb.jpg", pax: "5 passengers available" },
    ],
    sabah: [
        { name: "Perodua Axia", price: "RM120/day", image: "images/pa.jpg", pax: "5 passengers available" },
        { name: "Perodua Aruz", price: "RM250/day", image: "images/pa1.jpg", pax: "5 passengers available" },
    ],
    labuan: [
        { name: "Proton Persona", price: "RM225/day", image: "images/pp.jpg", pax: "5 passengers available" },
        { name: "Honda City", price: "RM205/day", image: "images/hc.jpg", pax: "5 passengers available" },
    ],
    kl: [
        { name: "Class Standard SUV", price: "RM201/day", image: "images/suv.jpg", pax: "5 passengers available" },
        { name: "Perodua Bezza", price: "RM99/day", image: "images/pb.jpg", pax: "5 passengers available" },
    ],
    selangor: [
        { name: "Ford Ranger", price: "RM360/day", image: "images/fr.jpg", pax: "5 passengers available" },
        { name: "Perodua Axia", price: "RM130/day", image: "images/pa.jpg", pax: "5 passengers available" },
    ],
    putrajaya: [
        { name: "Perodua Bezza", price: "RM109/day", image: "images/pb.jpg", pax: "5 passengers available" },
        { name: "Honda City", price: "RM200/day", image: "images/hc.jpg", pax: "5 passengers available" },
    ],
    negeri_sembilan: [
        { name: "Proton Saga", price: "RM140/day", image: "images/ps.jpg", pax: "5 passengers available" },
        { name: "Perodua Axia", price: "RM130/day", image: "images/pa.jpg", pax: "5 passengers available" },
    ],
    malacca: [
        { name: "Perodua Axia", price: "RM105/day", image: "images/pa.jpg", pax: "5 passengers available" },
        { name: "Perodua Aruz", price: "RM220/day", image: "images/pa1.jpg", pax: "5 passengers available" },
    ],
    johor: [
        { name: "Honda City", price: "RM200/day", image: "images/hc.jpg", pax: "5 passengers available" },
        { name: "Ford Ranger", price: "RM360/day", image: "images/fr.jpg", pax: "5 passengers available" },
    ],
    perlis: [
        { name: "Perodua Bezza", price: "RM110/day", image: "images/pb.jpg", pax: "5 passengers available" },
        { name: "Class Standard SUV", price: "RM190/day", image: "images/suv.jpg", pax: "5 passengers available" },
    ],
    kedah: [
        { name: "Perodua Axia", price: "RM130/day", image: "images/pa.jpg", pax: "5 passengers available" },
        { name: "Proton Persona", price: "RM210/day", image: "images/pp.jpg", pax: "5 passengers available" },
    ],
    penang: [
        { name: "Class Standard SUV", price: "RM180/day", image: "images/suv.jpg", pax: "5 passengers available" },
        { name: "Perodua Aruz", price: "RM200/day", image: "images/pa1.jpg", pax: "5 passengers available" },
    ],
    perak: [
        { name: "Honda City", price: "RM190/day", image: "images/hc.jpg", pax: "5 passengers available" },
        { name: "Perodua Axia", price: "RM99/day", image: "images/pa.jpg", pax: "5 passengers available" },
    ],
    pahang: [
        { name: "Proton Saga", price: "RM100/day", image: "images/ps.jpg", pax: "5 passengers available" },
        { name: "Ford Ranger", price: "RM340/day", image: "images/fr.jpg", pax: "5 passengers available" },
    ],
    terengganu: [
        { name: "Ford Ranger", price: "RM360/day", image: "images/fr.jpg", pax: "5 passengers available" },
        { name: "Honda City", price: "RM210/day", image: "images/hc.jpg", pax: "5 passengers available" },
    ],
    kelantan: [
        { name: "Perodua Axia", price: "RM120/day", image: "images/pa.jpg", pax: "5 passengers available" },
        { name: "Perodua Aruz", price: "RM250/day", image: "images/pa1.jpg", pax: "5 passengers available" },
    ],
};

document.getElementById("locationDropdown").addEventListener("change", (event) => {
    const location = event.target.value.toLowerCase();
    const carList = document.getElementById("carList");
    const carOptions = document.getElementById("carOptions");

    carList.innerHTML = "";

    if (carData[location]) {
        carOptions.style.display = "block";
        carData[location].forEach((car) => {
            const carCard = document.createElement("div");
            carCard.className = "car-card";
            carCard.innerHTML = `
                <img src="${car.image}" alt="${car.name}">
                <h3>${car.name}</h3>
                <p>${car.price}</p>
                <p>${car.pax}</p>
            `;
            carList.appendChild(carCard);
        });
    }else{
        console.log("No data found for location:", location);
    }
});
