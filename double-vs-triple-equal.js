// (==) = only value check;[(2, '2')(0, false)(1, true)=is same];
// (===) = value+type check;[(2, '2')(0, false)(1, true)= is not same];


const first = 2;
const second = '2';
if (first === second) {
    console.log("Condition is true");
}
else{
    console.log('Condition is false');
}