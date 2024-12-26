document.getElementById("search-btn").addEventListener("click",()=>{
    const a=document.getElementById("search-box").value.toLowerCase();
    const sec=document.querySelectorAll("section");
    const res=document.getElementById("search-results");
    res.innerHTML="";
    if (a.trim()===""){
        res.textContent="Please enter a search term.";
        return;
    }
    let found=false;
    sec.forEach((section)=>{
        const sectionText=section.textContent.toLowerCase();
        if (sectionText.includes(a)){
            let secTitle=section.querySelector("h2")?section.querySelector("h2").textContent : 
                               section.querySelector("h1")?section.querySelector("h1").textContent : 
                               "Untitled Section";
            res.innerHTML+=`<a href="#${section.id}">Here's Your Search</a>`;
            found=true;
        }
    });
    if (!found){
        res.textContent="No results found.";
    }
});
