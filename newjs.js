 //feature taps js code start
 const item = document.querySelectorAll('.feture-taps li');
        const content = document.querySelectorAll('.feture-content');
        for(let i=0;i<3;i++){
        item[i].addEventListener('click',()=>{
             
            for(let j=0 ;j<3 ;j++){
                if(item[j].classList.contains('active')){
                item[j].classList.remove('active');
                content[j].classList.remove('clicked');
            }}
          
                content[i].classList.add('clicked');
                item[i].classList.add('active');
    
            });
        }
//feature taps code end   
//hamburg menue 
const hamBtn = document.querySelector('.ham');
const exitBtn = document.querySelector('.exit');
const items = document.querySelector('nav ul');

hamBtn.addEventListener('click',()=>{

items.style.display='block';


});
exitBtn.addEventListener('click',()=>{
    
    items.style.display='none';
    
    
    });
    