//ASYNC FUNCTIONS
// you have to define a function as async with the async tag and then you can use await in the async function, if you don't use the tag and then try to use await withtin the function, it will through an error. 
// an async function always returns a promise

async function myFn1() {
    //await

}

const myFn = async() => {
    //await
}

const myFn2 = () => {
    // await will throw an error
}

async function fn() {
    return 'hello';
}

fn().then(console.log);

function fn2(){         // does the same thing as above, it just has the promise call within the function where as async does that for us
    return Promise.resolve('hello');
}

fn().then(console.log);

async function foo(){
    throw Error('this is a mistake');
}

// foo().then(console.log);
foo().catch(console.log);

fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error));
// ^^ what we learned yesterday, will not run in the local console, need a web page

const request = async () => {
    const response = await fetch(url);
    const json = await response.json;
    console.log(json);
}

request(); 


const request = async () => {
    const response = await fetch('https://swapi.co/api/people/1');
    const json = await response.json();
    console.log(json);
  };
  
  request();