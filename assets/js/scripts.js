const active_modals = document.querySelectorAll("[active-modal]");
const disabled_modals = document.querySelectorAll("[disabled-modal]");

let container

/**
 *  function check 'show' in classList.
 * @param { HTMLElement } item 
 * @returns boolean
 */
const checkShowClassList = ( item ) => item.split(' ').includes('show')

/**
 *  function for check event click handler in buttons for active or disabled modals.
 * @param { HTMLElement } item 
 */
const eventModal = ( item ) => {
    const id = item.getAttribute('modal-container-id')
    modal = document.getElementById( id );

    const is_show = checkShowClassList( modal.classList.value )

    is_show ?
        modal.classList.remove('show') : modal.classList.add('show')
}

const forEachModal = ( items ) => {
    items.forEach(( item ) => {
        item.addEventListener('click', () => {
            eventModal(item);
        })
    });
}

forEachModal(active_modals)
forEachModal(disabled_modals)