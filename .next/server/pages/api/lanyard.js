(() => {
var exports = {};
exports.id = 305;
exports.ids = [305];
exports.modules = {

/***/ 2227:
/***/ (() => {

var statusIcon = document.getElementById("statusIcon");
var discordStatus = document.getElementById("discordStatus");
var spotifyListening = document.getElementById("spotifyListening");
var visualStudioCodePlaying = document.getElementById("visualStudioCodePlaying");
var activitiesStatus = document.getElementById("activitiesStatus");
var Status = document.getElementById("Status");
const lanyard = new WebSocket("wss://api.lanyard.rest/socket");
var api = {};
var received = false;
lanyard.onopen = function() {
    lanyard.send(JSON.stringify({
        op: 2,
        d: {
            subscribe_to_id: "439450931579453440"
        }
    }));
};
setInterval(()=>{
    if (received) {
        lanyard.send(JSON.stringify({
            op: 3
        }));
    }
}, 30000);
lanyard.onmessage = function(event) {
    received = true;
    api = JSON.parse(event.data);
    if (api.t === "INIT_STATE" || api.t === "PRESENCE_UPDATE") {
        update_presence();
    }
};
function update_presence() {
    if (statusIcon != null) {
        update_status(api.d.discord_status);
    }
    var vsCodeAppID = "383226320970055681";
    var vsCodeActivity = api.d.activities.find((activity)=>activity.application_id == vsCodeAppID);
    if (vsCodeActivity) {
        var vsCodeDetails = vsCodeActivity.details;
        var vsCodeState = vsCodeActivity.state;
        visualStudioCodePlaying.innerHTML = `
    <a href="javascript:void(0)">
    <div class="card rounded-xl h-full">
        <div class="p-3 flex space-x-2 items-center overflow-hidden">
            <img src="/assets/img/visualStudioCode.svg" alt="IMG" class="rounded-xl"
                width="50" height="50">
            <p class="normalText ml-3 opacity-90">VS Code<br><span class="smallText opacity-80">${vsCodeState || "<i>No data</i>"}</span></p>
            <p class="thinText sectionTopRightText rounded-xl p-2 opacity-80">${vsCodeDetails || "<i>No data</i>"}</p>
        </div>
    </div>
    </a>`;
    } else {
        visualStudioCodePlaying.innerHTML = ``;
        document.getElementById("visualStudioCodePlaying").style.display = "none";
    }
    setInterval(function() {
        if (api.d.listening_to_spotify == true) {
            var countDownDate = new Date(api.d.spotify.timestamps.end).getTime();
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
            var seconds = Math.floor(distance % (1000 * 60) / 1000);
            var spotify_time = minutes + "m " + seconds + "s ";
            var artist = `${api.d.spotify.artist.split(";")[0].split(",")[0]}`;
            var song = `${api.d.spotify.song.split("(")[0]}`;
            spotifyListening.innerHTML = `
      <a href="https://open.spotify.com/track/${api.d.spotify.track_id}" target="_blank">
      <div class="card rounded-xl h-full">
          <div class="p-3 flex space-x-2 items-center overflow-hidden">
              <img src="/assets/img/spotify.png" alt="IMG" class="rounded-xl"
                  width="50" height="50">
              <p class="normalText ml-3 opacity-90">Spotify<br><span class="smallText opacity-80">${artist} - ${song || "<i>No data</i>"}</span></p>
              <p class="thinText sectionTopRightText rounded-xl p-2 opacity-80">left ${spotify_time || "0m 0s"}</p>
          </div>
      </div>
      </a>`;
        } else {
            spotifyListening.innerHTML = ``;
            document.getElementById("spotifyListening").style.display = "none";
        }
    }, 1000); //removed: animate__animated animate__flash
    if (api.d.discord_status === "dnd") {
        discordStatus.innerHTML = `<div class="discordStatusDnd"></div>`;
    } else if (api.d.discord_status === "idle") {
        discordStatus.innerHTML = `<div class="discordStatusIdle"></div>`;
    } else if (api.d.discord_status === "online") {
        discordStatus.innerHTML = `<div class="discordStatusOnline"></div>`;
    } else if (api.d.discord_status === "offline") {
        discordStatus.innerHTML = `<div class="discordStatusOffline"></div>`;
    } else {
        discordStatus.innerHTML = `<div class="discordStatusOffline"></div>`;
    }
    setInterval(function() {
        if (api.d.listening_to_spotify == false && api.d.activities.find((activity)=>activity.application_id == vsCodeAppID) == undefined) {
            activitiesStatus.innerHTML = `<i class="smallText opacity-80">Bir Aktivite BulunamadÄ±</i>`;
        } else {
            activitiesStatus.innerHTML = ``;
            document.getElementById("activitiesStatus").style.display = "none";
        }
    }, 1000) // biraz sÄ±kÄ±ntÄ±lÄ± gibi gibi
    ;
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2227));
module.exports = __webpack_exports__;

})();