mp.events.add('onPlayerConnected', () => {
	disableUserControl(true);
	welcomePage.active = true;
});

mp.events.add('loginInformationToServer', (loginModel) => {
	mp.events.callRemote('OnPlayerLoginAttempt', loginModel);
});

mp.events.add('onPlayerLoginResponse', (playerInfo) => {
	if (playerInfo !== null && playerInfo !== 'undefined') {
		welcomePage.execute(`showToastrMessage('Autentificare reusita!', 0)`);
		setTimeout(() => {
			disableUserControl(false);
			welcomePage.active = false;
			mp.game.ui.notifications.showWithPicture("Logare reusita", "Bine ai revenit, " + playerInfo.Username, "", "CHAR_SOCIAL_CLUB", icon = 0, flashing = false, textColor = -1, bgColor = -1, flashColor = [77, 77, 77, 200])
		}, 1500);

	} else {
		welcomePage.execute(`showToastrMessage('Parola sau Username-ul sunt gresite!', 3)`);
	}
});

mp.events.add('registerInformationToServer', (registerModel) => {
	mp.events.callRemote('OnPlayerRegisterAttempt', registerModel);
});

mp.events.add('onPlayerRegisterResponse', (success) => {
	if (success) {
		welcomePage.execute(`showToastrMessage('Contul a fost creat, te rugam sa te autentifici!', 1)`);
	} else {
		welcomePage.execute(`showToastrMessage('Contul nu a putut fi creat, acesta exista sau a aparut o problema in timpul inregistrarii!', 3)`);
	}
});