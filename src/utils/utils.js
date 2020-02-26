const passwordRegex = RegExp("^(?=.*?[A-Z])(?=.*?[a-z]).{2,}$");
// eslint-disable-next-line 
const emailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

export const isValidEmail = (email) => emailRegex.test(email);
export const isValidPassword = (password) => passwordRegex.test(password);

export const debounce = (fun, time) =>{
    let timer;
    return (...args)=>{
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fun.apply(this, args)
        }, time)
    }
}


export const replaceEmptySpace = (string , newChar)=> string.trim().replace(/ /g, newChar);

