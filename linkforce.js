// linkedin
function copy(

$(' .full-name').html()
var fullName = $(' .full-name').html()
fullName.split(' ')
firstName = fullName.split(' ')[0]
lastName = fullName.split(' ')[1]

$(' .title').html()
var title = $(' .title').html()

var data = { firstName: firstName, lastName: lastName, title: title }

json = JSON.stringify(data)

)

{
  return json;
}

copy() // => "{"firstName": "lastName": "title"}""


// salesforce
function paste(

data = JSON.parse(json)

$('#name_firstlea2').value
firstName = $('#name_firstlea2').value

$('#name_lastlea2').value
lastName = $('#name_lastlea2').value

$('#lea3').value
title = $('#lea3').value

	)

paste('{"firstName": "lastName": "title"}')

function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}
  
  )

eventFire($('.btn'), 'click')