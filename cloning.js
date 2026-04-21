/*let ids = Symbol.for("id");
let obj1 = {
    lname:"go",
    code:45,
    [ids] : "go"
};
let cobj1 = Object.assign({},obj1);
let obj2 = {
    myLnmae : "maddy",
    age : 8089,
    iobj : {
       qua :"arrogant",
       hel : "maddy8089"
    }
}
let cobj2 = Object.assign({},obj2);
let le = Object.getOwnPropertySymbols(obj1);
//alert(le.length);
//console.log(le);
//console.log(Reflect.ownKeys(cobj1));
//console.log(Reflect.ownKeys(obj2));
//alert(Object.entries(cobj1));
//alert(Object.entries(cobj2));
cobj2.iobj.qua = "pls";
alert(obj2.iobj.qua);

function fobj(){
   let obj3 = {
      loname:"fha",
      age : 8089
    };
    console.log("hell");
    return obj3;
} 
let st = fobj();
console.log(st.loname);

let obj4 = {
}
obj4.fun = fobj();
alert(Object.entries(obj4));
console.log(obj4.fun);

function sayHi() {
  alert( this.name );
}

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref );
*/
let obj5 = {
  address:{
           permanent:{
             local:"yes",
             replace: 0
           },
           temproary:{
              own: "yes",
              rent: "no"
           }         
          },
  fk : function rok(){
           let obj6 = {namel:"maddy"};
           console.log("hellll" + obj6.namel);
        
    }
}
let store = JSON.stringify(obj5);
console.log(store);
store = JSON.parse(store);
console.log(store);