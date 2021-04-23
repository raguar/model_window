'use strict';

const model = document.querySelector('.model');

const overlay = document.querySelector('.overlay');

const closeModel = document.querySelector('.close-model');

const showModel = document.querySelectorAll('.show-model');

 const btnShowModel =  function () {
              model.classList.remove('hidden')
              overlay.classList.remove('hidden')
       };


const btnCloseModel =  function(){
              model.classList.add('hidden')
              overlay.classList.add('hidden')
       };


for (let index = 0; index < showModel.length; index++) {
      
       showModel[index].addEventListener('click',btnShowModel)

       closeModel.addEventListener('click',btnCloseModel)
       
       overlay.addEventListener('click', btnCloseModel)

       document.addEventListener('keydown',function (e) {

              if (e.key === 'Escape' && !model.classList.contains('hidden')) {
                     btnCloseModel();
              }
       })
}

