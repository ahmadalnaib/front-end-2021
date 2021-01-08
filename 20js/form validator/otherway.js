const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email')
const password=document.getElementById('password')
const password2=document.getElementById('password2')


//functions 
// show input err msg
function showError(input,message)
{
const formControl=input.parentElement;
formControl.className='form-control error';
const small=formControl.querySelector('small');
small.innerText=message;
}

// show succss outline
function showSuccess(input)
{
  const formControl=input.parentElement;
  formControl.className='form-control success';
}

// email valid function

function checkEmail(input)
{
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
  if(re.test(input.value))
  {
    showSuccess(input)

  } else {
    showError(input,'Email is not valid');
  }

}


// check required fields

function checkRequired(inputs)
{
inputs.forEach((input)=>{
if(input.value.trim()=== '')
{
  showError(input,`${input.id} is required`);
} else {
  showSuccess(input)
}
})
}

//check input length
 function checkLength(input,min,max)
 {

  if(input.value.length < min)
  {
 showError(input, `${input.id} must be at least ${min} characters`);
 }
  else if(input.value.length > max)
 {
  showError(input, `${input.id} must be less than ${max} characters`);
 }
  else {
   showSuccess(input);
 }

 }


// match password

function checkPasswordMatch(input1,input2)
{
if(!input1.value !== input2.value)
showError(input2,'password not match')
}


// event listeners
form.addEventListener('submit',(e)=>{
 
  checkRequired([username,email,password,password2]);
  checkLength(username,3,15);
  checkLength(password,6,25);
  checkEmail(email);
  checkPasswordMatch(password,password2)

  
  
  
    e.preventDefault();
  })