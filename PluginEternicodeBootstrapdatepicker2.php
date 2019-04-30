<?php
class PluginEternicodeBootstrapdatepicker2{
  public static function widget_include(){
    $element = array();
    $element[] = wfDocument::createHtmlElement('link', null, array('href' => '/plugin/eternicode/bootstrapdatepicker2/css/bootstrap-datepicker.min.css', 'rel' => 'stylesheet'));
    $element[] = wfDocument::createHtmlElement('script', null, array('src' => '/plugin/eternicode/bootstrapdatepicker2/js/bootstrap-datepicker.min.js', 'type' => 'text/javascript'));
    wfPlugin::enable('include/js');
    $element[] = wfDocument::createWidget('include/js', 'include', array('src' => '/plugin/eternicode/bootstrapdatepicker2/PluginEternicodeBootstrapdatepicker2.js'));    
    wfDocument::renderElement($element);
  }
}
