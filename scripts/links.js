const baseURL = "https://wandwell.github.io/wdd230/"
const linksURL = "https://wandwell.github.io/wdd230/data.link.json"

async function getLinks() {
    const response = fetch(linksURL);
    const data = (await response).json;
    displayLinks(data.weeks);
}

getLinks();

function displayLinks(weeks) {
    weeks.forEach(week => {
        let li = document.createElement("li");
        let links = week.links;
        
        li.textContent = `${week.week}: `;

        links.forEach(link => {
            let a = document.createElement("a");
            a.setAttribute("href", link.url);
            a.textContent = link.title;
            li.appendChild(a);
        });
    
        document.querySelector("#learning").appendChild(li);  
    });
}