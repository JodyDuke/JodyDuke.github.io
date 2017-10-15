let langs = ['Node', 'NPM', 'React', 'HTML5', "CSS3", 'SCSS', 'Git', 'Javascript']
let domNode = document.getElementById('text');
let count = 0

function textChange(){
  domNode.innerHTML = langs[count];
  count++
  
  if(count === 8){
    count = 0;
  }    
}

setInterval(textChange, 2000);