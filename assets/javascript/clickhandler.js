const color_box = document.querySelector("#color_box");

const gray_button = document.querySelector("#gray_button");
gray_button.addEventListener("click", function () {
    color_box.className = "gray"
})

const blue_button = document.querySelector("#blue_button")
blue_button.addEventListener("click", function () {
    color_box.className = "blue"
})
const pink_button = document.querySelector("#pink_button")
pink_button.addEventListener("click", function () {
    color_box.className = "pink"
})

let count = 0
const countspan = document.querySelector('#countspan')
const counter_button = document.querySelector('#counter_button')
counter_button.addEventListener('click', function () {
    console.log('counter_button clicked')
    // let newCount = parseInt(countspan.innerHTML) + 1
    // countspan.innerHTML = newCount
    count = count + 1
    countspan.innerText = count

    /* TODO 2
       *
       * Fill in this function so that it increments
       * (adds one to) the variable named count,
       * then updates the inner text of "countspan"
       * to show the current value of "count".
       */
})

const even_or_odd_button = document.querySelector('#even_or_odd_button')
even_or_odd_button.addEventListener('click', function () {
    console.log('even_or_odd_button clicked')

    if (count % 2 === 0) {
        alert('Count is even')
    } else {
        alert('Count is odd')
    }
})
/* TODO 3
    *
    * Fill in this function so that it shows an
    * alert dialog stating whether the count variable
    * (from part 2, above) is even or odd.
    */