﻿soundManager.onload = function() {
	var sound = soundManager.createSound({ id: 'sound', url: plugin_url+'/talky-wordpress/sounds/'+dir+'/post-published.mp3', volume: vol });
	sound.play();
}