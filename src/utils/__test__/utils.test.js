import { isValidPassword, isValidEmail } from "../utils";


test('valid password', ()=>{
    expect(isValidPassword('Aa232')).toBe(true)
});

test('invalid password', ()=>{
    expect(isValidPassword('aa232')).toBe(false) 
});

test('invalid password', ()=>{
    expect(isValidPassword('a')).toBe(false)
});

test('valid email', ()=>{
    expect(isValidEmail('mail@mmma.com')).toBe(true)
});

test('invalid email', ()=>{
    expect(isValidEmail('mail.mm.s')).toBe(false)
});

test('invalid eamil', ()=>{
    expect(isValidEmail('mail@mm@s')).toBe(false)
});