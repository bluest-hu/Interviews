const throttle = (func, wait) => {
    var now,
        previous = 0,
        context,
        args;
    return () => {
        context = this;
        now = +new Date()
        args = arguments;

        if (now - previous > wait) {
            func.apply(context, args);
            previous = now;
        }
    };
};

export default throttle;
