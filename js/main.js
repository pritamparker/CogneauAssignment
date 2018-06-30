let items = ["Session Duration", "Bounce Rate", "New Users", "Number of Session", "Page", "Session", "Users", "Apple", "Ball", "Cat"];
let arr = [];
let searchItems = [];
// render data at the time of page load
const _renderData = () => {
    let txt = '';
    txt = "<ul>";
    for (let i = 0; i < items.length; i++) {
        txt += "<li onclick=selectItem(" + i + ")>" + items[i] + "</li>";
    }
    txt += "</ul>";
    document.getElementById("render").innerHTML = txt;
}
// type and search 
const _typeAndSearch = () => {
    let val = document.querySelectorAll('input[type=text]')[0].value;
    console.log(val);
    searchItems = matchItems(val);
    let txt = '';
    txt = "<ul>";
    for (let i = 0; i < searchItems.length; i++) {
        txt += "<li onclick=selectFilteredItem(" + i + ")>" + searchItems[i] + "</li>";
    }
    txt += "</ul>";
    document.getElementById("render").innerHTML = txt;
}

const matchItems = (input) => {
    var reg = new RegExp(input.split('').join('\\w*').replace(/\W/, ""), 'i');
    return items.filter(function (items) {
        if (items.match(reg)) {
            return items;
        }
    });
}

const selectItem = (item) => {
    if (arr.includes(items[item])) {
        // return nothing;
    } else {
        arr.push(items[item])
    }
    let sel = '';
    if (arr.length == 1) {
        sel += arr[0] + " vs </p>";
    } else {
        let size = arr.length - 1;
        sel += arr[0] + "+" + size + " vs </p>";
    }
    document.getElementById("selectedItem").innerHTML = sel;
}

const selectFilteredItem = (item) => {
    if (arr.includes(searchItems[item])) {
        // return nothing;
    } else {
        arr.push(searchItems[item])
    }
    let sel = '';
    if (arr.length == 1) {
        sel += arr[0] + " vs </p>";
    } else {
        let size = arr.length - 1;
        sel += arr[0] + "+" + size + " vs </p>";
    }
    document.getElementById("selectedItem").innerHTML = sel;
}