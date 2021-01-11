const btn=document.querySelector('button');
const data=document.getElementById('data');


btn.addEventListener('click',loadData);


function loadData()
{
  const xhr=new XMLHttpRequest();

  //xhr.open('get','data.txt',true);
  xhr.open('GET','https://api.github.com/users',true)
  xhr.onload=function(){
    if(this.status === 200)
    {
      //TEXT DATA

      // data.innerHTML=`
      // <h1>${this.responseText}</h1>
      // `

//JSON  ONE DATA

      // const data=JSON.parse(this.responseText);
      // const output=`
      // <ul>
      // <li>${data.id}</li>
      // <li>${data.name}</li>
      // </ul>
      // `
      // document.getElementById('data').innerHTML=output



      // JSON MANY DATA
      const data=JSON.parse(this.responseText);

      let output='';
      data.forEach(function(d){
       output += `
       <p> id :${d.id}</p>
       <p> name :${d.login}</p>
       <a target="_blank" href=${d.url}>Vist</a>

       `
      });

      document.getElementById('data').innerHTML=output;

    }
  }
  xhr.send();
}