welcomePage = mp.browsers.new("package://NaggaServer/LoginRegister/index.html");
welcomePage.active = false;

mp.gui.chat.show(false);

chatPage = mp.browsers.new("package://NaggaServer/Global/Chat/index.html");
chatPage.markAsChat();

statsCard = mp.browsers.new("package://NaggaServer/InfoCards/index.html");
statsCard.active = false;