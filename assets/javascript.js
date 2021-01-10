var currentDay = moment().format("dddd, MMMM Do")
$("#currentDay").html(currentDay)
var currentHour = moment().hour()
//Display current day
var time = [
  "9:00 am",
  "10:00 am",
  "11:00 am",
  "12:00 pm",
  "1:00 pm",
  "2:00 pm",
  "3:00 pm",
  "4:00 pm",
  "5:00 pm",
];
var militaryTime = [
    9,10,11,12,13,14,15,16,17
  ];

var text = [
    "","","","","","","","","",
];

//inside each time block: display window to enter event
function displayTime() {
    $(".timeBlock").empty()
  for (var i = 0; i < time.length; i++) {

    var colorTime = ""

   if (militaryTime[i]<currentHour){
       colorTime="past"
   }
    else if (militaryTime[i]===currentHour){
        colorTime="present"
    }
    else { 
        colorTime="future"
    }

    $(".timeBlock").append(`
     <div class="row"> 
     <div class="time-block col-md-2 mt-4">
       ${time[i]}
     </div>
     <div class= "textarea col-md-9">
         <textarea class= "form-control ${colorTime}" name="" id="text-${i}"></textarea>
         
     </div>
     <div class="col-md-1">
         <button data-value=${i} class="saveBtn h-50">Save</button>
     </div>
 </div>
 
     `);
  }
}


displayTime()


//Create on click for save button to save in local storage
$(".saveBtn").on("click", function () {
    // Get nearby values of the description in JQuery
    var currentInput = $(this).attr("data-value")
    //Grab the text area
    text[currentInput] = $("#text-"+currentInput).val()

    // Save text in local storage
    localStorage.setItem("time", JSON.stringify(text));
    
})

 //Load data from local storage
 var loadedText = JSON.parse(localStorage.getItem("time"))

    if (loadedText !== null) {
        text = loadedText 

        for (var i = 0; i < text.length; i++) {
             $("#text-"+i).val(text[i])
    }
}