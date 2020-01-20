sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.federalmogul.Z_WM_TO_MONITOR.controller.App", {
		onInit: function () {
		},
		onSmartTableInit: function() {
			setInterval(() => this.byId("smartTable").rebindTable(), (1 * 60000));
		}
	});
});