let addEvent = (id, name, description, startTime, endTime) => {
    let element = document.createElement('div');
    element.className = 'event';
    let linkName = document.createElement('a');
    linkName.innerHTML = name;
    linkName.href = "https://www.facebook.com/events/" + id;
    element.appendChild(linkName);
    document.getElementById('eventList').appendChild(element);
}

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://graph.facebook.com/v3.0/freeCodeCampLisbon/events');
xhr.setRequestHeader('Authorization', 'Bearer EAAUOkpBroAwBAKaUQJ8TGjZBJZBVAce7dPkB9GwMmHgksdVob3ZBZCX28eFAkGd1mbkApc3VF0SEQu655mNesbc2MqWaLZA4BhTwNbmyDcRKFAzswTlqrpoY4WHRTpxcttAMPlpavah4MaZAFIgqWMZBAZC4GesPn2MZD');
xhr.send();

xhr.onload = (e) => {
    let valuesRequest = JSON.parse(xhr.response);
    console.log(valuesRequest.data);
    valuesRequest.data.forEach((elements) => {
        addEvent(elements.id, elements.name, elements.description, elements.startTime, elements.endTime);
    });
}