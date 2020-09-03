// DOM 1 - Examine The Document Object

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// document.title = 123;

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);

// console.log(document.all[8]);

// document.all[8].textContent = "Hello";

// console.log(document.forms[0]);
// console.log(document.links);

// Selectors
// getElementById
//console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// console.log(headerTitle.textContent); // Displays the whole content
// console.log(headerTitle.innerText); // Removes other styled elements
// console.log(headerTitle.innerHTML); // Adds to the inner Html5 element which is being accessed

// header.style.borderBottom = "solid 3px black";

// getElementsByClassName
// var list = document.getElementsByClassName('item');
// console.log(list);
// console.log(list[1]);
// list[1].textContent = "Hello 2";
// list[1].style.fontWeight = 'bold';
// list[1].style.background = "yellow";

// for(var i = 0; i < list.length ; i++){
//     list[i].style.background = "#ccc"
// }

// getElementsByTagName
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "Hello 2";
// li[1].style.fontWeight = 'bold';
// li[1].style.background = "yellow";

// for(var i = 0; i < li.length ; i++){
//     li[i].style.background = "#ccc"
// }

// querySelector
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.placeholder = "Item";

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "Send";

// var items = document.querySelector('.item');
// items.style.color = 'red';

// var lastItem = document.querySelector('.item:last-child');
// lastItem.style.color = 'blue';

// var SecondItem = document.querySelector('.item:nth-child(2)');
// SecondItem.style.color = 'coral';

// querySelectorAll
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Add Items';

// var odd =  document.querySelectorAll('li:nth-child(odd)');
// odd.forEach(function(item){item.style.background = '#ccc';});

// var even = document.querySelectorAll('li:nth-child(even)');
// even.forEach(function(item){
//     item.style.background = "#000";
//     item.style.color = "#fff"
// });



// DOM 2 - Traversing the DOM

//var itemList = document.querySelector('.items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.background = "#ccc";
// console.log(itemList.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.background = "#ccc";
// console.log(itemList.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);

// children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.background = "yellow";

// firstChild
// console.log(itemList.firstChild);

// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'DumbAss';

// lastChild
// console.log(itemList.lastChild);

// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemList.nextSibling);

// nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);

// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.previousElementSibling.style.color = "green";

// createElement

// Create a div
// var newDiv = document.createElement('div');

// Add Class
// newDiv.className = 'hello';

// Add ID
// newDiv.id = "hello1";

// Add attr
// newDiv.setAttribute('title','Hello Div');

// Create Text node
// var newDivText = document.createTextNode('Hello World');

// Add Text to Div
// newDiv.appendChild(newDivText);

// Location
// var container = document.querySelector('.container');
// var form = document.querySelector('#my-form');

// Changing style
// newDiv.style.fontSize = '50px';
// newDiv.style.fontWeight = 'bold';

// console.log(newDiv);
// Insert newDiv
// container.insertBefore(newDiv,form);

// DOM 3 - Event Lisener

// var button = document.getElementById('button').addEventListener('click', function(){
//     console.log(123);
// });
// var button = document.getElementById('button').addEventListener('click', buttonClick);
// function buttonClick(e){
    //console.log('Button clicked');
    // document.getElementById('header-title').textContent = "Changed";
    // document.querySelector('.container').style.background = "#ccc";
    // console.log(e);
    // console.error(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);
    // var output = document.getElementById('output');
    // output.innerHTML = '<h3>'+ e.target.id +'</h3>';
    
    // position from the top of the window
    // console.log(e.clientX);
    // console.log(e.clientY);

    // Mouse position of the element
    // console.log(e.offsetX);
    // console.log(e.offsetY);

    // IF using shortcuts
    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);
// }

// Mouse actions
// var button = document.getElementById('button');
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// var box = document.getElementById('box');
// box.addEventListener("mouseenter", runEvent); // Going into parent element
// box.addEventListener('mouseleave',runEvent); // Leaving parent element

// box.addEventListener('mouseover', runEvent); // Going into parent and child element
// box.addEventListener('mouseout', runEvent); // Leaving both Parent and Child element
// box.addEventListener('mousemove', runEvent);

// var output = document.getElementById('output');

// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress',runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// var select = document.querySelector('select');
// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);
// form.addEventListener('submit', runEvent);

//  function runEvent(e){
    //  e.preventDefault();
    // console.log('EVENT TYPE: ' + e.type);
    // console.log(e.target.value);
    //console.log(e.target.value);
    //document.getElementById('output').innerHTML =  `<h3>${e.target.value}</h3>`;
    // output.innerHTML = `<h3>MouseX: ${e.offsetX}</h3><h3>MouseY: ${e.offsetY}</h3>`;
    // box.style.background = `rgb(${e.offsetX},${e.offsetY},40)`;
    // document.body.style.background = `rgb(${e.offsetX},${e.offsetY},40)`;
//  };
