<template>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
 <div class="boxes " style="margin-top: 20px;">
  <a class="box" href="">
    <h3>This is the box</h3>
    <i class="fa fa-hand-rock-o"></i>
    <p>This is some content for the box</p>
  </a>

  <a class="box" href="">
    <h3>This is the box</h3>
    <i class="fa fa-hand-spock-o"></i>
    <p>This is some content for the box</p>
  </a>

  <a class="box" href="">
    <h3>This is the box</h3>
    <i class="fa fa-hand-paper-o"></i>
    <p>This is some content for the box</p>
  </a>
  <div class="boxes">
</div>
</div>
</template>

<script setup>

</script>

<style scoped>
    @import url(https://fonts.googleapis.com/css?family=Lato:400,700);

body{
  background-color:#202020;
  font-family:Lato;
}
.boxes {
  text-align:center;
  position:relative;
  width:1260px;
  margin:0 auto;
  
  .box{
    display:block;
    float:left;
    position:relative;
    width:400px;
    height:350px;
    text-align:center;
    border-collapse:collapse;
    text-decoration:none;
    color: black;
    margin:0 10px;
    
    h3{
      transition: all 0.5s;  
      padding-top:50px; 
      padding-bottom:60px; margin:0;
      font-size:2em;
      text-transform:uppercase;
    }
    
    i {
      transition: all 0.4s;  
      font-size:4em;
    }
    
    p{
      transition: all 0.5s;  
      margin-top:70px;
    }
    
    &:before{
      transition: all 0.4s;  
      position:absolute;
      content:"";
      width:100%;
      height:50%;
      left:50%;
      margin-left:-50%;
      top:25%;
      border-color:rgba(200,200,200,0);
      border-style:solid;
      border-width:0 1px;
    }
    
    &:after{
      transition: all 0.4s;  
      position:absolute;
      content:"";
      width:50%;
      height:100%;
      left:50%;
      margin-left:-25%;
      top:0;
      border-color:rgba(200,200,200,0);
      border-style:solid;
      border-width:1px 0;
    }
    
    &:hover{
      color:#4099FF;
      
       h3{
        padding-top:80px;
        padding-bottom:30px;
      }
      
      p{
        margin-top:30px;
      }
      
      &:after{
        width:402px;
        margin-left:-50%;
        border-color:rgba(90,90,90,1);
      }
      
      &:before{
        height:352px;
        top:0%;
        border-color:rgba(90,90,90,1);
      }
    }
  }
}

</style>