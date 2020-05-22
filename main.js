const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select tab content item
function selectItem(event) {
    removeBorder();
    removeShow();
    //Add border to current tab
    this.classList.add('tab-border');
    //Grab content item from DOM
    //console.log(this.id);
    //we want to take the id of the tabs (tab-1, tab-2, and tab-3)
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Here we get tab-1-content, tab-2-content, tab-3-content
    //Add show class
    tabContentItem.classList.add('show');

}

function removeBorder() {
    //the removeBorder function is used to remove the boreder from all the tabs
    //by default
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    //the removeShow function is used to remove the show class by default from all the tabs
    tabContentItems.forEach(item => item.classList.remove('show'));
}

//Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));
/*  the forEach is used to loop through tabItems and each of the elements  of the
loop is saved as item. An event listener is added to item which listens for a click
action after which it calls the selectItem function
*/
