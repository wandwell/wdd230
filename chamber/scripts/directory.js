const baseURL = "https://wandwell.github.io/wdd230/chamber/"
const membersURL = "https://wandwell.github.io/wdd230/chamber/data/members.json"

async function getDirectory() {
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

getDirectory();

function displayMembers (members){
    members.forEach(member => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let desc = document.createElement("p");
        let address = document.createElement("p");
        let phone = document.createElement("p");

        name.textContent = member.name;
        desc.textContent = member.description;
        address.textContent = `Address: ${member.address}`;
        phone.textContent = `Phone: ${member.phone}`;

        card.appendChild(name);
        card.appendChild(desc);
        card.appendChild(address);
        card.appendChild(phone);

        if (member.membership != "bronze"){
            let logo = document.createElement("img");
            let url = document.createElement("a")

            logo.setAttribute("src", member.image);
            logo.setAttribute("alt", "logo of company");
            url.setAttribute("href", "#");
            url.textContent = `Website: ${member.URL}`

            card.appendChild(url);
            card.appendChild(logo);
        };

        document.querySelector("#directory").appendChild(card);
    });
}