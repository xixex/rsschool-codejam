function make(...args) {
    let values = [];
    let currentResult = decider(args) || 0;

    function f(...args2) {
        currentResult = decider(args2);
        return f;
    }

    function isFunc(argument) {
        return {}.toString.call(argument) === '[object Function]';
    }

    function decider(args) {
        for (let i = 0; i < args.length; i++) {
            if (isFunc(args[i])) {
                let result = values.reduce((accumulator, a) => args[i](accumulator, a));
                values.splice(0, values.length, result);
                return result;
            } else {
                values.push(args[i]);
            }
        }
        return 0;

    }

    f.inspect = () => {
        return currentResult || values;
    };

    f.toString = () => {
        return currentResult || values;
    };

    return f;
}

module.exports = make;