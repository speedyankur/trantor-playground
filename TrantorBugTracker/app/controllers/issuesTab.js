var data= [];

	var args={};
	args.title="Issue";
	args.leftImage="/images/busy-icon.png";
	var issueRow = Alloy.createController('issueRow',args).getView();
	data.push(issueRow);
	
	
	args.title="Issue";
	args.leftImage="/images/green-icon.png";	
	var issueRow = Alloy.createController('issueRow',args).getView();
	data.push(issueRow);	
	
	args.title="Issue";
	args.leftImage="/images/warning-icon.png";	
	var issueRow = Alloy.createController('issueRow',args).getView();
	data.push(issueRow);	
	
	args.title="Issue";
	args.leftImage="/images/green-icon.png";	
	var issueRow = Alloy.createController('issueRow',args).getView();
	data.push(issueRow);
	
	args.title="Issue";
	args.leftImage="/images/green-icon.png";	
	var issueRow = Alloy.createController('issueRow',args).getView();
	data.push(issueRow);	

$.tableView.setData(data);