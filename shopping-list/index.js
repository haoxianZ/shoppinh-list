$(function(){
    //this is for the input box //
    $('#js-shopping-list-form').submit( event => {
        event.preventDefault();
        var addedItem = $(event.currentTarget).find('input[name="shopping-list-entry"]').val();
        $("ul").append(
            `<li><span class="shopping-item">${addedItem}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`
            )
        
    })
    // now for the complete click//
    $('ul').on('click',".shopping-item-toggle", function(event){
        var compelteItem = $(this).parent().parent().find('.shopping-item')
        console.log(compelteItem)
        $(this).parent().parent().find('.shopping-item').toggleClass('shopping-item__checked');
    })
    //now for the delete click //
    $('ul').on('click', ".shopping-item-delete", function(event){
        $(this).parent().parent().remove();
    });

});
