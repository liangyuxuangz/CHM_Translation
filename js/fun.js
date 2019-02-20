function trans() {
	console.log(t_file_name);
	var x = document.getElementById("myiframe");
	console.log(x);
	var $doc = jQuery("myiframe").contents();
	var $send = $doc.find('p');
	console.log($send);
}
