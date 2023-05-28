window.addEventListener('DOMContentLoaded', (event) => {
  const shoppingList = [
    'Nrc',
    'bag',
    'toothbrush',
    'toothpaste',
    'soap',
    'shampoo',
    'roll on',
    'hair spray',
    'hair gel',
    'perfume',
    'sneaker to go out and one slipper to go near',
    'trousers',
    'shirts',
    'raincoat or umbrella',
    'socks',
    'charger/earphone/extension cable',
    'cup'
  ];

  const shoppingListElement = document.getElementById('shopping-list');
  const saveButton = document.getElementById('save-btn');
  
  shoppingList.forEach(item => {
    const listItem = document.createElement('li');

    const checkboxLabel = document.createElement('label');
    checkboxLabel.classList.add('checkbox-label');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'item';
    checkbox.value = item;

    checkboxLabel.appendChild(checkbox);
    checkboxLabel.appendChild(document.createTextNode(item));

    listItem.appendChild(checkboxLabel);
    shoppingListElement.appendChild(listItem);
  });

  saveButton.addEventListener('click', () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const selectedItems = Array.from(checkboxes).map(checkbox => checkbox.value);

    // You can customize the save functionality here.
    // For example, you can save the selected items to a server or local storage.
    console.log('Selected items:', selectedItems);
  });
});
