/*!
 * jquery.expects
 * Ask jQuery to expect and accept incoming modules.
 *
 * Copyright (c) 2011 Jason Ramos
 * www.stackideas.com
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

$.expectations = {};

$.expects = function(name) {

	var id = $.version + "/" + name,
		module = globalModule(id),
		localModule = $.module.registry[name];

	// Double check with our module registry first
	if (localModule) {

		return localModule;
	}

	// Module exists
	if (module) {

		// Fulfill expectations.
		$.expectations[id] = module;

		// Export module to jQuery
		module.exportTo($);

		return module;
	}
}

$.isExpecting = function(id) {
	return (typeof $.expectations[id] !== undefined);
}

