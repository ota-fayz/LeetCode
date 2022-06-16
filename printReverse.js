function reverseString(arr) {
    helper(0, arr, arr.length - 1)
    return arr
}

function helper(index, arr, length) {
    if (index > length) return arr
    let left = arr[index]
    arr[index] = arr[length]
    arr[length] = left
    helper(index + 1, arr, length - 1)
}

reverseString(["h","e","l","l","o"])
