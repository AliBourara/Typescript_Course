const form = document.querySelector("form")!;
const addrtessInput = document.getElementById('address')! as HTMLInputElement;

function searchAddresssHandler(event: Event) {
  event.preventDefault();
  const enterdAddress = addrtessInput.value; 


  //send this to Gooogle's API ! 
}
form.addEventListener("submit", searchAddresssHandler);
