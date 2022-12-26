let con = document.getElementById("container");
let div;

let data = [
    { name: "john", age: 14 },
  
    { name: "johnny", age: 41 },
  
    { name: "mike", age: 43 },
  ];

new_div = () => {
  div = document.createElement("div");
  div.className = "pop";
  con.appendChild(div);
};

new_p = (x) => {
  if(!x){
    x="hello"
  }  
  let paragraph = document.createElement("p");
  paragraph.className='pop_text'
  let text = document.createTextNode(x);
  paragraph.appendChild(text);
  div.append(paragraph);
};

let user1=data[1].age;

new_div();
new_p(user1);
new_div();
new_p('goodday');
new_div();

new_p('goodnight');
new_div();
new_p('goodnight');




console.log(data[0].name);
