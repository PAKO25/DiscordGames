/**
 * @name DiscordGames
 * @version 0.2.0
 * @description Simple plugin that adds online games in specific discord channels.
 */
/*@cc_on
@if (@_jscript)
    
	// Offer to self-install for clueless users that try to run this directly.
	var shell = WScript.CreateObject("WScript.Shell");
	var fs = new ActiveXObject("Scripting.FileSystemObject");
	var pathPlugins = shell.ExpandEnvironmentStrings("%APPDATA%\BetterDiscord\plugins");
	var pathSelf = WScript.ScriptFullName;
	// Put the user at ease by addressing them in the first person
	shell.Popup("It looks like you've mistakenly tried to run me directly. \n(Don't do that!)", 0, "I'm a plugin for BetterDiscord", 0x30);
	if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
		shell.Popup("I'm in the correct folder already.", 0, "I'm already installed", 0x40);
	} else if (!fs.FolderExists(pathPlugins)) {
		shell.Popup("I can't find the BetterDiscord plugins folder.\nAre you sure it's even installed?", 0, "Can't install myself", 0x10);
	} else if (shell.Popup("Should I copy myself to BetterDiscord's plugins folder for you?", 0, "Do you need some help?", 0x34) === 6) {
		fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)), true);
		// Show the user where to put plugins in the future
		shell.Exec("explorer " + pathPlugins);
		shell.Popup("I'm installed!", 0, "Successfully installed", 0x40);
	}
	WScript.Quit();
@else@*/
class CookieClicker {

	constructor() {

		this.games = [["deepio (channel)", "https://deeeep.io/"],
		["cookieclicker (channel)", "https://orteil.dashnet.org/experiments/cookie/"],
	["agario (channel)", "https://agar.io/#ffa"]];

		this.interval = setInterval(() => {
			let iframe = document.getElementById("iframee");
			this.games.every(game => {
				if (this.checkfor(game, iframe)) {
					return false;
				}
				return true;
			})

		}, 1000);
	}


	checkfor = function (what, iframe) {
		var getthatdiv = document.querySelector(`[aria-label="${what[0]}"]`);
		if (getthatdiv != null && getthatdiv != undefined && getthatdiv != "") {
			if (iframe == null || iframe == undefined || iframe == "") {
				this.loadgame(getthatdiv, what[1]);
				return true;
			}
		}
		return false;
	}


	loadgame = function (getthatdiv, link) {
		console.log(getthatdiv)
		while (getthatdiv.lastElementChild) {
			getthatdiv.removeChild(getthatdiv.lastElementChild);
		}

		var ifrm = document.createElement("iframe");
		ifrm.setAttribute("src", link);
		ifrm.style.width = "100%";
		ifrm.style.height = "100%";
		ifrm.id = "iframee";
		getthatdiv.appendChild(ifrm);
	};
}
/*@end@*/