var isStatsOpen = false;

mp.keys.bind(0x71, false, function() {
    mp.events.callRemote('keypressStats');
});

mp.events.add('showStats', (stats) => {
    if (isStatsOpen === false) {
        var statsJson = JSON.stringify(stats);
        statsCard.active = !isStatsOpen;
        statsCard.execute(`showStatsCard('${statsJson}')`);
        isStatsOpen = true;
    }
    else {
        statsCard.active = !isStatsOpen;
        isStatsOpen = false;
    }
});