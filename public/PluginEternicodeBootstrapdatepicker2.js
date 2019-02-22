function PluginEternicodeBootstrapdatepicker2(){
  this.render = function(id){
    if($('#'+id).datepicker){
      $('#'+id).datepicker({ format: 'yyyy-mm-dd', weekStart: 1, daysOfWeekHighlighted: '0,6', autoclose: true, todayHighlight: true });
      /**
       * Set 550101 to 1955-01-01.
       * Set 101112 to 2010-11-12.
       */
      $('#'+id).change(function(){
        var change = false;
        if(this.value.length==6 && !isNaN(this.value)){
          change = true;
        }
        if(change){
          var now_year = new Date().getFullYear();
          var year = Math.round(parseInt(this.value)/10000)+2000;
          if(year > now_year){
            year = year-100;
          }
          var str = year+'-'+this.value.substr(2,2)+'-'+this.value.substr(4,2);
          if(PluginEternicodeBootstrapdatepicker2.isDate(str)){
            $('#'+this.id).datepicker('update', str);
          }else{
            $('#'+this.id).datepicker('update', '');
          }
        }
      });
    }else{
      console.log('PluginEternicodeBootstrapdatepicker2 says: Some error...');
    }
  }
  this.isDate = function(date) {
    return (new Date(date) !== "Invalid Date" && !isNaN(new Date(date)) ) ? true : false;
  }
}
var PluginEternicodeBootstrapdatepicker2 = new PluginEternicodeBootstrapdatepicker2();
