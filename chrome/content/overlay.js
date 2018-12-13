var sibPref = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);

var selenium_ide_button = {
  
  errorIDE: function(){
    var sibstringsBundle = document.getElementById("sib-string-bundle");
		var errorIDE_message = sibstringsBundle.getString('errorIDE_message');
		alert(errorIDE_message);
    window.gBrowser.selectedTab = window.gBrowser.addTab('http://seleniumhq.org/projects/ide/');
  },
  
	sidebarCaller: function(){
    try{
      toggleSidebar('viewSeleniumIDESidebar');
    }catch(err){
      selenium_ide_button.errorIDE();
    };
	},
	
	popupCaller: function(){
    try{
      SeleniumIDE.Loader.openRecorder();
    }catch(err){
      selenium_ide_button.errorIDE();
    };
	},

	onToolbarButtonCommand: function(){
		var m = sibPref.getCharPref("extensions.selenium_ide_button.buttonGoTo");
		if (m=="popup"){
			this.popupCaller();
		}else if (m=="sidebar"){
			this.sidebarCaller();
		};
	},
};