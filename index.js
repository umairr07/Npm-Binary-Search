const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2)

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1
        }
    }
}

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 3))

module.exports = binarySearch;