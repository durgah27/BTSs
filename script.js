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
document.body.style.backgroundColor="white";
const button=document.getElementById("changeColorBtn");
button.addEventListener("click",()=>{
    if(document.body.style.backgroundColor=="plum")
        document.body.style.backgroundColor="white";
    else document.body.style.backgroundColor="plum";
});
const form=document.querySelector(".contact-form");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    alert("Thank you for sending your love to BTS! We'll make sure they feel it!");
});
const triggerImage=document.getElementById('triggerImage');
const modal=document.getElementById('modal');
const closeModal=document.getElementById('closeModal');
triggerImage.addEventListener('click',()=>{
    modal.style.display='flex';
});
closeModal.addEventListener('click',()=>{
    modal.style.display='none';
});
window.addEventListener('click',(e)=>{
    if(e.target===modal){
        modal.style.display='none';
    }
});
const triggerImage1=document.getElementById('triggerImage1');
const modal1=document.getElementById('modal1');
const closeModal1=document.getElementById('closeModal1');
triggerImage1.addEventListener('click',()=>{
    modal1.style.display='flex';
});
closeModal1.addEventListener('click',()=>{
    modal1.style.display='none';
});
window.addEventListener('click',(e)=>{
    if(e.target===modal1){
        modal1.style.display='none';
    }
});

const triggerImage2=document.getElementById('triggerImage2');
const modal2=document.getElementById('modal2');
const closeModal2=document.getElementById('closeModal2');
triggerImage2.addEventListener('click',()=>{
    modal2.style.display='flex';
});
closeModal2.addEventListener('click',()=>{
    modal2.style.display='none';
});
window.addEventListener('click',(e)=>{
    if(e.target===modal2){
        modal2.style.display='none';
    }
});
const triggerImage3=document.getElementById('triggerImage3');
const modal3=document.getElementById('modal3');
const closeModal3=document.getElementById('closeModal3');
triggerImage3.addEventListener('click',()=>{
    modal3.style.display='flex';
});
closeModal3.addEventListener('click',()=>{
    modal3.style.display='none';
});
window.addEventListener('click', (e) => {
    if(e.target===modal3){
        modal3.style.display='none';
    }
});
const triggerImage4=document.getElementById('triggerImage4');
const modal4=document.getElementById('modal4');
const closeModal4=document.getElementById('closeModal4');
triggerImage4.addEventListener('click',()=>{
    modal4.style.display='flex';
});
closeModal4.addEventListener('click',()=>{
    modal4.style.display='none';
});
window.addEventListener('click',(e)=>{
    if(e.target===modal4){
        modal4.style.display='none';
    }
});
const triggerImage5=document.getElementById('triggerImage5');
const modal5=document.getElementById('modal5');
const closeModal5=document.getElementById('closeModal5');
triggerImage5.addEventListener('click',()=>{
    modal5.style.display='flex';
});
closeModal5.addEventListener('click',()=>{
    modal5.style.display='none';
});
window.addEventListener('click',(e)=>{
    if(e.target===modal5){
        modal5.style.display='none';
    }
});
const triggerImage6=document.getElementById('triggerImage6');
const modal6=document.getElementById('modal6');
const closeModal6=document.getElementById('closeModal6');
triggerImage6.addEventListener('click',()=>{
    modal6.style.display='flex';
});
closeModal6.addEventListener('click',()=>{
    modal6.style.display='none';
});
window.addEventListener('click',(e)=>{
    if(e.target===modal6){
        modal6.style.display='none';
    }
});
const triggerImage7=document.getElementById('triggerImage7');
const modal7=document.getElementById('modal7');
const closeModal7=document.getElementById('closeModal7');
triggerImage7.addEventListener('click',()=>{
    modal7.style.display='flex';
});
closeModal7.addEventListener('click',()=>{
    modal7.style.display='none';
});
window.addEventListener('click',(e)=>{
    if(e.target===modal7){
        modal7.style.display='none';
    }
});
const triggerImage8=document.getElementById('triggerImage8');
const modal8=document.getElementById('modal8');
const closeModal8=document.getElementById('closeModal8');
triggerImage8.addEventListener('click',()=>{
    modal8.style.display = 'flex';
});
closeModal8.addEventListener('click',()=>{
    modal8.style.display = 'none';
});
window.addEventListener('click',(e)=>{
    if(e.target===modal8){
        modal8.style.display='none';
    }
});
const triggerImage9=document.getElementById('triggerImage9');
const modal9=document.getElementById('modal9');
const closeModal9=document.getElementById('closeModal9');
triggerImage9.addEventListener('click',()=>{
    modal9.style.display='flex';
});
closeModal9.addEventListener('click',()=>{
    modal9.style.display='none';
});
window.addEventListener('click',(e)=>{
    if(e.target===modal9){
        modal9.style.display='none';
    }
});
const triggerImage10=document.getElementById('triggerImage10');
const modal10=document.getElementById('modal10');
const closeModal10=document.getElementById('closeModal10');
triggerImage10.addEventListener('click',()=>{
    modal10.style.display='flex';
});
closeModal10.addEventListener('click',()=>{
    modal10.style.display='none';
});
window.addEventListener('click',(e)=>{
    if(e.target===modal10){
        modal10.style.display='none';
    }
});

const triggerImage11=document.getElementById('triggerImage11');
const modal11=document.getElementById('modal11');
const closeModal11=document.getElementById('closeModal11');
triggerImage11.addEventListener('click',()=>{
    modal11.style.display='flex';
});
closeModal11.addEventListener('click',()=>{
    modal11.style.display='none';
});
window.addEventListener('click', (e) => {
    if (e.target === modal11) {
        modal11.style.display='none';
    }
});

const triggerImage12=document.getElementById('triggerImage12');
const modal12=document.getElementById('modal12');
const closeModal12=document.getElementById('closeModal12');
triggerImage12.addEventListener('click',()=>{
    modal12.style.display='flex';
});
closeModal12.addEventListener('click',()=>{
    modal12.style.display='none';
});
window.addEventListener('click',(e)=>{
    if(e.target===modal12){
        modal12.style.display='none';
    }
});

const triggerImage13=document.getElementById('triggerImage13');
const modal13=document.getElementById('modal13');
const closeModal13=document.getElementById('closeModal13');
triggerImage13.addEventListener('click',()=>{
    modal13.style.display='flex';
});
closeModal13.addEventListener('click',()=>{
    modal13.style.display='none';
});
window.addEventListener('click',(e)=>{
    if(e.target===modal13){
        modal13.style.display='none';
    }
});

const triggerImage14=document.getElementById('triggerImage14');
const modal14=document.getElementById('modal14');
const closeModal14=document.getElementById('closeModal14');
triggerImage14.addEventListener('click',()=>{
    modal14.style.display='flex';
});
closeModal14.addEventListener('click',()=>{
    modal14.style.display='none';
});
window.addEventListener('click',(e)=>{
    if(e.target===modal14){
        modal14.style.display='none';
    }
});
const triggerImage15=document.getElementById('triggerImage15');
const modal15=document.getElementById('modal15');
const closeModal15=document.getElementById('closeModal15');
triggerImage15.addEventListener('click',()=>{
    modal15.style.display='flex';
});
closeModal15.addEventListener('click',()=>{
    modal15.style.display='none';
});
window.addEventListener('click',(e)=>{
    if(e.target===modal15){
        modal15.style.display='none';
    }
});