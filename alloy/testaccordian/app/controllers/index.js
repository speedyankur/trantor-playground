var data = [];

var args = {};
args.text = "Section1"
var section1 = Alloy.createController('tableSectionHeaderView', args).getView()
section1.collapse = false;
for (i = 0; i < 2; i++) {
	var args = {};
	args.title = "Username";

	var row = Alloy.createController('peopleRowItem', args).getView();
	section1.add(row)

}
data.push(section1);

args = {};
args.text = "Section2"
var section2 = Alloy.createController('tableSectionHeaderView', args).getView()
section2.collapse = false;
for (i = 0; i < 3; i++) {
	var args = {};
	args.title = "Username";

	var row = Alloy.createController('peopleRowItem', args).getView()
	section2.add(row)

}
data.push(section2);

args = {};
args.text = "Section 3"
var section3 = Alloy.createController('tableSectionHeaderView', args).getView()
section3.collapse = false;
for (i = 0; i < 4; i++) {
	var args = {};
	args.title = "Username";

	var row = Alloy.createController('peopleRowItem', args).getView()
	section3.add(row)

}
data.push(section3);

$.tableView.setData(data);

$.index.open();
