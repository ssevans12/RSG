function main() {
   
    const growMe = document.getElementById('grow-me');
    growMe.classList.add("big");

   
    const shrinkMe = document.getElementById('shrink-me');
    shrinkMe.classList.remove('big');
  
   
    const lis = document.querySelectorAll('li');
            for (i = 0; i < lis.length; i++){
            console.log(lis[i].innerHTML);
             };
   
    const brokenLink = document.querySelector('.link');
    brokenLink.setAttribute("href", "https://www.example.com");
    brokenLink.innerText = "somewhere";
   
    const hideMe = document.getElementById('hide-me');
    hideMe.style.display = 'none';
  
    const showMe = document.getElementById('show-me');
    showMe.style.display = "block";
   
    const inputName =  document.getElementById('name').value;
        const h1 = document.querySelector('h1');
       
        h1.innerText = `Welcome ${inputName}!`;
    };