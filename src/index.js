import './less/index.less'
// load event 1
window.onload = function(evt){
    const heading = document.querySelector('h1');
    console.log(`init ${evt.type}`)
    heading.textContent = "LET'S BEGIN!"

   // copy event 2
    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
        .then(text => {
            heading.textContent += text
        })
    })
    // click event 3
    document.body.addEventListener('click', evt => {
        evt.target.classList.toggle('mirror')
    })
    // dbl click event 4
    document.body.addEventListener('dblclick', evt => {
        evt.target.outerHTML = ''
    })
    // KEYDOWN EVENT 5
    window.addEventListener('keydown', evt => {
        if(evt.key == 6){
            document.body.innerHTML = '<h1>YOU RAN ORDER 66</h1>'
        }
    })
// MOUSEMOVE EVENT 6
    document.body.addEventListener('mousemove', evt => {
        const { clientX, clientY} = evt
       // console.log(`mouse is at ${clientX} and ${clientY}`)
    })
    // mouseEnter EVENT 7
    // MOUSELEAVE EVENT 8
    const destinations = document.querySelectorAll('.destination')
    for(let destination of destinations){
        destination.addEventListener('mouseenter', () => {
            destination.style.fontWeight = 'bold'
        })
        destination.addEventListener('mouseleave', () => {
            destination.style.fontWeight = 'initial'
        })
    }

    }

