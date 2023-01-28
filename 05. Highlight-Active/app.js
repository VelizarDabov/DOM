function focused() {
    const items = Array.from(document.querySelectorAll('input'));
    for (const item of items) {
        item.addEventListener('focus', () => {
            item.parentElement.className= 'focused'
        });
        item.addEventListener('blur', ()=> {
            item.parentElement.className = '';
        })
    }
}