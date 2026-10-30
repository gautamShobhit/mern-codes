// var a = 10;
const a = 10;
var b = 25;

{
  let b = 35;
  console.log(b);
}
console.log(b);
console.log(a);
console.log(this);
{
  var b = 20;
  console.log(this.b);
}
console.log(this.b);

console.log(this.a);
