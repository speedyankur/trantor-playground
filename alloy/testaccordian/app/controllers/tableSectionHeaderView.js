var args = arguments[0] || {};
$.label.text = args.text || '';

function toggleSection(e) {

	var rows = $.section.getRows();
	Ti.API.info("-" + rows.length);

	_.each(rows, function(row, index) {

		if ($.section.collapse) {
			row.height = Ti.UI.SIZE;
		} else {
			row.height = 0;

		}
		
	});
	$.section.collapse = !$.section.collapse;
}