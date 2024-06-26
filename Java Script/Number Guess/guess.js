const butt = document.querySelector('.check');
const gueii = Math.floor(Math.random() * 20) + 1;
butt.addEventListener('click', () => {
    let ansa = document.querySelector('#ans');
    let f = Number(document.querySelector(".guess").value);
 
    if (f > gueii) {
        ansa.textContent = "Bit ahead!!";
    } else if (f < gueii) {
        ansa.textContent = "Bit behind!";
    } else {
        ansa.textContent = "You've got that, the number was " + f;
    }
});
