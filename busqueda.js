const search = () => {
    const searchBox = document.getElementById("search-input").value.toUpperCase();
    const storeitems = document.getElementById("character");
    const product = document.querySelectorAll(".card");
    const proname = document.getElementsByTagName("h3");

    for(var i=0; i < proname.length; i++){
        let match = product[i].getElementsByTagName('h3')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchBox) > -1){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";
            }
        }
    }
}