# Buto-Plugin-EternicodeBootstrapdatepicker2
Bootstrap datepicker.


Include in head.
```
type: widget
data:
  plugin: eternicode/bootstrapdatepicker2
  method: include
```


Javascript
```
if($('#frm_utstillinger_status_capture_Foedselsdato').datepicker){
  this.datepicker = $('#frm_utstillinger_status_capture_Foedselsdato').datepicker({ format: 'yyyy-mm-dd', weekStart: 1, daysOfWeekHighlighted: '0,6', autoclose: true, todayHighlight: true });
}
```


