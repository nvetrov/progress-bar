$(document).ready(init);
// Начальные значения:
let one = 1;
let three = 3;
let seven = 7;

function init() {
    $("#one-progress-bar").width(one + '%');
    $("#three-progress-bar").width(three + '%');
    $("#seven-progress-bar").width(seven + '%');

}

document.getElementById('btn-one').onclick = function greenBtn() {
    let caption = document.getElementById("one-progress-bar");
    let oneValue = 1;
    $("#one-progress-bar").width(one + '%');
    one+=oneValue;
    caption.style.width = one + '%';
    caption.innerHTML = one * 1 + '%';
    // console.log(one);
};

document.getElementById('btn-three').onclick = function yellowBtn() {
    let caption = document.getElementById("three-progress-bar");
    let threeValue = 3;
    $("#three-progress-bar").width(three + '%');
    three += threeValue;
    caption.style.width = three + '%';
    caption.innerHTML = three * 1 + '%';
    // console.log(three);
};

document.getElementById('btn-seven').onclick = function redBtn() {
    let sevenValue = 7;
    let caption = document.getElementById("seven-progress-bar");
    // let A = $("#seven-progress-bar");
    $("#seven-progress-bar").width(seven + '%');
    seven += sevenValue;
    caption.style.width = seven + '%';
    caption.innerHTML = seven * 1 + '%';
    //console.log(seven);

};

// $(function  () {
//     // $("#one-progress-bar").width("1%");
//     // $("#three-progress-bar").width("3%");
//     // $("#seven-progress-bar").width("7%");
//     let one = 1;
//     let three = 3;
//     let seven_p = 7;
//
//     $('#btn-one,#btn-three,#btn-seven').click(function () {
//         if ($(this).attr('id') == 'btn-one')  {
//             $("#one-progress-bar").width(one * 1 + '%');
//             console.log('one')
//         } else if ($(this).attr('id') == 'btn-three') {
//             $("#three-progress-bar").width(three * 1 + '%');
//             console.log('btn-three')
//         } else if ($(this).attr('id') == 'btn-seven') {
//
//             $("#seven-progress-bar").width(Math.random() * 100 + '%');
//             console.log('btn-seven')
//
//         }
//     })
// });




