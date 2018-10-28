function sumOfOther(array) {
    return array.map((_, index, array) => array.filter((_, index2) => index !== index2).reduce((sum, a) => sum += a));
}
