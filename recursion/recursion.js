function reverse(tree) {
    const array = [];

    function traverse(currentNode, level = 0) {
        let child;
        let nextLevel;

        array[level] === undefined ? array[level] = [currentNode.value] : array[level].push(currentNode.value);
        for (let key in currentNode) {
            child = currentNode[key];
            nextLevel = level + 1;
            if (typeof  child === 'object' && (key === "left" || key === "right")) traverse(child, nextLevel);
        }
    }

    traverse(tree);
    return array;

}

