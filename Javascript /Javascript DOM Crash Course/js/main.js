var form = document.querySelector('#addForm');
var itemList = document.querySelector('#items');
var filter = document.querySelector('#filter');

// Form submit event
form.addEventListener('submit', addItem);

// Delete Event
itemList.addEventListener('click',removeItem);

// Filter event
filter.addEventListener('keyup', filterItems);


// Add Item
function addItem(e){
    e.preventDefault();
    console.log(1);
    
    // Get Input Value
    var newItem = document.querySelector("#item").value;

    // Create new li element
    var li = document.createElement('li');

    // Add Class name
    li.className = 'list-group-item';
    
    // Add textnode with input value
    li.appendChild(document.createTextNode(newItem));

    // Create del button element
    var del = document.createElement('button');

    // Add Classes to del buton
    del.className = 'btn btn-danger btn-sm float-right delete';

    // Append text Node 
    del.appendChild(document.createTextNode('X'));

    // Append Button to li
    li.appendChild(del)

    // Append li to List
    itemList.appendChild(li);
}

//Remove Item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e){
    // Convert text to lowercase
    var text = e.target.value.toLowerCase();
    
    // Get lis
    var items = itemList.getElementsByTagName('li');

    // Converting to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });

}