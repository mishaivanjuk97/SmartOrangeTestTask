const firstNumber = document.querySelector('.firstNumber');
const arrows = document.querySelectorAll('.arrow');
const projectName = document.querySelector('.showcase-name');
const projectImg = document.querySelector('.showcase-img');
const listItems = document.querySelectorAll('.list-item');
const sections = document.querySelectorAll('section');
const openBtn = document.querySelector('#bars');
const menuLinks = document.querySelector('.mobile-list');
const links = document.querySelectorAll('#link');


document.addEventListener('scroll', showSections);

showSections();

function showSections() {
   const trigerPoint = window.innerHeight / 5 * 4;

   sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if(sectionTop < trigerPoint){
         section.classList.add('show');
      }
   })
}

listItems.forEach(item => {
   item.addEventListener('click', () => {
      listItems.forEach(item => {
         item.classList.remove('active');
      })
      if(!item.classList.contains('active')) {
         item.classList.add('active');
      }

   })
})

arrows.forEach(arrow => {
   arrow.addEventListener('click', () => {
      if(firstNumber.textContent === '01') {
         firstNumber.textContent = '02';
         projectName.textContent = 'village';
         projectImg.style.backgroundImage = `url('../img/pexels-felipepelaquim-1895031.jpg')`;
      } else {
         firstNumber.textContent = '01';
         projectName.textContent = 'home';
         projectImg.style.backgroundImage = `url('../img/Rectangle\ 6.png')`;
      }
   })
})

openBtn.addEventListener('click', () => {
   if(openBtn.className === 'fas fa-bars') {
      openBtn.className = 'fas fa-times';
   } else {
      openBtn.className = 'fas fa-bars';
   }
   
   menuLinks.classList.toggle('show');
});

links.forEach(link => link.addEventListener('click', () => {
   menuLinks.classList.remove('show');
   openBtn.className = 'fas fa-bars';
}))