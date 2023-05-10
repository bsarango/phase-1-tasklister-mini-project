document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //Cancel the default refresh when the submit button is clicked
  (document.querySelector('form')).addEventListener('submit', (e) => {
    e.preventDefault() //Method that prevents the default refresh event that happens when you submit a form
    const input = document.getElementById("new-task-description")  //Set variable to get the input value by ID
    //console.log(input.value)
    buildEvents(input.value)
  }) 
});


function buildEvents(task){
  const p = document.createElement('p')     //Creating p of todo task
  const btn = document.createElement('button')  //Creating button for delete event
  btn.textContent = "o"                     //Text of delete button
  btn.addEventListener('click',(e)=>{   //eventListener to remove a part of the list if the button is pressed
    e.target.parentNode.remove()
  })
  p.textContent = `${task} `
  p.appendChild(btn)              //Append button to the p todo task
  //console.log(p)
  document.querySelector('#tasks').appendChild(p) //Finally append p to the list box/space
}

