const notesCon = document.querySelector(".notes");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box")



function showNotes(){
      notesCon.innerHTML = localStorage.getItem("notes");
}
showNotes();

// create notes box

createBtn.addEventListener('click', ()=>{
      let inputBox = document.createElement("div");
      let heading = document.createElement("div");
      let img = document.createElement("img");
      let write = document.createElement("div");


      inputBox.className = "input-box";
      heading.className = "heading";
      write.className = "write";
      heading.setAttribute("contenteditable", "false");
      write.setAttribute("contenteditable", "true");
      img.src = "image/delete.png";
      
      
     
      heading.innerHTML = `Write Notes`
      

      //  let st = "type your notes"
       inputBox.appendChild(heading).appendChild(img);
       inputBox.appendChild(write);
      //  inputBox.append(st);
      notesCon.appendChild(inputBox);

      // inputBox.addEventListener('keyup', setStorage);
      // inputBox.addEventListener('input', setStorage);

     
      
})

// delete container 
notesCon.addEventListener('click', (e)=>{
      if(e.target.tagName === "IMG"){
            e.target.parentElement.parentElement.remove();
            setStorage();
      }else if(e.target.tagName === "DIV"){
            notes = document.querySelectorAll(".input-box");
            notes.forEach(i =>{
                  i.onkeyup = function(){
                        setStorage();
                  }
            })

      }
})

function setStorage(){
      localStorage.setItem("notes", notesCon.innerHTML);
}

document.addEventListener("keydown", event =>{
      if(event.key === "Enter"){
            document.execCommand("insertLineBreak");
      }
})