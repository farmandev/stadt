var events = [
    { Title: "Event One", Date: new Date("03/13/2021") },
    { Title: "Event Two", Date: new Date("03/25/2021") },
    { Title: "Event Three", Date: new Date("03/02/2021") }
];  


$('#datepicker').datepicker({  
      inline: true,  
       showOtherMonths: true,  
      dayNamesMin: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
      beforeShowDay: function(date) {
          var result = [true, '', null];
          var matching = $.grep(events,     function(event) {
            return event.Date.valueOf() === date.valueOf();
        });
        
        if (matching.length) {
            result = [true, 'highlight', null];
        }
        return result;
    },
    onSelect: function(dateText) {
        var date,
            selectedDate = new Date(dateText),
            i = 0,
            event = null;
        
        while (i < events.length && !event) {
            date = events[i].Date;

            if (selectedDate.valueOf() === date.valueOf()) {
                event = events[i];
            }
            i++;
        }
        if (event) {
            alert(event.Title);
        }
    }  
 });  
