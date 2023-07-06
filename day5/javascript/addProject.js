
const projectName = document.querySelector("#project-name");
const startDate = document.querySelector("#start-date");
const endDate = document.querySelector("#end-date");
const description = document.querySelector("#description");
const file = document.querySelector("#input-blog-image");

const form = document.querySelector("#form");


let blogData = [];

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    
    

    const valueProjectName = projectName.value;
    const valueStardate = startDate.value;
    const valueEndDate = endDate.value;
    const valueDescription = description.value;
    let files = file.files;
    
       const iconNodeJS = '<img src="./img/myProject/node-js.svg" alt="nodejs">';
       const iconNextJS = '<img src="./img/myProject/nextjs.png" alt="nextjs">';
       const iconReactJS = '<img src="./img/myProject/react.svg" alt="reactjs">';
       const icontTypescript = '<img src="./img/myProject/typescript.png" alt="typescript">';
    
       // pengambilan data dari checkbox
       let checkNodeJS = document.querySelector("#nodejs").checked ? iconNodeJS : "";
       let checkNextJS = document.querySelector("#nextjs").checked ? iconNextJS : "";
       let checkReactJS = document.querySelector("#reactjs").checked ? iconReactJS : "";
       let checkTypescript = document.querySelector("#typescript").checked ? icontTypescript : "";
   
    
    if (files[0] === undefined) {
        alert("Image insert !!");
    }

    files = URL.createObjectURL(files[0]);



   
    
   
    
    let schema = {
        valueProjectName,
        valueStardate,
        valueEndDate,
        valueDescription,
        files,
    }
    
    
    
    let parent = document.querySelector("#wrapper-myproject");
    let h1 = document.createElement("li");
    
 
    h1.innerHTML = `<div class="item-card">
    <img src="${files}" alt="">
    <div class="text">
        <h3>${valueProjectName}</h3>
        <p>${valueDescription}</p>
    </div>
    <div class="wrapper-checkbox">
        <div class="checkbox-item">
        ${checkNodeJS}
        ${checkNextJS}
        ${checkReactJS}
        ${checkTypescript}
        </div>
    </div>
    <div class="option">
        <button>Edit</button>
        <button>Delete</button>
    </div>

    <a class="detail-project" href="./detailProject.html">detail project</a>
    <p class="time-left">${convertDate(valueEndDate,valueStardate)}</p>
 </div>`
 

    parent.append(h1);

   console.log(schema);
    
   
    
   
})


function convertDate(EndTime,StartTime) {
    const timeEnd = new Date(EndTime).getTime();

    const timeStart = new Date(StartTime).getTime();

    let timeDistance = timeEnd - timeStart;

    let distanceSecond = Math.floor(timeDistance / 1000);
    let distanceMinute = Math.floor(distanceSecond / 60);
    let distanceHour = Math.floor(distanceMinute / 60);
    let distanceDay = Math.floor(distanceHour / 24 );
    let distanceWeek = Math.floor(distanceDay / 7);
    let distanceMonth = Math.floor(distanceDay /30);
    let distanceYear = Math.floor(distanceMonth / 12);

    console.log(distanceWeek);
    
    if (distanceHour >= 24 && distanceDay <= 7) {
        return `${distanceDay} day of durations`
    }else if(distanceDay >= 7 && distanceWeek <= 4) {
        return `${distanceWeek} Weeks of durations`
    }else if (distanceWeek >= 4 && distanceMonth <= 12) {
        return `${distanceMonth} months of durations`
    }else if (distanceMonth >= 12) {
        return`${distanceYear} years of durations `
    }
    
    

}