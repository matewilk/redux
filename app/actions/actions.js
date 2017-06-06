/**
 *
 * Action creators
 *
**/
export function addItem (value) {
  return {
    type: 'ADD_ITEM',
    value
  };
}

export function removeItem (id) {
  return {
    type: 'REMOVE_ITEM',
    id
  };
}

export function filterItems (string) {
  return {
    type: 'FILTER_ITEM',
    string
  };
}
