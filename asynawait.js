console.log('Person 1 : shows ticket');
console.log('Person 2 : shows ticket');


const preMovie = async () => {

    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));

    const addButter = new Promise((resolve, reject) => resolve('butter'));

    const getColdDrinks = new Promise((resolve, reject) => resolve('colddrink'));

    let ticket = await promiseWifeBringingTicks;

    console.log('wife: I have the ticks'); //${ticket}
    console.log('husband : we should go in');
    console.log('wife : no I am hungry');

    let popcorn = await getPopcorn;

    console.log('husband : I got some popcorn'); //${popcorn}
    console.log('husband : we should go in');
    console.log('wife : no I need butter on my popcorn');


    let butter = await addButter;

    console.log('husband : I got some ${butter} on popcorn');
    console.log('husband : anything else ?');
    console.log(' wife : let go we are getting late');
    console.log('husband : thanku for the reminder ');

    let colddrink = await getColdDrinks;

    console.log('wife : I want some ${colddrink}');
    console.log('husband : I got some popcorn'); //${popcorn}
    console.log('husband : we should go in');



//With async/await

try{
    [popcorn, butter, colddrink] = await Promise.all([getPopcorn,addButter,getColdDrinks]);
    console.log('${popcorn} , ${butter} ${colddrink}');
}  catch (error) {
    console,log(error);
}



//With promise.all

//Promise.all([getPopcorn, addButter, getColdDrinks])
//     .then(([popcorn, butter, colddrink]) => {
//       console.log(`${popcorn}, ${butter}, ${colddrink}`);
//     })
//     .catch((error) => {
//       console.log(error);
//     });

    return ticket;

}

preMovie().then((m) => console.log('Person 3: shows ${m}'));

console.log('Person 4 : shows ticket');
console.log('Person 5 : shows ticket');






//Promise all

// console.log('Person 1 : shows ticket');
// console.log('Person 2 : shows ticket');


// const preMovie = async () => {

//     const promiseWifeBringingTicks = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('ticket'), 3000);
//     });

//     const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));

//     const addButter = new Promise((resolve, reject) => resolve('butter'));

//     const getColdDrinks = new Promise((resolve, reject) => resolve('colddrink'));


//let [popcorn, butter, colddrink] = await Promise.all([getPopcorn,addButter,getColdDrinks)]

//console.log('${popcorn} , ${butter} ${colddrink}');
//return ticket;

// preMovie().then((m) => console.log('Person 3: shows ${m}'));

// console.log('Person 4 : shows ticket');
// console.log('Person 5 : shows ticket');



