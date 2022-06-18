export const formatDate = (date:any)=>{
    var dateParts = date.split("-");
    var jsDate = new Date(dateParts[2].substr(0,2),dateParts[1] - 1,dateParts[0] );
    return jsDate;
}