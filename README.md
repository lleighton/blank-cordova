## INSTALLING

git clone https://github.com/davidyarham/blank-cordova.git

sudo npm install cordova -g [If not already done]

sudo npm install bower -g [If not already done]

sudo npm install

bower install

cordova platform add ios

cordova platform add android [optional]

-----------------------------------------

## RUNNING

-----------------------------------------

grunt > run in browser with live updates

grunt ios-emulator > run in iOS emulator

grunt ios-device > run on iOS device

grunt android-emulator > run in android emulator

grunt android-device > run on android device

-----------------------------------------

## NOTES

-----------------------------------------

ngcordova is included for usage for any plugins see http://ngcordova.com/.

If the app on iOS device hangs at the loading screen for more than 20 seconds, open another terminal and run pkill lldb. (Known problem at moment)
