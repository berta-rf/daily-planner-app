$(document).ready(function() {
    
    const timeblocks = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    
    //Display the current day at the top of the calendar
    const dateTime = luxon.DateTime;
    const today = dateTime.now().setZone("system");
    $('#currentDay').text(today.toLocaleString(dateTime.DATE_HUGE));
    
    //Color-code timeblocks based on past, present, and future
    displayTimeblocks();

    function displayTimeblocks() {

        for (let i = 0; i < timeblocks.length; i++) {
            
            let rowDate = today.set({hour: timeblocks[i], minutes: 0});
            let rowHour = rowDate.hour;
            
            var timeblockRow = $(
                `
                <div class="row">
                    <div class="time col"></div>
                    <div class="col-9">
                        <form class="form-group">
                            <label for="FormTextarea"></label>
                            <textarea class="form-control" id="FormTextarea"></textarea>
                        </div>
                        <button type="submit" class="btn save col">&#10133</button>
                        </form>
                    </div>    
                </div>
                `
            );

           $(timeblockRow).find('.time').text(rowDate.toLocaleString(dateTime.TIME_24_SIMPLE));

           $('.container').append(timeblockRow);
                
            if (today.hour > rowHour) {
                
                $(timeblockRow).addClass("past");
                
            } else if (today.hour == rowHour) {
                
                $(timeblockRow).addClass("present");

            } else if (today.hour < rowHour) {
                
                $(timeblockRow).addClass("future");
            }
        }

    }
   
    //Allow a user to enter an event when they click a timeblock 
    //Save the event in local storage when the save button is clicked in that timeblock
    //Persist events between refreshes of a page.







}); 
