// Removes item from specified index of array
export function removeItemAtIndex(array, index) {
  if (index > -1) {
    array.splice(index, 1);
  }
}
