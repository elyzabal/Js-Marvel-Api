const apimarvel = {
    baseUrl  : "http://gateway.marvel.com",
    ts : 1,
    apikey: "00203f0a9b8268e325435f8b19503a57",
    hash: "99d026c9a5d68384e06183a9abf0cdb2",
    getCharacters : async () => {
        
        const response = await fetch(`${apimarvel.baseUrl}/v1/public/characters?ts=${apimarvel.ts}&apikey=${apimarvel.apikey}&hash=${apimarvel.hash}&limit=20&offset=0`);
        const responseJson = await response.json();
        responseJson.data.results.forEach((character)=> {
            console.log(character);
            let content = document.createElement("div");
            content.className = "card"
            content.innerHTML = `
                <figure class="imgn" >
					<img src="${character.thumbnail.path}.${character.thumbnail.extension}" />
				</figure>
                <div class="card_info" >
					<h3> ${character.name} </h3>
                	<p> ${character.description} </p>
				</div>
            `;
            let divContent = document.getElementById("content");
            divContent.append(content);
        });
    }
};
apimarvel.getCharacters();