
home.onclick=function(){
    home.style.color='blue'
    Projekt.style.color='black'
    About.style.color='black'
    box3.style.display='none'
    box2.style.display='block'
    box4.style.display='none'
}
Projekt.onclick=function(){
    Projekt.style.color='blue'
    home.style.color='black'
    About.style.color='black'
    box3.style.display='block'
    box2.style.display='none'
    box4.style.display='none'
}
About.onclick=function(){
    About.style.color='blue'
    home.style.color='black'
    Projekt.style.color='black'
    box3.style.display='none'
    box2.style.display='none'
    box4.style.display='block'
}
button1.onmousemove=function(){
    button1.style.background='black'
    button1.style.color='white'
}
button1.onmouseout=function(){
    button1.style.background='white'
    button1.style.color='black'

}
button1.onclick=function(){
   let start = Date.now();

   let timer = setInterval(function() {
     let timePassed = Date.now() - start;

     skilHtml.style.width = timePassed / 4 + 'px';
     OrangeSkillHtml.style.width = timePassed / 5 + 'px';
     OrangeSkillHtml.style.display='block'

     skilCSS.style.width = timePassed / 4 + 'px';
     OrangeSkillCSS.style.width = timePassed / 6 + 'px';
     OrangeSkillCSS.style.display='block'

     skilJS.style.width = timePassed / 4 + 'px';
     OrangeSkillJS.style.width = timePassed / 8 + 'px';
     OrangeSkillJS.style.display='block'

     skillNodeJS.style.width = timePassed / 4 + 'px';
     OrangeSkillNodeJS.style.width = timePassed / 11 + 'px';
     OrangeSkillNodeJS.style.display='block'
     if (timePassed > 2000) clearInterval(timer);

   }, 20);
   
 }
git.onmousemove=function(){
git.style.top='400px'
}
git.onmouseout=function(){
  git.style.top='410px'
 }
 inst.onmousemove=function(){
 inst.style.top='400px'
}
inst.onmouseout=function(){
inst.style.top='410px'
            }
 face.onmousemove=function(){
 face.style.top='400px'
                }
 face.onmouseout=function(){
   face.style.top='410px'
                    }
 ButtonCard1.onmousemove=function(){
    ButtonCard1.style.top='455px'
 }
 ButtonCard1.onmouseout=function(){
    ButtonCard1.style.top='460px'
 }   
 ButtonCard2.onmousemove=function(){
    ButtonCard2.style.top='455px'
 }
 ButtonCard2.onmouseout=function(){
    ButtonCard2.style.top='460px'
 }  
 ButtonCard3.onmousemove=function(){
    ButtonCard3.style.top='455px'
 }
 ButtonCard3.onmouseout=function(){
    ButtonCard3.style.top='460px'
 }  
 ButtonCard4.onmousemove=function(){
    ButtonCard4.style.top='455px'
 }
 ButtonCard4.onmouseout=function(){
    ButtonCard4.style.top='460px'
 }    
