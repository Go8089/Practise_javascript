function widthdraw()
{
   let money = 2000;
   let active = true;
   let kyc = false;

   if(active === true)
   {
      if(money > 1000)
      {
        console.log("widthdrwa");
      }  else {
        console.log("balance unsufficient");
      } 
   } else {
    console.log("account unactive");
    console.log("do your kyc");
    if(kyc === true )
    {
        console.log("kyc done");
    }
    else {
        console.log("server error, do after sometime");
    }
   }
}
widthdraw();
let servererror = function()
{
    let limit = 3;
    for(let user = 0; user < limit; user++)
    {
    if(user === limit)
    {
        console.log("log out, try after some time");
        break;
    } else {
        console.log("login succesfull")
    }
}
}
servererror();
let userlogin = function()
{
    let users = ["gopal", "maddy", "madhu"];
    let pass = ["maddy2006", "45678", "89765"];
    let username = "gopal";
    let password = "maddy2006";
    for(let i = 0; i < users.length; i++)
    if(username === users[i] )
    {
        if(password === pass[i])
        {
            console.log("login success");
            break;
        }else {
            console.log("invalid password");
        }
    } else{
       console.log("invalid username");
    }
}
userlogin();
let discount = function()
{ 
    amount = 5000;
    if(amount >= 2000 && amount <= 3000)
    {
        console.log("100 rupees discount");
    } else if (amount > 3000 && amount <= 5000)
    {
        console.log("250 rupees discount");
    } else {
        console.log("no discount discount");
    }
}
 discount();
 let evenodds = function()
{
    let a = 5;
    if(a % 2 == 0)
    {
        console.log("it is even");
    } else {
        console.log("it is odd");
    }
}
evenodds();
