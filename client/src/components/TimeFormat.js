function DateFormatter (dateString) {
    const dateTime = new Date(dateString)
    const todaysDate = new Date()

    const todayDatePortion = todaysDate.toDateString()
    const todayTimePortion = todaysDate.toTimeString()

    const datePortion = dateTime.toDateString()
    let timePortion = dateTime.toTimeString()

    const dateStringHour = parseInt(timePortion.slice(0, 2))
    const todayHour = parseInt(todayTimePortion.slice(0, 2))

  if (todayDatePortion === datePortion) {
     
      switch (dateStringHour) {
        case todayHour-1:
          return "1 hour ago"
        case todayHour-2:
          return "2 hours ago"
        case todayHour-3:
          return "3 hours ago"
        case todayHour-4:
          return "4 hours ago"  
        case todayHour-5:
          return "5 hours ago" 
        case todayHour-6:
          return "6 hours ago"
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
          return "This morning" 
        case 12:
        case 13:
        case 14: 
        case 15:
          return "This afternoon" 
        case 16:
        case 17:
        case 18:
          return "This evening"
        default: 
          return "Look at this"  
    } 


   } else if (todayDatePortion.slice(4, 7) === datePortion.slice(4, 7) && parseInt(todayDatePortion.slice(8, 10))-1 === parseInt(datePortion.slice(8, 10))) {
       console.log("test test " + todayDatePortion-1)
       console.log("other test " + datePortion)
       switch(dateStringHour) {
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
            return "Last night"
        default:
            return "Yesterday"
       }

   }

   return datePortion + timePortion
  }

  export default DateFormatter;