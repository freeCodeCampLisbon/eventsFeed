function addEvent(id, name, description, startTime, endTime) {

    console.log(id, name, description, startTime, endTime);
    /*var txt1 = "<b>I </b>";                   // Create element with HTML
    var txt2 = $("<i></i>").text("love ");    // Create with jQuery
    var txt3 = document.createElement("b");   // Create with DOM
    txt3.innerHTML = "jQuery!";
    $("img").after(txt1, txt2, txt3);      // Insert new elements after img*/
    let element = document.createElement('div');
    element.className = 'event';
    element.innerHTML = name;
    document.getElementById('eventList').appendChild(element);
}
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://graph.facebook.com/v3.0/freeCodeCampLisbon/events');
xhr.setRequestHeader('Authorization', 'Bearer EAAUOkpBroAwBAKaUQJ8TGjZBJZBVAce7dPkB9GwMmHgksdVob3ZBZCX28eFAkGd1mbkApc3VF0SEQu655mNesbc2MqWaLZA4BhTwNbmyDcRKFAzswTlqrpoY4WHRTpxcttAMPlpavah4MaZAFIgqWMZBAZC4GesPn2MZD');
xhr.send();

xhr.onload = function(e){
    let valuesRequest = JSON.parse(xhr.response);
     console.log(valuesRequest.data);
     valuesRequest.data.forEach(function(elements){
        addEvent(elements.id, elements.name, elements.description, elements.startTime, elements.endTime);
     });
}