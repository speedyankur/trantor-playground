Ti.include('/runtimeTester.js');

module.exports = function($) {
	if (!OS_IOS && !OS_ANDROID) {
		return;
	}

	addMatchers();

	describe('Issues Tab Controller', function() {
		validateUiComponent($, 'issuesTab', {
			api: 'Ti.UI.Tab',
			style: {
				id: 'issuesTab',
				title:" Issues"
			}
		});
		
		validateUiComponent($, 'tableView', {
			api: 'Ti.UI.TableView',
			style: {
				id: 'tableView'
			}
		});		

	});

	launchTests();
};