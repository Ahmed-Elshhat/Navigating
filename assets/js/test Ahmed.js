let allLis = document.querySelectorAll('ul li');
let allDivs = document.querySelectorAll('.content div');
let ele11;
let ele33;


allLis.forEach((ele1) => {
  ele1.onclick = () => {
    ele11 = ele1;
    // Remove Active Class From All Elements
    allLis.forEach((ele2) => {
      ele2.classList.remove("active");
    })
    // Add Active Class To This Element
    ele1.classList.add("active");
    // Hide All Divs
    allDivs.forEach((ele3) => {
      if (ele3.innerHTML.split(" ").includes(ele11.innerHTML)) {
        ele3.style.display = 'block';
      } else {
        ele3.style.display = 'none';
      }
    });
  }
});

let a = [1, 2, 3]



// console.log(a.includes(1));



