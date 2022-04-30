let item = document.querySelectorAll(`.item`)

for (let i = 0; i < item.length; i++) {

    item[i].style.background = item[i].getAttribute('data-bg')

}

let block = document.querySelectorAll(`.block`)
for (let x = 0; x < block.length; x++) {
    block[x].addEventListener('click', function () {
        block[x].style.background = randomColor();
    });

}

function randomColor() {
    let random1 = Math.floor(Math.random() * 255 + 1)
    let random2 = Math.floor(Math.random() * 255 + 1)
    let random3 = Math.floor(Math.random() * 255 + 1)
    let random4 = Math.floor(Math.random() * 999 + 1)
    let color = `rgba(${random1}, ${random2}, ${random3}, 0.${random4})`
    return color
}

let gr_block = document.querySelectorAll(`.gr_block`)
for (let a = 0; a < gr_block.length; a++) {
    gr_block[a].addEventListener('click', function () {
        gr_block[a].style.background = randomGradientColor();
    })

}

function randomGradientColor() {
    let gradiensColorRgba1 = Math.floor(Math.random() * 255 + 1)
    let gradiensColorRgba2 = Math.floor(Math.random() * 255 + 1)
    let gradiensColorRgba3 = Math.floor(Math.random() * 255 + 1)
    let gradiensColorRgba4 = Math.floor(Math.random() * 999 + 1)
    let gradiensColorRgba5 = Math.floor(Math.random() * 255 + 1)
    let gradiensColorRgba6 = Math.floor(Math.random() * 255 + 1)
    let gradiensColorRgba7 = Math.floor(Math.random() * 255 + 1)
    let gradiensColorRgba8 = Math.floor(Math.random() * 999 + 1)
    let gradiensdegree = Math.floor(Math.random() * 100 + 1)
    let gradiensdegree1 = Math.floor(Math.random() * 100 + 1)
    let gradiensdegree2 = Math.floor(Math.random() * 100 + 1)
    let gradiensdegree3 = Math.floor(Math.random() * 100 + 1)

    let gradientColor = `linear-gradient(${gradiensdegree}deg, rgba(${gradiensColorRgba1}, ${gradiensColorRgba2}, ${gradiensColorRgba3}, 0.${gradiensColorRgba4}) ${gradiensdegree1}%, rgba(${gradiensColorRgba5}, ${gradiensColorRgba6}, ${gradiensColorRgba7}, 0.${gradiensColorRgba8}) ${gradiensdegree2}%)`
    /* linear-gradient(90deg, rgba(2,0,36,1) 0deg, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%); */
    /* linear-gradient(74deg, rgba(195, 241, 59, 0.672) 8deg, rgba(193, 155, 53, 0.6) 44deg, rgba(53, 195, 672, 0.59) 9deg)*/
    return gradientColor
}
console.log(randomGradientColor());