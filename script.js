$('h1').fadeOut("9000").fadeIn("9000");


Swal.fire({
  title: 'Ping Space its a game made by me, a mere beginner who likes challenges and your only duty is not to let the ball fall, no matter what division it is on.',
  text: 'Controls:PageUp ⬆️ and PageDown ⬇️ to control the horizontal bar.PageLeft ⬅️ and PageRight ➡️ to control the vertical bar.Good Game!',
  icon: 'info',
  confirmButtonText: 'Lets play!',
  confirmButtonColor:'blueviolet',
  allowOutsideClick:false
}).then((result) => {
if(result.isConfirmed){
  te5();
  te6();
  musicplay();
}
})

function musicplay(){
  let a=document.getElementById('music');
  a.play();
}
function te1(){
    $('#go').animate({right:"-=50px"},{duration:50}
    )};
function te2(){
    $('#go').animate({right:"+=50px"},{duration:50}
    )};

    function te3(){
      $('#go2').animate({top:"-=50px"},{duration:50}
      )};
  function te4(){
      $('#go2').animate({top:"+=50px"},{duration:50}
      )};
  
    function te5(){
      $('#go3').animate({top:"+=695px"},{duration:1500})};
  function te6(){
      $('#go4').animate({left:"+=910px"},{duration:1500}
      )};
      

  function capturarTeclado(event) {
    if (event.key === "ArrowRight") {
  
      te1();
    }

    if (event.key === "ArrowLeft") {
      
      te2();
    }

    if (event.key === "ArrowUp") {
      
      te3();
    }

    if (event.key === "ArrowDown") {
      
      te4();
    }
  }

  function update(){
    const go=document.getElementById('go3');
    const posição=go.getBoundingClientRect();
    const go2=document.getElementById('go');
    const posição2=go2.getBoundingClientRect();
    setTimeout(update,1000)    

    if(posição.bottom>840&&posição.x>=posição2.x-15&&posição.x<=(posição2.x+posição2.width)){
    function t7(){
      const aletaorio=Math.floor(Math.random()*(600-(-600))-600);
       const gerar=console.log(aletaorio);
       $('#go3').animate({top:"-=695px",left:aletaorio},{duration:1000})
       
    }
    t7();
    te5()
    }
    else if((posição.bottom>840&&posição.x<posição2.x-17)||(posição.bottom>840&&posição.x>(posição2.x+posição2.width))){
      Swal.fire({
        title: 'You lost :(.',
        text: 'Try Again and make better',
        icon: 'error',
        confirmButtonText: 'Lets play again!',
        confirmButtonColor:'blueviolet',
        allowOutsideClick:false
      }).then((result) => {
      if(result.isConfirmed){
        window.location.reload();
      }
      })
    }
      }
     update();

     function update2(){
      const go=document.getElementById('go4');
      const posição3=go.getBoundingClientRect();
      const go3=document.getElementById('go2');
      const posição4=go3.getBoundingClientRect();
      setTimeout(update2,1000)
      console.log(posição3.y-posição4.y)

      if(posição3.right>1800&&posição3.y>=(posição4.y-15)&&posição3.y<=(posição4.y+posição4.height)){
      function t8(){
        const aletaorio2=Math.floor(Math.random()*(600-(-100))-100);
         $('#go4').animate({left:"-=910px",top:aletaorio2},{duration:1000});
      }
      t8();
      te6();
      }
      else if((posição3.right>1800&&posição3.y<posição4.y-17)||(posição3.right>1800&&posição3.y>posição4.y+posição4.height)){
        Swal.fire({
          title: 'You lost :(.',
          text: 'Try Again and make better',
          icon: 'error',
          confirmButtonText: 'Lets play again!',
          confirmButtonColor:'blueviolet',
          allowOutsideClick:false
        }).then((result) => {
        if(result.isConfirmed){
          window.location.reload();
        }
        })
      }
      }
       update2();

      
     
  

    
  window.addEventListener("keydown",capturarTeclado);
 

 
  

  
  

