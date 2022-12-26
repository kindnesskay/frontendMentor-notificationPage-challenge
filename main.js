let con = document.getElementById("container");


//user data 
let data = [
    {
      name: "Mark Weber",
      avatar: "./assets/profile/avatar-mark-webber.webp",
      data: "reacted to your resent post",
      refrence: "My first tournament todaty!",
      ref_id:"",
    },
  
    { name: "Angela Gray", 
    avatar: "./assets/profile/avatar-angela-gray.webp", 
    data: "followed you", 
    refrence: "" ,
    refrence_src:"",
    ref_id:"",
},
  
    {
      name: "Jacob Thompson",
      avatar: "./assets/profile/avatar-jacob-thompson.webp",
      data: "has joined your group",
      refrence: "Chess Club",
      refrence_src:"",
      ref_id:"",
    },
  
    {
      name: "Rizky Hasanuddin",
      avatar: "./assets/profile/avatar-rizky-hasanuddin.webp",
      data: "sent you a private message",
      refrence: "",
      refrence_src:"",
      ref_id:"",
    },
    {
      name: "Kimberly Smith",
      avatar: "./assets/profile/avatar-kimberly-smith.webp",
      data: "commented on your picture",
      refrence: "",
      refrence_src:"./assets/profile/image-chess.webp",
      ref_id: "chess",
    },
    {
      name: "Nathan Peterson",
      avatar: "./assets/profile/avatar-nathan-peterson.webp",
      data: "reacted to your resent post ",
      refrence: "5 end-game stratages to increase your win rate",
      refrence_src:"",
      ref_id:"",
    },
  
    {
      name: "Anna Kim",
      avatar: "./assets/profile/avatar-anna-kim.webp",
      data: "left the group",
      refrence: "Chess club",
      refrence_src:"",
      ref_id:"",
    },
  ];


  function new_notification(x){
    let div = document.createElement("div");
    div.className = "new_notification";

    let inner_div=document.createElement('div');
    inner_div.className='inner_div';
    
    //profile pictuter
    let pictureFrame=document.createElement('div');
    pictureFrame.className='pic_frame';
    let avatar_src =document.createElement('img');
    avatar_src.src=data[x].avatar;
    pictureFrame.appendChild(avatar_src);
    
    //user name
    let name=document.createElement('p');
    let name_text=document.createElement('span');
    name_text.className='name';
    let name_node=document.createTextNode(data[x].name);
    name_text.appendChild(name_node);
    name.appendChild(name_text);
    
    
  

    //the notification
    let data_text=document.createElement('span');
    let data_node=document.createTextNode(data[x].data);
    data_text.appendChild(data_node);
    data_text.className='data';
    name.appendChild(data_text);
    


    //refrence text
    let ref_text=document.createElement('span');
    ref_text.className="reference";
    let ref_node=document.createTextNode(data[x].refrence);
    ref_text.appendChild(ref_node);
    name.appendChild(ref_text);
    if(data[x].refrence_src){
        inner_div.className='inner_div_rev';
        let ref_box=document.createElement('img');
        ref_box.className='ref_src';
        ref_box.src=data[x].refrence_src;
        inner_div.appendChild(ref_box);
    }


    div.appendChild(inner_div);
    div.appendChild(pictureFrame);
   

    inner_div.appendChild(name)
    
    con.appendChild(div);

    if(data[x].ref_id){
        div.id=data[x].ref_id;
        console.log((document.getElementById(data[x].ref_id)))
    }

  }

  for(let i=0;i<data.length;i++){
    new_notification(i);
    
  }
