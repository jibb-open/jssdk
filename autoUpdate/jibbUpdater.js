import xapi from "xapi"

let version = "v3.10.0-exampleUpdate.v2"

let ApiKey = "YourApiKey"
let jibbCode = ""
let jibbJsSdkCode = ""
let updaterCode = ""
let firstInstall = true

// Add the Jibb panel to UI
async function addMacro(macro, name) {
	console.info("Adding  macro")

	xapi.Command.Macros.Macro.Save({ Name: name, Overwrite: true, Transpile: true }, macro)
}

async function enableMacro(name) {
	console.info("enableMacro  macro")

	xapi.Command.Macros.Macro.Activate({ Name: name })
}

async function checkReleaseVersion(Standby) {
	if (Standby != "Off") {
		let response = await xapi.Command.HttpClient.Get({
			Header: [],
			Url: "https://api.github.com/repos/jibb-open/jssdk/releases",
			ResultBody: "PlainText",
		})

		let result = JSON.parse(response.Body)

		console.log(result[0].tag_name)
		if (version != result[0].tag_name) {
			showAlert()
			updateCodes()
		}
	}
}

async function checkIfMacroInstalled() {
	if (firstInstall) {
		firstInstall = false
		await xapi.Command.Macros.Macro.Get({ Content: false, Name: "jibb" }).then(
			function (value) {
				/* code if successful */
			},
			function (error) {
				showAlert()
				updateCodes()
			}
		)
		await xapi.Command.Macros.Macro.Get({ Content: false, Name: "jibb_WebexXapi" }).then(
			function (value) {
				/* code if successful */
			},
			function (error) {
				showAlert()
				updateCodes()
			}
		)
	}
}

async function updateCodes() {
	let response = await xapi.Command.HttpClient.Get({
		Header: [],
		Url: "https://raw.githubusercontent.com/jibb-open/jssdk/webexDevicesMacros/jssdk/jibb_WebexXapi.js",
		ResultBody: "PlainText",
	})

	jibbJsSdkCode = response.Body

	await addMacro(jibbJsSdkCode, "jibb_WebexXapi")

	response = await xapi.Command.HttpClient.Get({
		Header: [],
		Url: "https://raw.githubusercontent.com/jibb-open/jssdk/webexDevicesMacros/autoUpdate/jibb.js",
		ResultBody: "PlainText",
	})

	jibbCode = response.Body
	jibbCode = jibbCode.replace("YourApiKey", ApiKey)

	await addMacro(jibbCode, "jibb")

	response = await xapi.Command.HttpClient.Get({
		Header: [],
		Url: "https://raw.githubusercontent.com/jibb-open/jssdk/webexDevicesMacros/autoUpdate/jibbUpdater.js",
		ResultBody: "PlainText",
	})

	updaterCode = response.Body

	await addMacro(updaterCode, "jibbUpdater")

	await enableMacro("jibb")
	await enableMacro("jibbUpdater")

	xapi.Command.Macros.Runtime.Restart()
}

function showAlert() {
	xapi.Command.UserInterface.Message.Alert.Display({
		Duration: 60,
		Text: "updating JIBB macro",
		Title: "Update might take up to 3 minutes",
	})
}

function reactToJibbClick() {
	xapi.Event.UserInterface.Extensions.Panel.Clicked.on((value) => {
		if (value.PanelId == "jibb_panel") {
			checkReleaseVersion("on")
		}
	})
}

async function checkForUpdateEverySixHours() {
	setInterval(checkReleaseVersion, 21600000, await xapi.Status.Standby.State.get())
}


checkIfMacroInstalled()
reactToJibbClick()
checkForUpdateEverySixHours()
