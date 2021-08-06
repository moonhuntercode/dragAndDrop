const caja1=document.querySelector('#caja1');
// caja1.addEventListener('dragstart',e=>{
//     console.log("Drag Start");
// });
// caja1.addEventListener('dragend',e=>{
//     console.log("Drag End");
// });
// caja1.addEventListener('drag',e=>{
//     console.log("Drag");
// });

const contenedor0=document.querySelector('#contenedor2');
contenedor0.addEventListener('dragenter',e=>{
    console.log('drag Enter');
});
contenedor0.addEventListener('dragleave',e=>{
    console.log('drag leave');
});
contenedor0.addEventListener('dragover',e=>{
    e.preventDefault();
    console.log('drag over');
});
contenedor0.addEventListener('drop',e=>{
   
    console.log('drop');
    contenedor0.appendChild(caja1);
});