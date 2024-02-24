/* filter product on the button click */
// const searchText = document.querySelector("#searchText");
// const filterProduct = document.querySelector("#filterProduct");
// const boxes = document.querySelectorAll(".box");

// filterProduct.addEventListener("click", (e) => {
//     const searchText = document.querySelector("#searchText").value.toLowerCase().trim();

//     boxes.forEach((box) => {
//         const data = box.dataset.item;
//         if(data.includes(searchText)){
//             box.style.display="block";
//         } else {
//             box.style.display="none";
//         }
//     });
// });

/* filter product on the input keyup */
const searchText = document.querySelector("#searchText");
// const filterProduct = document.querySelector("#filterProduct");
const boxes = document.querySelectorAll(".box");

searchText.addEventListener("keyup", (e) => {
    searchTextVal = e.target.value.toLowerCase().trim();

    boxes.forEach((box) => {
        const data = box.dataset.item;
        if(data.includes(searchTextVal)){
            box.style.display="block";
        } else {
            box.style.display="none";
        }
    });
});