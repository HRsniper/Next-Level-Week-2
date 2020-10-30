document.querySelector('#add-time').addEventListener('click', () => {
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true);

    const fields = newFieldsContainer.querySelectorAll('input');

    fields.forEach((valueField) => {
        valueField.value = '';
    });

    document.querySelector('#schedule-items').appendChild(newFieldsContainer);
});