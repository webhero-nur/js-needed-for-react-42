const addToLS = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    //
    if (id && value) {
        localStorage.setItem(id, value);
    }
    idInput.value = '';
    valueInput.value = '';

}

const setAndGetFromLS = () => {
    // 
    const pen = {
        price: 55,
        color: 'black'
    }
    // to store an object in Local Storage (LS)
    localStorage.setItem('pen', JSON.stringify(pen));
    // to get stored object from LS
    localStorage.getItem('pen', JSON.parse(pen));
}