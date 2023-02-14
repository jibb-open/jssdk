/**
 *
 *
 * <h2>webex Device Macro Camera Presets example.</h2>
 * The device user should be able to walk into the meeting room, tap on the JIBB icon, then using the UI be able to select which whiteboard they want to detect.
 * <h3>Description:</h3>
 * <ul >
 *  <li> start and stop button.
 *  <li> camera will snap to whiteboard that admin preset.
 *  <li> user have a camera control tab.
 *  <li> Admin can set two camera postion and link them to buttons so user can switch between two whiteborads.
 * </ul>
 *  <img src="./img/camera-preset1.png" />
 *	<img src="./img/camera-preset2.png" />
 *  <ul style="list-style: none;">
 *  <li>Click on source to see the script example.
 * </ul>
 * <h3>File Description</h3>
 * <ul style="list-style: square;">
 *  <li> jibb.js -> entry point
 *  <li> jibbWebexXapi.js -> JIBB library for Webex devices
 * </ul>
 * <h3>Installation</h3>
 * <ul style="list-style: circle;">
 *  <li> downalod webexMacrosExamples.zip from https://github.com/jibb-open/jssdk/releases.
 *  <li> Log into your Cisco Room Device as and admin.
 *  <li> Navigate to the Macro Editor.
 *  <li> Navigate to the setup -> settings -> HttpClient, set Mode to On.
 *  <li> <img src="./img/https-settings.png" />
 *  <li> Import and Save each of the following Macros into the Room System: jibbWebexXapi.js found under jssdk folder and jibb.js from desired example.
 *  <li> Edite jibb.js by adding your personal Jibb ApiKey to in line 49, to get your ApiKey visit https://app.jibb.ai/ then navigate to personal settings and click Generate.
 *  <li> Edite jibb.js by add desired Email to receive a pdf Recording of the session to in line 50.
 *  <li> Save and activate jibb.js .
 *  <li> After refreshing the webage you will find  jibb panel automatically added in the UI Extension Editor. variable uiExtension line 268 is is the exported XML panel
 *  <li> Using touch panel create two camera presets "Jibb" and "Jibb2"  (case sensitive) so that camera postion will be set automatically
 *  <li> If not set script will work but camera postions needs to be set manually before clicking start.
 * <li> <img src="./img/camera-presets.png" />  
 * </ul>
 *
 * <h3>Click on source to see the script example.</h3>
 * @name 3-webexDeviceExample Camera Presets
 * @memberof Examples
 *
 */


 import xapi from "xapi"
 import * as JIBB from "./jibb_WebexXapi"

 let ApiKey = "YourApiKey"
 let RecordingEmail = "YourEmail"
 let MeetingAPI = JIBB.Meeting
 let Auth = JIBB.Auth
 let EventBus = JIBB.EventBus
 let Recording = JIBB.Recording

 const SurfaceType = {
		PAPER: "PAPER",
		WHITEBOARD: "WHITEBOARD",
 }

 function Config(apiKey) {
		this.apiKey = apiKey
		this.webURL = "https://app.jibb.ai"
		xapi.Command.WebEngine.MediaAccess.add({ Hostname: "app.jibb.ai", Device: "Camera" })
		JIBB.Auth.configure({ apiKey: apiKey })
 }

 let SessionDetails = {
		meetingId: "",
		meetingToken: "",
		userToken: "",
		meetingUrl: "",
		cameraId: "",
		clientId: "",
 }

 async function generateMeetingLink() {
		console.log("generating meeting link ...")
		let title = await createTitle()
		await gettingUserToken()
		await createMeeting(title)
		SessionDetails.meetingUrl = `${config.webURL}/remote/${SessionDetails.meetingId}?user_token=${SessionDetails.userToken}`
 }

 async function createTitle() {
		let title = String(await xapi.Config.SystemUnit.CustomDeviceId.get())
		if (String(title) == "") {
			title = "webex"
		}
		return title
 }

 async function gettingUserToken() {
		SessionDetails.userToken = await Auth.getUserToken()
 }

 async function gettingMeetingToken() {
		SessionDetails.meetingToken = await MeetingAPI.getMeetingToken({
			meetingId: SessionDetails.meetingId,
			permission: 2,
		})
 }

 async function createMeeting(title) {
		SessionDetails.meetingId = await MeetingAPI.createMeeting({ title: title, isTemporary: true })
 }

 async function autoStartMeeting() {
		console.log("autoStartMeeting ...")
		hideJibbPanel()
		hideCameraSelfView()
		await generateMeetingLink()
		await openMeetingUrlInWebView()
		await sleep(10000) //wait until page finshed loading, could be less than 10s.
		await getWebClinetId()
		await getCameraId()
		await gettingMeetingToken()
		await startTheMeeting()
		await sleep(5000)
		startRecording()
 }

 async function startTheMeeting() {
		let req = {
			meetingToken: SessionDetails.meetingToken,
			surfaceType: SurfaceType.WHITEBOARD,
			fixedCorners: true,
			cameraId: SessionDetails.cameraId,
			clientId: SessionDetails.clientId,
			enableColor: true,
		}
		await EventBus.startStream(req)
 }

 async function getAvailableCameraList() {
		return await EventBus.getCameraList(SessionDetails.clientId)
 }
 async function getCameraId() {
		let cameraList = await getAvailableCameraList()
		if (cameraList.length) {
			SessionDetails.cameraId = cameraList[0].id
		} else return Promise.reject("No Camera Access")
 }

 async function getWebClinetId() {
		let statusList = await EventBus.getClientStatusList()
		SessionDetails.clientId = statusList[0].id
 }

 async function openMeetingUrlInWebView() {
		await xapi.Command.UserInterface.WebView.Display({ Title: "jibb", Url: SessionDetails.meetingUrl })
 }

 async function stopMeeting() {
		console.log("stopMeeting ...")
		await stopRecording()
		closeWebView()
		hideCameraSelfView()
		hideJibbPanel()
 }

 async function startRecording() {
		console.log("startRecording ...")
		let title = await createTitle()
		await Recording.startRecording({
			alternativeEmail: RecordingEmail,
			sensivityLevel: 2,
			meetingId: SessionDetails.meetingId,
			meetingToken: SessionDetails.meetingToken,
			title: title,
		})
 }

 async function stopRecording() {
		await Recording.stopRecording()
 }

 async function setCameraPosition(postionName) {
		let PresetId = await getCameraPresetId(postionName)
		if (PresetId != -1) {
			xapi.Command.Camera.Preset.Activate({ PresetId: PresetId })
		}
 }

 async function getCameraPresetId(postionName) {
		let json = await xapi.Command.Camera.Preset.List({ CameraId: 1, DefaultPosition: false })
		let jsonArray = json["Preset"]

		var filteredObj = jsonArray.find(function (item, i) {
			if (item.Name === postionName) {
				return item
			}
		})
		if (filteredObj != undefined) {
			return filteredObj["PresetId"]
		} else return -1
 }

 function closeWebView() {
		xapi.Command.UserInterface.WebView.Clear({ Target: "PersistentWebApp" })
 }

 function hideCameraSelfView() {
		xapi.Command.Video.Selfview.Set({
			FullscreenMode: "Off",
			Mode: "Off",
			PIPPosition: "LowerRight",
		})
 }

 function showCameraSelfView() {
		xapi.Command.Video.Selfview.Set({
			FullscreenMode: "Off",
			Mode: "On",
			PIPPosition: "LowerRight",
		})
 }

 function hideJibbPanel() {
		xapi.Command.UserInterface.Extensions.Panel.Close()
 }

 async function zoomIn() {
		let value = await xapi.Status.Cameras.Camera[1].Position.Zoom.get()
		value = parseInt(value) - 100
		xapi.Command.Camera.PositionSet({ CameraId: "1", Zoom: value })
 }

 async function zoomOut() {
		let value = await xapi.Status.Cameras.Camera[1].Position.Zoom.get()
		value = parseInt(value) + 100
		xapi.Command.Camera.PositionSet({ CameraId: "1", Zoom: value })
 }

 async function moveUp() {
		let value = await xapi.Status.Cameras.Camera[1].Position.Tilt.get()
		value = parseInt(value) + 100
		xapi.Command.Camera.PositionSet({ CameraId: "1", Tilt: value })
 }

 async function moveDown() {
		let value = await xapi.Status.Cameras.Camera[1].Position.Tilt.get()
		value = parseInt(value) - 100
		xapi.Command.Camera.PositionSet({ CameraId: "1", Tilt: value })
 }

 async function moveRigt() {
		let value = await xapi.Status.Cameras.Camera[1].Position.Pan.get()
		value = parseInt(value) - 100
		xapi.Command.Camera.PositionSet({ CameraId: "1", Pan: value })
 }

 async function moveLeft() {
		let value = await xapi.Status.Cameras.Camera[1].Position.Pan.get()
		value = parseInt(value) + 100
		xapi.Command.Camera.PositionSet({ CameraId: "1", Pan: value })
 }

 async function resetCamera() {
		xapi.Command.Camera.PositionReset({ Axis: "all", CameraId: 1 })
 }

 // Add the Jibb panel to UI
 async function addPanel() {
		console.info("Adding  panel")
		const xml = uiExtension
		await xapi.Command.UserInterface.Extensions.Panel.Save(
			{
				PanelId: "jibb_panel",
			},
			xml
		)
 }

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

let config = new Config(ApiKey)

 // Startup!
 async function main() {
		addPanel()
		reactToJibbClick()
		reactToStartAndStopClick()
 }

 function reactToStartAndStopClick() {
		xapi.Event.UserInterface.Extensions.Widget.Action.on((event) => {
			if (event.Type == "released") {
				switch (event.WidgetId) {
					case `jibb_start_toggle`:
						if (event.Value == "start") {
							autoStartMeeting()
						} else if (event.Value == "stop") {
							stopMeeting()
						}
						break

					case `jibb_zoom_in`:
						zoomIn()
						break
					case `jibb_zoom_out`:
						zoomOut()
						break

					case `jibb_camera_control`:
						switch (event.Value) {
							case `up`:
								moveUp()
								break
							case `down`:
								moveDown()
								break
							case `right`:
								moveRigt()
								break
							case `left`:
								moveLeft()
								break
							case `center`:
								resetCamera()
								break
							default:
								break
						}
					case `jibb_Camera_preset`:
						console.log("start toggle" + event.Value)
						if (event.Value == "position_1") {
							setCameraPosition("Jibb")
						} else if (event.Value == "position_2") {
							setCameraPosition("Jibb2")
						}
						break
					default:
						break
				}
			}
		})
 }

 function reactToJibbClick() {
		xapi.Event.UserInterface.Extensions.Panel.Clicked.on((value) => {
			if (value.PanelId == "jibb_panel") {
				setCameraPosition("Jibb")
				showCameraSelfView()
			}
		})
 }

 const uiExtension = `<Extensions>
  <Version>1.9</Version>
  <Panel>
    <Order>3</Order>
    <PanelId>jibb_panel</PanelId>
    <Origin>local</Origin>
    <Location>HomeScreenAndCallControls</Location>
    <Icon>Custom</Icon>
    <Name>JIBB</Name>
    <ActivityType>Custom</ActivityType>
    <CustomIcon>
      <Content>iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAkU0lEQVR4nO3deXRU5f0/8PddZp9JMkmAQEAWiYggaFCU4k7tKVAEUY5aFH6HoihC+1PAHu3p+eGh9Yu2Vq14WqVUxdoq9mj7q9a6VKygyCJUFEFZwuIvkH2Syax3+/0xeW4mYSbrTOYmz+d1zhw0meXeyX3e93me+9znEQzDMEAI4ZKY6w0ghOQOBQAhHKMAIIRjFACEcIwCgBCOUQAQwjEKAEI4RgFACMcoAAjhGAUAIRyjACCEYxQAhHCMAoAQjlEAEMIxCgBCOEYBQAjHKAAI4RgFACEcowAghGMUAIRwjAKAEI5RABDCMQoAQjhGAUAIxygACOEYBQAhHKMAIIRjFACEcIwCgBCOUQAQwjEKAEI4RgFACMcoAAjhGAUAIRyjACCEYxQAhHCMAoAQjlEAEMIxCgBCOEYBQAjHKAAI4RgFACEcowAghGMUAIRwjAKAEI5RABDCMQoAQjhGAUAIxygACOEYBQAhHJNzvQGkpwzAaPk38R8thJZ/hLb/35cMo+PfCznYJpKSYBid/bWIZRg6AB2A1PVCZGhIBEQ3XkO4QTWA/sDQE/8KIsxWmxaBEa2DETkDXWkCdBWCKAO2PAj2fAiuoRBkNyBIyW/U8m92g8AIh4F4PH3geDwQZDr0rID+ClZnaGYh1ptPQD35f6Gd+Qh63V4Y0RoYehzQVSRqBiIgyoAgQbDlQfCNhlx0EcSiKZBKr4foOSfL22oAgoDoG29A3bMHgssF6Hrr7wUBUBQ4Fy+GfOGFid+J1A2VSxQAVtZS+PXgUcQ//x8ox/8KI9wIABBkJGoE7AEJiX4BDdBVGOoZGKEziP2/HYAICK48yMO+B+flv4XgLklUBrLVJFBVGNFoonCnCABoWnY+l3QbBYBVtRR+tWILojt+Aj14BoJdguBwtjxBT+r7S+4IFBM1fEECJAGCXUz8KtYE7fT7iRoCBLTtOMwwQUgU/vZnd/Zz6ouwDAoAKzJ0QJAQ/+opRD/53xBEAYLLnajqG52dPZMKtmEk3kuUYWgCbKNvheAc1KZZQfhGAWA1hg4IItRT/0R0x30QZFuiiq8raV4gtD2jmhd1koNAA0RAHjErW1tN+ikKACtp6UQzlCZEd9yb+JkgpT7rs5/r8dYWgICWarbU0kmAxC+0OMT8kZBLrml5LXW8kQQKAEvRAMhQDj0LveF4Sy+6evbTBAFGPApBliC4h0JwDwNEG6CEYESrYMQCMGLRROXA7kxU/8+ZB9h8Zg2DEIACwEKMxFlbV6EcfQmCLLRe/29DANQ47Of/L9jO+xHEwkmJ6/0QAUODoYZhNB2BWrMLWuU7UE+9DRg6bCNvxNmjBgnvKACsoqX6r9Xuhh44CEjS2QEgiDCUGBzlP4Oj/Bdnv4cgJgYBFU+BvXgKMP4e6LV7oJx6E9KgS5GoElDnH2lFAWAZiYE8Wu1uGHEVgrN99V8E1BikwgvguOj/tA4LTlWgDcP8nVh8CRzFl4DO/CQVCgDLSPTkG01HUpdVUYQRA+SRcxPtfV1tuaaf6q0EmEOG2wwjJqQtCgDLSASAHqtLlN3292gZRmKkb/54JPoLuvq2VPBJenR0WEVLQTXigdS/N3QIEiDY/Wi53tdXW0YGMAqAfiPRSQjJ2flTCekiCoB+hzrzSOZQABDCMQoAQjhGAUAIxygACOEYBQAhHKMAIIRjFACEcIwCgBCOUQAQwjEKAEI4RgFACMcoAAjhGAUAIRyjACCEYxQAhHCMAoAQjlEAEMIxCgBCOEYBQAjHKAAI4RgFACEcowAghGMUAIRwjAKAEI5RABDCMQoAQjhGAUAIxygACOEYBQDpewYtcGoVFAAkcwQBMAwYwSAgpjm0BAGw2fp2u0haFACkY7retTO2YSQKfzwOvboagiQlXtv+OZIEwetN/L8gZH57SbfIud4AYnHsTN5SwAGkLri6DkgS1K++gt7QAMFuPzs4dB1wuSAWFqZ/H9KnqAZAztZy5lb370d0yxboVVWJwiqKiYcgnP2QJOjV1Yj94x+pq/+iCKgqpNLSRA2A+gEsgWoA5GwtZ2Zlzx7Et2+H8tlnkM89F9K4cRCHDoVYVATB40k8V1Gg19ZC/eYbKNu2wQgGIdhsKQu4oWmQzz8/8f66TjUAC6AAIG0ZBiAIMJqaoB47BtHvB1QVyv79UP77XwgOB2C3Q5BbDh1dhxGPw4hGE9X+VIVfEABNg5iXB1t5eevPSM5RAJC2WgJAPXQIRiAAweUCdD3xL5A4cysKjHi89TWiCMHtbttPkEwUYYTDsH/vexD8fvMzSO5RAJC2Wgqm+uWXbQtzco8+6w8AWp/TvsefkSQYwSDk8ePhmDGD2v4WQwFA2mqp/msVFYnqfroC21lBbukcNIJBSOecA9fCha3NAzr7WwYFgOUk9ayjfUHJcsHRNECSoOzbB/3MGQj5+a3bwgp8uoJvbjMS/QKxGKDrsE2dCufNN0Pw+ajwWxAFgNXoCqAZgBYDjPYDaXD2zzKppVovDhsG+cILoX37LYxw2LzGL0hS24JublfLICBVBTQNgtMJadQoOK6+GvIll7Q+hwq/5VAAWIzgKoHgGwrB5gagtf2loUGQ3eyZWfjwxHvKZWWQy8qgV1VBPXYM+qlT0KurodfVAZEIDDY60DASHYCiCLjdkAYPhjRiBOTx4yGNHt1a4KnwW5ZgGNQrYylaDIahtVS7z/61IDkAIcvjt9IUWCMeB6JRGJFIormgaYlLgm434HQmrv8n0/X09wQQS6AAIOklX9brakFmA3zojN8vUABYTmd/jhwXrI46AUm/Q30AlmPxgkQFfUChBhohHKMAIIRjFACEcIwCgBCOUQAQwjEKAEI4RgFACMcoAAjhGAUAIRyjACCEYxQAhHCMAoAQjlEAEMIxCgBCOEYBQAjHuJwPoKtzoAi9vPe9K5/T28/o6udkSia2N5P6at+ttt+ZQjMCkW7TdR26rkMQBIgtU4UN1AKSzDAM6C0LoAiCYD76My4DIBwOm3/IdGRZhtPp7PFn6LqOePLyWSkYhgFZlmFrP5lmN8Xj8U73p7ckSYIoipAkKeXvNU1rEwh9QVVVKIqS1ULI9jndfuu6DsMwIIpivwwDbgLAMAwIggBVVXHbbbfh4MGDcLlcZxUcURQRDAYxY8YMPPPMM93+HF3XIYoijh07hqVLl0JV1ZQHhiRJqK+vx9KlS7FixQpompb2IOtofwzDwPLly7F371643e6sBIEgCHC5XHA4HCguLkZxcTGGDRuGMWPGYOLEiRg+fDhkubU12d196S5VVSHLMp5//nk8+eSTKCoqgqZpnb+wmwzDgN1uh9vtRl5eHgYPHoyhQ4di5MiRGD9+PMrKytqcJDRN63dBwGUfQDAYRGNjY8ozJwuAcDjcq8/QNA3ffvstFEWBKIpntVVlWUZtbS0CgUCvPgcAqqurcfLkSXg8nqzVBNiZTtM08+FyueDz+TB69GhMnz4d1157LS677DKz8LMwzJbGxkYcP34ckUgEqqpm5TMMwzCr/qqqQlVVOBwOuN1ulJSU4NJLL8U111yDa6+9Fp6WJdOzHYCZxGUAyLJsPlIFgCzLvf4DCoIAu91uVotTBYDdbm9z5uwpm80Gu90Ou92etQBIPquxtq+u64jFYvjiiy+we/dubNy4EeXl5bjjjjtwww03mPudrTOiLMtwOByw2+1ZDRq2/cn7rWkaTp06hcOHD+PVV1/Feeedh1mzZuHWW29FaWmp+fe2em2Ay8uALNU7ewy0z+nNg3X8sYNfVVXoug5JkuByuVBYWAibzYadO3di+fLluOmmm7B9+3azwGSjpdkX+52878n7zQK+oKAAXq8XFRUVeOyxxzB//nxs3ry5TVhYGZcBQDKHFRBN02AYBjweD/Ly8rBr1y788Ic/xJNPPmm2iwdadxNrEum6DrvdjuLiYtTV1eGBBx7Aj370I1RWVkIURUuHAAUAR5IvXXX10V0sDHw+H9xuNx599FGsXr0aqqpmrMbTXX2x34ZhmJ2TRUVF+Oc//4lFixbh5MmTKZuAVkEBwBFWOJOr8509gLaXwrray8165f1+PzZv3oyHH37YLAh9XRh6ut+CIECSJMiy3OX9ZkFQWFiIQ4cOYcmSJaipqbFsDYjLTkAeCYLQ7Q5H1tsfjUYRi8UgCILZ6SbLcpuBMamwKnJxcTE2bdqEsrIyLFq0yGxD9xWbzdatAsgCIx6PIxaLQdM0c7/Ze3V22VFVVeTn5+PAgQN48MEH8fvf/96Sg6YoAAY4QRAQjUYxadIkPP74412ujhqGgXA4jHA4jNraWlRVVeHIkSM4cOAAjh07hoaGBtjtdrhcrk7P6rquw+Px4NFHH8W0adNQVlaW9UuEbB9kWcbTTz+NUaNGmYOVOhONRhEOh1FfX4/q6mqcOnUKBw8exIEDB1BTUwMA8Hg8nbbvWU3gzTffxObNm7FkyZI+D7/OUAAMcKwn2uPxoKysrNfvp6oqjh8/jn//+9944403cODAgU4vQbIBNYFAAL/+9a/x7LPP9no7OsPO+IIgYOzYsTjnnHN6/Z5VVVX46KOP8O677+LDDz9EJBLpdOwF++6fffZZzJ07F0VFRX0Sfl1lja0gWZfcDu5uezj58pcsyxg7diyWLVuGv/3tb1i/fj38fj/C4XCHYydUVYXX68UHH3yAgwcP9mnveCwWMwfy9GS/WXV/yJAhWLBgATZu3IhXX30VU6dORTAY7LAw67oOh8OBkydP4tVXX+2T/e0OCgCOiKLYo0dyR1jyZT+n04mFCxfitddew9ixYxEKhTosDJIkobm5Gf/4xz8A9O2dfL3ZbxZsrE/DMAyUl5fjT3/6ExYsWNBpCBiGAYfDgbfeeguqqlrm7A9QAJBuYoVJkiSzx3v06NHYtGkTBg8ejHg8nraNy66Xf/zxx/1quCzDrgqwTkCn04nHH38cM2fO7DAEWC3g6NGjOHLkiPkzK6AAID3GriyoqopRo0ZhzZo1HQYAANjtdlRUVKC2thZA385lkEmSJJk3/6xduxbFxcVpb/wCErWvUCiEL774AgAFABlAWG1g3rx5uOCCCxCNRlMWBNYpF41GceLECfNn/RULgdLSUtxwww1obm5OWwsQRRGxWMzcb6ugACC9xq402O12TJ8+HZFIJG31XpIkxGIxVFdXA+jfAcAYhoHrrrsOTqezwyshsiyjqqoKACzT/KEAIBnBCvK4cePMGkE6uq4jGo321aZlFRshOH78eOTl5XXYDBAEAbFYrI+3sGMUACQjWNV30KBBcDgcWZmgw8ry8vLg9Xo7DD42IY2VUACQjHI6nZap3vYlQRBgs9k6DADDMHo1zVw2UACQjIpGox2e/Q3DgM1mg9/v78Otyj7DMMz7JdLRNA1erxcAXQUgAwy7H6CmpgaxWCxlLYB1FjqdTowaNQoALDUopjcaGho6HQgFACNGjABgnc7PgfHtk5xj99F/+eWXHd7woigKhg0bZhaE/o7NdnTgwAEEg8G0HaDs7H/RRRcBsE7wWWMrSL/Gru+HQiF89NFHcLlcKZsBkiQhGo1i6tSp5s1DVrozrqcEQcDWrVsRjUZT1nxEUYSiKCgpKcGECRPM11gBBQDpNXab7ZYtW3D48GE4nc6UZ0FW/Z89ezYA61SDe4rNiXjkyBG89dZb8Hq9KYOPDX6aPXu2OXU7BQAZENg0WBUVFXjqqafSrk0gSRJCoRCmTJmCyy+/HIZh9OurBawQa5qGdevWoa6uLuVVAEEQoCgKBg8ejMWLF+doa9OjACA9wm6ZlWUZJ06cwNKlSxEIBNIWAnYP/Jo1azodKGRl7AYodmfkmjVr8P7778Pn86Vt9gSDQSxevBjDhg2z1FwAAAUAV3o7PTabIgxovbX4/fffx+23347Dhw+nXGkJSBSChoYGrFixApdddlmfF4JMTAvObgNmN0CdOHECd955J1555RXk5+en3G9ZlhEIBHD55Zfj7rvvtlTVn6EZgTjS2znpku+L379/P15++WVs2bIFoiimnBmH3T5bU1ODm2++Gffdd595B11fYsN1e7psV/Jrzpw5g9deew0vvfQSKisrUVBQkPLMzwr/uHHj8PTTT5tTp1EAkJwwDMNcSLM7ByKbSae6uhoVFRX473//i507d2Lfvn1obm6Gz+dLuQCGJElQVRWNjY2444478Mgjj+RsUkxFUczZgLoTPoqioLm5GUePHsWhQ4ewa9cu7NixA1VVVXC5XMjLyzur8LOQqaurw8UXX4xnn30WI0aMsFzVn6EAGODYbDTffPMN5s2b163XiaKIeDyOpqYmNDc3IxKJoLm5GQ6HAy6XC/n5+WbVGGidLETXdTQ1NcHj8WDt2rVYtmyZ+Z59VfjZZ2mahpUrV8LhcHS736GxsdFcJzIUCpmLpBYUFJjNAoYV/HA4DEVRcPPNN2PdunXw+/2WLfwABcCAxwpyKBTCgQMHuv365Om0bDYbiouL28yZx7D/D4fDcLlc+O53v4tVq1bhwgsvNNu+uaj+GoaBI0eO9KjTMXlqsIKCAgA4a79Z30gsFoNhGJg8eTKWLVuGuXPnms+3auEHKAC4IYoiXC5Xt1+XXHBYD3gq7Mx42WWXYe7cubjiiisAWKMAOByOHq/2w/5Nd3+DJEkoLCzEuHHjMG/ePMyePbvNIKdc73tnKAA4ko0bUNgtrueccw5uu+02zJgxAyUlJW1+n+sQyNZqRLquw+v1Yv78+Zg1axYmTpxo/k4URbPD02odf8msHU/E8tiAnq+//hoPP/wwZsyYgVmzZuGxxx7Dvn372iyP3l+v/acjiiKam5uxceNG3HTTTZg+fToeeOABvPPOO+awYKuvEEwBQDKCneni8Ti++uorPPHEE7jllluwaNEi/Oc//+k3y2X3BAu406dP46WXXsJdd92FOXPm4IUXXkA8HjdrA1ZEAcCRnqySm2qO/I6qtZIkweVywe/3QxAEfPDBB1i8eDFWrVqF2tranCyX3ZP9Tt53WZbNfU/XmSkIAux2O/x+P9xuNw4fPoyHHnoICxYswGeffQZJkiwZftQHwAld16EoSrdfx0bCsdezAsEWymTDetnB3b6qn5eXB13X8fLLL+Pzzz/HM888g3HjxvXpugCsh7672CVO9r213+/2i4Qmdxa6XC54PB7s3bsXCxcuxNq1a3HrrbfmvD+kPQqAAY5NRFlWVob77ruv2wOBVFVFNBpFPB5HXV0dampqcPr0aXzzzTc4ffo0GhoaYLPZ4PF4AJzd0cgKRFFREQ4fPoxbbrkFL774IiZPnpz1wsDWJFy7di0KCwu7NRTXMAyEQiFomoZAIICqqipUV1fj8OHD+Pbbb9HY2AjDMOD1es3pwZOx0PT5fFBVFffffz8CgYA5JNgqIUABMMCxXvri4mLMnDkzY+8bjUbx9ddfY8eOHXj33XexZ88eAEh7S6yqqvB4PGhoaMDy5cvxyiuvZHWEHOtvkCQJP/jBD+Dz+TLyvvF4HKdOncKuXbvw/vvvY/v27QgEAsjLywNw9i3OrKaTl5eHX/ziFygpKcG8efMsEwK53wKSdSwE2EKX7N/uPthwWiAx+efkyZNx9913469//Suee+45XHrppWhqakrbTmaz4lRUVOCnP/2pOaYg21cHmpqaer3frDlgt9tx7rnn4rbbbsOmTZvwl7/8BfPnzzfnQkxVqFnNw+l04uc//zm+/vpry3SIUgBwgt2Y05sHWyAUaO0bYAf997//fbzyyiv4yU9+glAolLZQq6oKv9+PDz/8EJs3bzZ70LMpE/vN2vzt7w4sLy/Hhg0b8MQTT8Bms5m9/u2x9QHr6+vx6KOP5mxkZHsUAKRHkhcJBRJnd5vNhjVr1uCBBx5AOBzucJFQl8uF5557DvX19Tm5MtBTyfvNzuKapuHGG2/Ehg0bYLPZzBmS2lNVFXl5edi6dSs++eSTszoRc4ECgGQEuxrAbr6ZM2cOmpubU/b0s7PhqVOn8O677wLov9ODsTBQFAXXXXcd1qxZ0+HswGysxEsvvWS+PpcoAEjGsGqtYRhYvXo1CgoKOrz0KAgC3nnnHQDok6ZANsmyDF3XsWjRIlx88cVpQ0DXdbjdbnz66ac4c+aM+X3lCgUAySh20I8ZMwZXX301QqFQ2lqA0+nE/v37UVdXZ4n2cG+wgmyz2XDjjTemXSadLRJaW1uLHTt2AEBOmwEUACTjWAfZFVdckbZgs4IQCATw5Zdfmj/rz9i+Tp8+HX6/P+2dk2yeBbbfuQw/CgCScWyo8Lhx4+D1ejssCOFwGMeOHQNgneWyeooV5FGjRqGwsDDtSsFsKfUTJ04AyO1S4RQAJOPYQc9WCk438pD1gtfW1vb1JmaV3W7HkCFD0l4NABLhV1tba1b/c1X74TIAuvJl9/fqqBWwYbLpvkt2K3FzczOA3PeI9xYr7OkmSWXYfjc0NPTo/oxM6t/feA+oqmr20KY6MNkf0eFwAKAg6I3k+QI7kutCkGkdzSBkNdwFQCwWQzAY7PBso+s68vPzAVAA9EYwGEzbDmbYpKXsv/sztv1sUtR0bXt2xcDpdOZ8dSTLBkDykMtMqq+vT3uJBmhtlyZPAkm6h62Ye+LECYTD4bTNgPbfdX8PAKaxsRGnT5+GLMtp94ndKUgBkCR59Zn2Q017ixXkyspKRKPRDgeeiKLYZl470n2CIGDv3r0Ih8Npa1tsLMCwYcPM1/RnLPjY2IaOAkBVVZSUlJjHYa72PecBkHyWT75hhV0nff311zNSC2B/iKNHj5pnpVQ0TYPT6URpaSmA/t8x1dfYNOThcBhvvvlm2uXCgNYAGDNmDID+HwBAYh9ef/11xGKxtMcOmyJs9OjRAHI7ECjn8wEkf0mVlZXYvXs39u7di08//RQVFRVQFAWTJ0/GmDFjzIOrN5/z+eefp30Ou7nD7XYPqIOyL6mqCpvNhj//+c84dOhQ2nXzRFFELBZDaWkpxo8fD6B/f9fsvv/9+/fj7bffTrtYKHuuy+XCJZdcAiC3+53TADAMAx9//DF27dqF3bt34+DBg2Yb3eVywel0IhQK4cMPP8S5557b4/Y4q2I1NTVh165dHZ6VVFVFaWkphg8f3ptd4xIr/Dt27MBvfvMbeL3eDptZ0WgU3/nOd8wlxftrbYsV/traWtx///1QVTXtSkRsFGBpaSnKy8vNn+VKTgNA13WsX78e27ZtQ0FBAex2OzweD7xer1lAZVnGG2+8gUWLFpmdSd1NTDYzzDvvvINjx46Z89S1xw7KSZMmdTiAhbTF+mxkWcaePXuwcuVKRCIROJ3ODqv/drvdnKWoP3YAsja/JEk4c+YMfvzjH+PQoUPw+Xxp95stHzZr1izzebkMgJx9MkvNq666Cj6fD3l5eebMqez6sa7r5sSKzz//fI+mV2aFOB6P44UXXoDNZuvw+YIgYNq0aeY2krO1v0LDZgresmULFi1ahLq6ug4LPxv8M2XKFFx55ZVmIbK65GXSWXNUkiTs2rULCxcuxMcff5z25AK0nZ5twYIFfbz1qeW8D+D666/Hc889B0VRUp4F2Oorv/rVr3D++efjqquugqqq5oQMHWEHqiRJ+O1vf4vPP/88bToLggBFUTBkyBBcc801AAZWByA7cLs7KSh7LdC6Vl772Wy2bduGTZs24YMPPoDD4eiw8AOJv6ksy1i9erUZ+tmsabErSz2p0bHXJB9vLKwOHTqEF1980ez0Y4ulpsNG/91///0oKyvL+dkfyGEAsOr8RRddhCuvvBLvvfdeyuWWWdIqioJ7770XGzZswNVXXw0g0eZMNUc9O/jYFYWNGzfi6aefbtO0aE8URTQ1NWHmzJkoKSmxxB8nU9idd7KcmT93JBLB8ePH8cknn+C9997D7t27EYvF4PP52kwRngq7FXbFihWYNm1an3zPrHbZW/F4HNXV1fjkk0+wdetWbN++HXV1dfD5fHC5XJ0W/ubmZkyePBkrVqywTPMy530AkiThrrvuwtatWzscM2632xEOh7Fs2TKsXLkSixcvhtfrTfl89seurq7GM888gz/+8Y9wu92dbovH48HSpUt7t1MWk3z/+dtvv93tGkAkEkEwGERtbS1qampQWVmJiooK1NTUIBAIQJZleDweOByOTptMsiyjoaEBV1xxBVatWpXVM3/y8uBvvvlml6cFb78semNjI6qqqlBZWYmTJ0+isrISDQ0NZs20oKAAmqZ1GHrsiofL5cL69evN+wSscILJaQCw6t+0adNw/fXX46233jK/0PZYp5GmaXjkkUfw+uuvY86cObj00ksxcuRIc/aZQCCAo0eP4rPPPsPf//53HD9+PO2UzQw7MOfPn49JkyZZ5o+TCSw8KyoqcM8993T79bqumzMKswkybTYbZFmG3+/v8ohN9h2ff/75eOqpp+B2u7N+FmTNuoceeqjbnYxsJeTkxVDYfvt8vjbzAXZEkiTEYjHYbDb87ne/Q3l5eZ8uitKZnPcBAIkv+2c/+xl2796N5ubmtCOoWMHMz8/HsWPHsH79eni9XrjdbthsNnP1mnA4jHA4DI/HkzZQGHaQ5OXl4Z577umXvdFdIYoinE5nt1+XvFQW6wRj31FXOklZkNbX12Pq1KnYsGEDhg8f3qchy+416I72+w20Ni27cjma9RsEg0H4fD5s2LAB1157raUKP2CBkYBsKOSoUaOwbt06RCIRAOkHR7DOLIfDgcLCQkiShEgkgsbGRgSDQcRiMdjtdhQWFpoztHb2+c3NzVi9ejUmTJjQq8FGVpdcgLv6YGc5Njc+u/TVWVCyAhCNRhEMBnH77bfj5ZdfzupiIOlkYr9ZJ2JX91vTNNTX12Py5MnYsmWLJQs/YJEaAJsWes6cOTh58iQeeeQRs5rVUb9A8mWodL/rCGsb33LLLVi6dGnWe6MHOnb/BpDoO4hGo7jggguwatUqzJo1CwAGVPMqGeuMVhQFTU1NKCoqwt13343ly5ebA8+sVvgBiwQA0BoC9957LwzDwC9/+Ut4vd4uncW7W21nB2BtbS3mz5+Pxx57zCz8FABdl1xNBhL39bPJPcrKyszlwVl7HxgYl1aTJ/4AEk2hSCSCeDyO4uJi3HTTTViyZAnOO+88ANYOPcsEANAaAitWrEBxcTHWrVuHpqYms7e/t7fmsupZJBKBoihYuXIlHnzwwR6PMOwMu26e6s7D5GvqmfycbGHb2X51HEVREIvFIEkS/H4/pk+fjrlz52LmzJlmn0O2qr7JS3hne9/Z/rNmkKZpiEaj5tWACRMmYNasWZg9ezZGjRoFoHVJMKsWfsBiAQC0hsCtt96KCy64AOvWrcOnn34KQRDgdrvNwtTV9hh7TyBxHbexsREjR47EQw89hBtuuMF8n0wXfl3XEQqFzF7k9tsqyzJCoRDi8XivPysSiSAUCpmfm2nt28WSJMHlcsHtdmPs2LGYOHEiysvLMW3aNPPgB2AuG5atqq+iKAiFQgiFQmknHu2t5FvUAcDtdsPpdGLQoEGYMGECpkyZgssvvxwTJ04095P9Daxc8BnLBQDQervkpEmT8Nprr+Ff//oX/vCHP2Dfvn0Ih8Ow2Wyw2+3m6Kz2X3T7AzYajQIAhg4diiVLluDOO+/EoEGDslLtZ+/l9Xoxbdo0KIqS8v0lSUIgEDALTG+24cILLwSQWLAz01cx2Iw9LpcL+fn5GDx4MIYMGYIRI0Zg7NixKCkpaTO8mn3v2Sz47LsaPnw4rrzySvj9/qwN22ZXkgoLCzF48GCMGDECY8aMwfDhw80l0RkWeP2h4DOCYeHrXu3bTjt37sS2bduwc+dOHD16FKFQCLFYDIqitDnzSZIEu90Oh8MBv9+Piy++GNOnT8f111+PQYMGAchetbS9rtZSsv05vdHZNrIrA5lq0nRHtg/fzqYzY4W+v/YfWToAmPaF1TAM1NXV4dSpU6iqqkIgEDDP8oZhwOv1oqioCKWlpSgtLW0zYpA6+3qm/WWy5JrXQP8uWa2G7Xf7zs/+rF8EAJN8+2V3JFdLrXKG6slNOZ19TqbXmcv0NmZDNvabsfJ+Z0q/CgCGbXJyR2DybiT3WA+UpCYkG/plABBCMqP/dFcSQjKOAoAQjlEAEMIxCgBCOEYBQAjHKAAI4RgFACEcowAghGMUAIRwjAKAEI5RABDCMQoAQjhGAUAIxygACOEYBQAhHKMAIIRjFACEcIwCgBCOUQAQwjEKAEI4RgFACMcoAAjhGAUAIRyjACCEYxQAhHCMAoAQjlEAEMIxCgBCOEYBQAjHKAAI4RgFACEcowAghGMUAIRwjAKAEI5RABDCMQoAQjhGAUAIxygACOEYBQAhHKMAIIRjFACEcIwCgBCOUQAQwjEKAEI4RgFACMcoAAjhGAUAIRyjACCEYxQAhHCMAoAQjv1/4jvivL8xQAoAAAAASUVORK5CYII=</Content>
      <Id>d5c72d04a0311f930447729e1331908693ed5d5494d6e1003149ddb0a4a5ed95</Id>
    </CustomIcon>
    <Page>
      <Name>JIBB</Name>
      <Row>
        <Name/>
      </Row>
      <Row>
        <Name>Session</Name>
        <Widget>
          <WidgetId>jibb_start_toggle</WidgetId>
          <Type>GroupButton</Type>
          <Options>size=4</Options>
          <ValueSpace>
            <Value>
              <Key>start</Key>
              <Name>Start</Name>
            </Value>
            <Value>
              <Key>stop</Key>
              <Name>Stop</Name>
            </Value>
          </ValueSpace>
        </Widget>
      </Row>
      <Row>
        <Name>Camera Preset</Name>
        <Widget>
          <WidgetId>jibb_Camera_preset</WidgetId>
          <Type>GroupButton</Type>
          <Options>size=4</Options>
          <ValueSpace>
            <Value>
              <Key>position_1</Key>
              <Name>Camera Position 1</Name>
            </Value>
            <Value>
              <Key>position_2</Key>
              <Name>Camera Position 2</Name>
            </Value>
          </ValueSpace>
        </Widget>
      </Row>
      <Row>
        <Name/>
      </Row>
      <Options>hideRowNames=0</Options>
    </Page>
    <Page>
      <Name>Camera</Name>
      <Row>
        <Name>Row</Name>
        <Widget>
          <WidgetId>jibb_camera_control</WidgetId>
          <Type>DirectionalPad</Type>
          <Options>size=4</Options>
        </Widget>
      </Row>
      <Row>
        <Name>Row</Name>
        <Widget>
          <WidgetId>jibb_zoom_out</WidgetId>
          <Type>Button</Type>
          <Options>size=1;icon=zoom_out</Options>
        </Widget>
        <Widget>
          <WidgetId>jibb_zoom_in</WidgetId>
          <Type>Button</Type>
          <Options>size=1;icon=zoom_in</Options>
        </Widget>
      </Row>
      <Options>hideRowNames=1</Options>
    </Page>
  </Panel>
</Extensions>
  `

main()
