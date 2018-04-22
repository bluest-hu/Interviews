const debounce = (fn, t) =>  {
    let timer,
        context,
        args; 
    return () => {   
        let context = this;
        let args = arguments;
         
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, t);
    }
}

export default debounce;
