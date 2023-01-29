function lockedProfile() {
Array.from(document.querySelectorAll('.profile button')).forEach((button) =>
button.addEventListener('click', onClick));

function onClick(event){
    const parent = event.target.parentElement;
    const unlocked = parent.querySelector('input[value="unlock"]');

    if(unlocked.checked){
        const hiddenDiv = parent.querySelector('div');
        hiddenDiv.style.display === 'block'
        ?(hiddenDiv.style.display = 'none') 
        :(hiddenDiv.style.display = 'block')

        event.target.textContent === 'Show more'
    ?event.target.textContent = 'Hide it'
    : event.target.textContent = 'Show more'
    }
}
}