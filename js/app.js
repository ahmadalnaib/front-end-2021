const btn=document.querySelector('button');
const data=document.getElementById('data');


btn.addEventListener('click',loadData);


function loadData()
{
  const xhr=new XMLHttpRequest();

  xhr.open('get','data.txt',true);
  xhr.onload=function(){
    if(this.status === 200)
    {
      data.innerHTML=`
      <h1>${this.responseText}</h1>
      `
    }
  }
  xhr.send();
}