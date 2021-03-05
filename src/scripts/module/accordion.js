function accordion() {
  let title = document.querySelectorAll(".accordion-title");

  for(let i = 0; i < title.length; i++){
    title[i].addEventListener("click", function(){
      let result = this.parentElement;
      result.classList.toggle("accordion-active");
    })
  }
}

export default accordion;
