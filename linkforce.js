// linkedin
function copy(

$(' .full-name').html()
var fullName = $(' .full-name').html()
fullName.split(' ')
firstName = fullName.split(' ')[0]
lastName = fullName.split(' ')[1]

$(' .title').html()
var fullName = $(' .title').html()

var data = { firstName: firstName, lastName: lastName, title: title }

json = JSON.stringify(data)

)

{
  return json;
}

copy() // => "{"firstName": "etc"}""


// salesforce
function paste(

data = JSON.parse(json)

$('#name_firstlea2').value
firstName = $('#name_firstlea2').value

$('#name_lastlea2').value
firstName = $('#name_lastlea2').value

$('#lea3').value
title = $('#lea3').value

	)

function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

{
  eventFire($('.btn'), 'click')
}

paste('{"firstName": "etc"}')
