// console.log("App");
// //object literal
// const person={
//     name:"Angel",
//     city:"New York",
//     age:27,
//     student:true,
//     music:["Coldplay","Oasis","Beatles"],
//     address:{
//         street:"University",
//         number:"262-K"
//     }
// }
// console.log(person.name);
// console.log(person.age);
// console.log(person.music[1]);
// console.log(person.address.street);
var salon={
    name:"The Posh Paw Day Spa",
    telephone:"123-456-7890",
    address:{
        street:"Palm",
        number:"345"
    },
    hour:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[]
}
var counter=0
class Pet{
    constructor(name,age,gender,breed,service,ownerName,contactPhone){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.service=service;
        this.ownerName=ownerName;
        this.contactPhone=contactPhone;
        this.id=counter++;
    }
}



function petInfo(){    

for(var i=0;i<4;i++){//i<salon.pets.length; to loop through full length of the array even if items are added or deleted
    document.getElementById("petInfo").innerHTML=`
    <p>We currently have ${salon.pets.length} furiends that we care for regularly.</p>
    <p>Some of the furiends we have registered with <span class="logo-theme">${salon.name}</span> are ${salon.pets[0].name}, ${salon.pets[1].name}, ${salon.pets[2].name}, ${salon.pets[3].name}.</p>
    <p>All of these Furiends are different sizes and breeds, ranging from a ${salon.pets[3].breed} to a ${salon.pets[0].breed}, so rest assured, we can care for any domestic pet you choose to entrust with us.</p>
    `;
};
};

function salonInfo(){
    document.getElementById("footer-site").innerHTML=`
    <p class="logo-theme-left">${salon.name}</p>
    <p>${salon.address.number} ${salon.address.street} | Telephone Number: ${salon.telephone}</p>
    <p>The Spa is open from ${salon.hour.open} to ${salon.hour.close}</p>
    `;
}
// petInfo();
salonInfo();


function register(){
    // creat the vars and store values from the inputs
    var nameInput=document.getElementById("petName").value;
    var ageInput=document.getElementById("petAge").value;
    var genderInput=document.getElementById("petGender").value;
    var breedInput=document.getElementById("petBreed").value;
    var serviceInput=document.getElementById("petService").value;
    var ownerNameInput=document.getElementById("ownerName").value;
    var contactPhoneInput=document.getElementById("contactPhone").value;
    if(nameInput!="" && contactPhone!=""){
    // create the objects
    var thePet = new Pet(nameInput,ageInput,genderInput,breedInput,serviceInput,ownerNameInput,contactPhoneInput);
    // push objects into array
    salon.pets.push(thePet);
    // display the objects
    console.log(salon.pets);
    clearInputs() 
    var alertElement=document.getElementById("alert");
    alertElement.classList.remove("hide");
    setTimeout(function(){
        alertElement.classList.add("hide");
    }, 3000);
}else{
    var alertElement=document.getElementById("alert-wrong");
    alertElement.classList.remove("hide");
    setTimeout(function(){
        alertElement.classList.add("hide");
    }, 3000);
}
    
}

function clearInputs(){
    document.getElementById("petName").value="";
    document.getElementById("petAge").value="";
    document.getElementById("petGender").value="";
    document.getElementById("petBreed").value="";
    document.getElementById("petService").value="";
    document.getElementById("ownerName").value="";
    document.getElementById("contactPhone").value="";
    displayPetsTable();
    displayPets();
}

function displayPets(){
    var tmp="";
    for(var i=0;i<salon.pets.length;i++){
        tmp+=`
            <div class="pet">
                <h1> Name: ${salon.pets[i].name} </h1>
                <p> Age: ${salon.pets[i].age} </p>
                <p> Gender: ${salon.pets[i].gender} </p>
                <p> Breed: ${salon.pets[i].breed} </p>
                <p> Services: ${salon.pets[i].service} </p>
                <h5> Owner: ${salon.pets[i].ownerName} </h5>
                <h5> Phone: ${salon.pets[i].contactPhone} </h5>
            </div>`;        
    }
    document.getElementById('pets').innerHTML=tmp;
}
function tableActions(){

}
function displayPetsTable(){
    var tmp=``;
    for(var i=0;i<salon.pets.length;i++){
        tmp+=`
            <tr id="${salon.pets[i].id}">
                <td> ${salon.pets[i].name} </td>
                <td> ${salon.pets[i].age} </td>
                <td> ${salon.pets[i].gender} </td>
                <td> ${salon.pets[i].breed} </td>
                <td> ${salon.pets[i].service} </td>
                <td> ${salon.pets[i].ownerName} </td>
                <td> ${salon.pets[i].contactPhone} </td>
                <td><button onclick="deletePet(${salon.pets[i].id});" class="delete-btn">🗑️</button><button  class="edit-btn">✏️</button></td>
            </tr>`;        
    }
    // document.getElementById('pets').innerHTML=tmp;
    document.getElementById('table-body').innerHTML=tmp;
}

function deletePet(petId){
    console.log("delete Pet"+petId);
    
    for (var i=0;i<salon.pets.length;i++){
        if(petId===salon.pets[i].id){
            indexDelete=i;
            break;
        }
    }
    salon.pets.splice(indexDelete,1);
    document.getElementById(petId).remove();
}

function searchPet(){
    var searchString=document.getElementById('searchPet').value;
    for (var i=0;i<salon.pets.length;i++){
        if(searchString===salon.pets[i].name){
            var row=salon.pets[i].id;
            document.getElementById(row).classList.add('highlight');
            break;
        }
        
    }
}
function init(){

    const scooby=new Pet("Scooby",60,"Male","Great Dane","Full Service","Shaggy","646-565-8654");

    const scrappy=new Pet("Scrappy",30,"Male","Pomeranian","Wash and Nails","Shaggy","214-659-5384");

    const lana=new Pet("Lana",9,"Female","Hound Mix","Nails and Grooming","Cameron","456-483-4653");

    const bowie=new Pet("Bowie",14,"Male","Chihuahua Mix","Full Service","Heidi","926-658-8951");
    salon.pets.push(scooby,scrappy,lana,bowie);
    displayPets();
    salonInfo(); 
    displayPetsTable();
    
}
window.onload=init;