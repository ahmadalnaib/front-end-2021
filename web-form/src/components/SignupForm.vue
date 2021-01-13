<template>
  <form action="">
    <label >Email</label>
    <input type="email" required v-model="email">

    <label >Password</label>
    <input type="password" required v-model="password">

    <label >Role:</label>
    <select v-model="role">
      <option selected value="developer">developer</option>
      <option value="designer">designer</option>
    </select>

    <div class="terms">
      <input type="checkbox" required v-model="terms">
      <label>Accept terms and condition</label> 
    </div>

    <div>
      <input type="checkbox" value="ahmed" v-model="names">
      <label for="">ahmed</label>
    </div>
     <div>
      <input type="checkbox" value="ato" v-model="names">
      <label for="">ato</label>
    </div>
     <div>
      <input type="checkbox" value="vieri" v-model="names">
      <label for="">vieri</label>
    </div>
  </form>

  <p> EMAIL: {{email}}</p>
  <p>Password: {{password}}</p>
  <p>Role: {{role}}</p>
  <p>Terms: {{terms}}</p>
  <ul>
    <li>{{names}}</li>
  </ul>
</template>

<script>
export default {
data(){
  return {
 email:'',
 password:'',
 role:'',
 terms:false,
 names:[],


  }
}
}
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: #fff;
  text-align: left ;
  padding: 40px;
  border-radius: 10px;

}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 1.6rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;

}

input,select{
  display: block;
  padding: 10px 6px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

input:focus{
  outline-color: aqua;
}

input[type="checkbox"]
{
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
</style>