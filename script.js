const btnsParent = document.getElementById('btn-parent')
btnsParent.addEventListener('click' , handler)

function handler(E){
    if( E.target !== E.currenttarget){
        let clickeditem = E.target.id;
        document.getElementById('body').style.background = clickeditem;
    }
    E.stoppropagation();
}
