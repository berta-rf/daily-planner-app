$(document).ready(function() {
    
    const defaultTimeblocks = [
        {hour: 9, toDo: null},
        {hour: 10, toDo: null},
        {hour: 11, toDo: null},
        {hour: 12, toDo: null},
        {hour: 13, toDo: null},
        {hour: 14, toDo: null},
        {hour: 15, toDo: null},
        {hour: 16, toDo: null},
        {hour: 17, toDo: null},
    ];
    
    //Persist events between refreshes of a page.
    let agenda;

    if (!localStorage.getItem('agenda')) {
        localStorage.setItem('agenda', JSON.stringify(defaultTimeblocks));
        agenda = defaultTimeblocks;
    } else {
        agenda = JSON.parse(localStorage.getItem('agenda'));
    }

    //Display the current day at the top of the calendar
    const dateTime = luxon.DateTime;
    const today = dateTime.now().setZone("system");
    $('#currentDay').text(today.toLocaleString(dateTime.DATE_HUGE));
    
    //Generate/Display timeblocks for business hours (9-17h) 
    displayTimeblocks();

    function displayTimeblocks() {

        for (let i = 0; i < agenda.length; i++) {
            
            let rowDate = today.set({hour: agenda[i].hour, minutes: 0});
            let rowHour = rowDate.hour;

            let agendaHour = rowDate.toLocaleString(dateTime.TIME_24_SIMPLE);
            // if agenda toDo null, return empty string
            let eventInfo = agenda[i].toDo ? agenda[i].toDo : '';

            let timeblockRow = $(
                `
                <div class="row" data-time-index="${i}">
                    <div class="time col">${agendaHour}</div>
                    <div class="col-10">
                        <form class="d-flex">
                            <label for="FormTextarea"></label>
                            <textarea class="form-control m-3">${eventInfo}</textarea>
                           <button type="submit" class="btn save m-2">&#10133</button>
                        </form>
                    </div> 
                </div>
                `
            );

           $('.container').append(timeblockRow);
              
           
        // Change timeblock background color (past, present, and future)
            if (today.hour > rowHour) {
                
                $(timeblockRow).addClass("past");
                
            } else if (today.hour == rowHour) {
                
                $(timeblockRow).addClass("present");

            } else if (today.hour < rowHour) {
                
                $(timeblockRow).addClass("future");
            }
        }

        // When click + button, save event/toDo to localstorage
        $('.btn').on('click', function(e){
            e.preventDefault();
            let eventInfo = $(this).parent().find('textarea').val();
            let i = $(this).parent().parent().parent().data('timeIndex');
            agenda[i].toDo = eventInfo;
            localStorage.setItem('agenda', JSON.stringify(agenda));

        });

    }
   
}); 
