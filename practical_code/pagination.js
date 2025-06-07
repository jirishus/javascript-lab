/*
This function will take an array of items and a pageSize as input and return an array of pages, where each page contains the specified number of items

*/

/**
 * Paginates an array into non-overlapping pages
 * @param {Array} items The array of items to paginate
 * @param {number} pageSize The number of items per page
 * @param {Array<Array>} An array of pages
 */
function paginate(items, pageSize) {
  // Ensure the inputs are valid
  if (!Array.isArray(items) || typeof pageSize !== 'number' || pageSize <= 0) {
    console.error("Invalid arguments. 'items' must be an array and 'pageSize' must be a positive number")
    return [];
  }

  // paginated pages that will be returned
  const pages = [];
  // loop through the array, jumping by the page size each time
  for (let i=0;i<items.length;i += pageSize) {
    // slice the array from the current index to the current index + page size
    const page = items.slice(i, i + pageSize);
    pages.push(page);
  }

  return pages;
}

const items = [1,2,3,4,5,6,7];
const pageSize = 3;

const result = paginate(items, pageSize);

console.log(result);