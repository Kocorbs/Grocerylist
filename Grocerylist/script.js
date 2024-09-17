document.addEventListener('DOMContentLoaded', () => {
    const itemForm = document.getElementById('itemForm');
    const itemsContainer = document.getElementById('itemsContainer');
    

    itemForm.addEventListener('submit', addItem);

    function addItem(event) {
        event.preventDefault();

        const productName = document.getElementById('productName').value;
        const brand = document.getElementById('brand').value;
        const price = document.getElementById('price').value;
        const weightVolume = document.getElementById('weightVolume').value;
        const quantity = document.getElementById('quantity').value;
        const store = document.getElementById('store').value;
        const category = document.getElementById('category').value;

        const item = {
            productName,
            brand,
            price,
            weightVolume,
            quantity,
            store,
            category
        };

        renderNewItem(item);
        itemForm.reset();
    }

    function renderNewItem(item) {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';

        itemDiv.innerHTML = `
            <div class="item-details">
                <div>
                    <strong>${item.productName}</strong>
                    <p>Brand: ${item.brand}</p>
                    <p>Price: ${item.price}</p>
                    <p>Weight/Volume: ${item.weightVolume}</p>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Store: ${item.store}</p>
                    <p>Category: ${item.category}</p>
                </div>
                <div class="item-actions">
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                </div>
            </div>
        `;

        itemsContainer.appendChild(itemDiv);

        const editButton = itemDiv.querySelector('.edit');
        const deleteButton = itemDiv.querySelector('.delete');

        editButton.addEventListener('click', () => editItem(item, itemDiv));
        deleteButton.addEventListener('click', () => deleteItem(itemDiv));
    }

    function editItem(item, itemDiv) {
        document.getElementById('productName').value = item.productName;
        document.getElementById('brand').value = item.brand;
        document.getElementById('price').value = item.price;
        document.getElementById('weightVolume').value = item.weightVolume;
        document.getElementById('quantity').value = item.quantity;
        document.getElementById('store').value = item.store;
        document.getElementById('category').value = item.category;

        itemsContainer.removeChild(itemDiv);
    }

    function deleteItem(itemDiv) {
        itemsContainer.removeChild(itemDiv);
    }
});
