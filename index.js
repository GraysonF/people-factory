const personForm = document.querySelector("form");
const details = document.querySelector('.details');

personForm.onsubmit = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    

    const personName = (form.personName.value);
    const hairColor = form.hairColor.value;
    const age = form.age.value;
    const birthplace = form.birthplace.value;

    const colorDiv = `
        <div style ="height: 50px; width = 60px; background-color: ${hairColor}">   </div>
    `;


    
    // details.innerHTML = `<em> ${personName} </em>`;

    // const ul = document.createElement('ul');
    // const li = document.createElement('li');
    // const li1 = document.createElement('li');
    // const li2 = document.createElement('li');
    // const li3 = document.createElement('li');

    // li.textContent = "Name: "+ personName;
    // details.appendChildren(li);
    // li1.textContent = "Hair Color: " + hairColor;
    // details.appendChild(li1);
    // li2.textContent = "Age: " + age;
    // details.appendChild(li2);
    // li3.textContent = "Birthplace: " + birthplace;
    
    // details.appendChild(li3);

    // var lis = [
    //   createLi(personName),
    //   createLi(hairColor),
    //   createLi(age),
    //   createLi(birthplace)
    // ];

    var x = document.getElementById("forms").childElementCount - 1;
    console.log(x);
    
    var elements = document.getElementById("forms").elements;

    // for (var i = 0, element; element = elements[i++];) {
    //     // if (element.type === "text" && element.value === "")
    //     console.log(element);
    // }        

    for (var i = 0, element; i < x; i++) {
        element = elements[i];
        const labels = document.querySelectorAll('label');
        // if (element.getAttribute('name') === "hairColor") {
        //     var div = document.createElement("div");
        //     div = colorDiv;
        //     details.appendChild(div);
            

        //     console.log("Hi");
        // } else {
             createLi(labels[i].textContent, element.value);
        //}
        
       


    // labels.forEach((e) => console.log(e.textContent));
    // console.log(element.getAttribute('name'));
    //console.log(element.value);

    }
    // details.innerHTML = `<ul> <li> Name: ${personName} </li> 
    //                         <li> Hair Color: ${colorDiv} </li> 
    //                         <li> Age: ${age} </li> 
    //                         <li> Birthplace: ${birthplace} </li>`;

    //console.log(document.querySelectorAll('label'));

    // const labels = document.querySelectorAll('label');

    // // labels.forEach((e) => console.log(e.textContent));

    // labels.forEach((e) => createLi(e.textContent, element.value));

    

}

function createLi(label, text) {
  var li = document.createElement("li");
  li.textContent = label + ": " + text;
  details.appendChild(li);
  return li;
}

