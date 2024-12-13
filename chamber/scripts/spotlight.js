const baseURL = "https://wandwell.github.io/wdd230/chamber/";
const membersURL = "https://wandwell.github.io/wdd230/chamber/data/members.json";

async function getSpotlight() {
    try{
        const response = await fetch(membersURL);
        if (response.ok) {
            const data = await response.json();
            displayMembers(data.members);
        } else {
            throw Error(await response.text);   
        }
    }catch(error){
        console.log(error);
    };
}

getSpotlight();

function createCards (array){
    array.forEach(member => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let logo = document.createElement("img");
        let url = document.createElement("a")
        let desc = document.createElement("p");
        let address = document.createElement("p");
        let phone = document.createElement("p");

        name.textContent = member.name;
        desc.textContent = member.description;
        address.textContent = `Address: ${member.address}`;
        phone.textContent = `Phone: ${member.phone}`;
        logo.setAttribute("src", member.image);
        logo.setAttribute("alt", "logo of company");
        url.setAttribute("href", "#");
        url.innerHTML = `Website:<br>${member.URL}`

        card.appendChild(name);
        card.appendChild(url);
        card.appendChild(logo);
        card.appendChild(desc);
        card.appendChild(address);
        card.appendChild(phone);

        document.querySelector("#spotlight").appendChild(card);
    });
}

function displayMembers (members){
    let gold = sortMembers (members, "gold");
    let silver = sortMembers (members, "silver");

    let topMembers = [];

    gold.forEach(item => {
        topMembers.push(item);
    });
    silver.forEach(item => {
        topMembers.push(item);
    });

    let spotlights = pickRandom(topMembers);
    createCards(spotlights);
};

function pickRandom(array) {
    let newArray = [];
    let max = array.length;
    let int0 = Math.floor(Math.random() * max);
    let int1 = -1;
    let int2 = -1;

    while (int1 == -1 || int1 == int0){
        int1 = (Math.floor(Math.random() * max));
    };
    while (int2 == -1 || int2 == int0 || int2 == int1){
        int2 = (Math.floor(Math.random() * max));
    };

    newArray.push(array[int0]);
    newArray.push(array[int1]);
    newArray.push(array[int2]);

    return newArray;
};

function sortMembers (members, membership) {
    let array = [];

    members.forEach(member => {
        if (membership === member.membership){
            array.push(member);
        }
    });

    return array;
};