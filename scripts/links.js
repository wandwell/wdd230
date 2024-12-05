const baseURL = "https://wandwell.github.io/wdd230/"
const linksURL = "https://wandwell.github.io/wdd230/data/links.json"

async function getLinks() {
    try{
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            displayLinks(data.weeks);
        } else {
            throw Error(await response.text);   
        }
    }catch(error){
        console.log(error);
    };
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