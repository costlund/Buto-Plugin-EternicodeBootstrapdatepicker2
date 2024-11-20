function PluginEternicodeBootstrapdatepicker2(){
  this.change_mode = 2;
  this.data = { format: 'yyyy-mm-dd', weekStart: 1, daysOfWeekHighlighted: '0,6', autoclose: true, todayHighlight: true, forceParse: true, calendarWeeks: true };
  this.render = function(id, onchange_method){
    if($('#'+id).datepicker){
      $('#'+id).datepicker(this.data);
      if(this.change_mode==1){
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
            }
          }
        });
      }else if(this.change_mode==2){
        /**
         * Set 19550101 to 1955-01-01.
         * Set 20101112 to 2010-11-12.
         */
        $('#'+id).change(function(){
          var change = false;
          if(this.value.length==8 && !isNaN(this.value)){
            change = true;
          }
          if(change){
            var str = this.value.substr(0,4)+'-'+this.value.substr(4,2)+'-'+this.value.substr(6,2);
            if(PluginEternicodeBootstrapdatepicker2.isDate(str)){
              $('#'+this.id).datepicker('update', str);
            }
          }
        });
      }
      /**
       * Blur
       * Set a date if a number is set.
       */
      $('#'+id).blur(function(){
        this.value = this.value.trim();
        if(PluginEternicodeBootstrapdatepicker2.isInt(this.value)){
          var date = new Date();
          date.setDate(date.getDate() + parseInt(this.value));
          this.value = date.toLocaleString('sv-SE');
          this.value = this.value.substr(0, 10);
        }
      });
      /**
       * Set date if attribute datepicker_show not exist.
       * Add attribute datepicker_show.
       */
      $('#'+id).datepicker()
          .on('show', function(e) {
            if(!$('#'+id).attr('datepicker_show')){
              $('#'+id).datepicker('update', $('#'+id).val());
            }
            $('#'+id).attr('datepicker_show', true);
      });
      /**
       * Remove attribute datepicker_show.
       */
       $('#'+id).datepicker()
          .on('hide', function(e) {
            $('#'+id).removeAttr('datepicker_show');
      });
      /**
       * 
       */
      $('#'+id).datepicker()
        .on('changeDate', function(e) {
          if(typeof onchange_method != 'undefined'){
            onchange_method(e);
          }
      });
    }else{
      console.log('PluginEternicodeBootstrapdatepicker2 says: Some error...');
    }
  }
  this.isDate = function(date) {
    return (new Date(date) !== "Invalid Date" && !isNaN(new Date(date)) ) ? true : false;
  }
  this.isInt = function(value) {
    value = value.trim();
    return !isNaN(value) && 
           parseInt(Number(value)) == value && 
           !isNaN(parseInt(value, 10));
  }
}
var PluginEternicodeBootstrapdatepicker2 = new PluginEternicodeBootstrapdatepicker2();
