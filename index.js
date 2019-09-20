$(function () {
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        let userInput = $('#shopping-list-entry').val();
        $('#shopping-list-entry').val('');
        let newListItem = `<li>
        <span class="shopping-item">${userInput}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
        </li>`;
        $('.shopping-list').append(newListItem);
    });
    $('.shopping-list').on('click', '.shopping-item-delete', 
    function(event) {
        $(this).closest('li').remove();
    });
    $('.shopping-list').on('click', '.shopping-item-toggle', 
    function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
        console.log('check')
        let toggleCheck = $(this).find('span').text()
        $(this).find('span').text(toggleCheck === 'uncheck' ? 'check': 'uncheck');
    });
});


