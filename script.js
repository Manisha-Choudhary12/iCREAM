let imageCard= document.querySelector('.img-card');
let arrowIcons= document.querySelectorAll('.icon i');

let isDragging=false;

const handleIcons=()=>{
    let scrollVal=imageCard.scrollLeft;
    let maxScrollableWidth = imageCard.scrollWidth-imageCard.clientWidth
    arrowIcons[0].parentElement.style.display= scrollVal > 0 ? 'flex' : "none";
    arrowIcons[1].parentElement.style.display= maxScrollableWidth > scrollVal ? 'flex' : "none"; // if no content is left, hide right icon 
}

arrowIcons.forEach(icon=>{
    icon.addEventListener('click',()=>{
        // if clicked icon left, reduce 350 form imageCard scollLeft else added
     imageCard.scrollLeft += icon.id ==='left'? -350 : 350;
     setTimeout(()=>handleIcons(),50)     //  call handleIcons after 50 miliseconds;
    })
})


const dragging=(e)=>{
    if(!isDragging) return;
    imageCard.classList.add('dragging');
    imageCard.scrollLeft -=e.movementX;
    handleIcons();
}

const dragStop=()=>{
    imageCard.classList.remove('dragging');
    isDragging=false;
}

imageCard.addEventListener("mousedown", ()=> isDragging=true);
imageCard.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);


// about section animation on scroll
const boxes=document.querySelector(".box");
window.addEventListener("scroll", checkbox);
checkbox();

function checkbox(){
    const triggerBottom=window.innerHeight / 5 * 4;
    const boxTop=boxes.getBoundingClientRect().top;
    if(boxTop < triggerBottom){
            boxes.classList.add('show')
        }
        else{
            boxes.classList.remove('show');
        }
    }

    // Selling section animation on scroll
    const  Container=document.querySelector(".container");
    window.addEventListener('scroll', rightSwip);
    rightSwip();
    
    function rightSwip(){
        const rightBottom=window.innerHeight / 5 *4;
        const  rightTop=Container.getBoundingClientRect().top;
        if(rightTop < rightBottom){
            Container.classList.add("show");
        }
        else{
            Container.classList.remove("show");
        }
    }
    // Selling section animation on scroll exit



// service slider section starts
let frame= document.querySelector('.imageCard');
let iconbtn1=document.querySelector(".iconbtn1");
let iconbtn2=document.querySelector(".iconbtn2");

iconbtn1.addEventListener("click",()=>{
    frame.style.transform='translateX(0%)';
    iconbtn1.classList.add('color')
    iconbtn2.classList.remove('color')
})
iconbtn2.addEventListener("click",()=>{
    frame.style.transform='translateX(-49%)';
    iconbtn2.classList.add('color')
    iconbtn1.classList.remove('color')
})
// service slider section exit

// navbar active section starts
let navitem1=document.querySelector(".listitem1");
let navitem2=document.querySelector(".listitem2");
let navitem3=document.querySelector(".listitem3");
let navitem4=document.querySelector(".listitem4");
let navitem5=document.querySelector(".listitem5");
let navitem6=document.querySelector(".listitem6");

navitem1.addEventListener("click",()=>{
    navitem1.classList.add("listactive");
    navitem2.classList.remove("listactive");
    navitem3.classList.remove("listactive");
    navitem4.classList.remove("listactive");
    navitem5.classList.remove("listactive");
    navitem6.classList.remove("listactive");
})
navitem2.addEventListener("click",()=>{
    navitem2.classList.add("listactive");
    navitem1.classList.remove("listactive");
    navitem3.classList.remove("listactive");
    navitem4.classList.remove("listactive");
    navitem5.classList.remove("listactive");
    navitem6.classList.remove("listactive");
})
navitem3.addEventListener("click",()=>{
    navitem3.classList.add("listactive");
    navitem2.classList.remove("listactive");
    navitem1.classList.remove("listactive");
    navitem4.classList.remove("listactive");
    navitem5.classList.remove("listactive");
    navitem6.classList.remove("listactive");
})
navitem4.addEventListener("click",()=>{
    navitem4.classList.add("listactive");
    navitem2.classList.remove("listactive");
    navitem3.classList.remove("listactive");
    navitem1.classList.remove("listactive");
    navitem5.classList.remove("listactive");
    navitem6.classList.remove("listactive");
})
navitem5.addEventListener("click",()=>{
    navitem5.classList.add("listactive");
    navitem2.classList.remove("listactive");
    navitem3.classList.remove("listactive");
    navitem4.classList.remove("listactive");
    navitem1.classList.remove("listactive");
    navitem6.classList.remove("listactive");
})
navitem6.addEventListener("click",()=>{
    navitem6.classList.add("listactive");
    navitem2.classList.remove("listactive");
    navitem3.classList.remove("listactive");
    navitem4.classList.remove("listactive");
    navitem5.classList.remove("listactive");
    navitem1.classList.remove("listactive");
})
// navbar active section exit
    