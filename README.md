# Buto-Plugin-EternicodeBootstrapdatepicker2

<p>Bootstrap datepicker.</p>

<a name="key_0"></a>

## Usage

<p>Javascript.</p>
<pre><code>PluginEternicodeBootstrapdatepicker2.render('_id_of_input_')</code></pre>
<p>Add a onchange method.</p>
<pre><code>PluginEternicodeBootstrapdatepicker2.render('_id_of_input_', test)
function test(e){console.log(e);}</code></pre>
<p>Or direct via theirs library.</p>
<pre><code>if($('#frm_utstillinger_status_capture_Foedselsdato').datepicker){
  this.datepicker = $('#frm_utstillinger_status_capture_Foedselsdato').datepicker({ format: 'yyyy-mm-dd', weekStart: 1, daysOfWeekHighlighted: '0,6', autoclose: true, todayHighlight: true });
}</code></pre>
<p>How to change date when typing. Default value is 2.</p>
<pre><code>PluginEternicodeBootstrapdatepicker2.change_mode=2;</code></pre>
<ul>
<li>Mode 1, 120102, 2012-01-02.</li>
<li>Mode 2, 20120102, , 2012-01-02.</li>
</ul>
<p>If a number is set and user leave field a date will be provided according to the value.</p>
<ul>
<li>Set value 10 will render a date ten days from now.</li>
<li>Set value -10 will render a date minus ten days from now.</li>
</ul>

<a name="key_1"></a>

## Widgets



<a name="key_1_0"></a>

### widget_include

<p>Include in head.</p>
<pre><code>type: widget
data:
  plugin: eternicode/bootstrapdatepicker2
  method: include</code></pre>

