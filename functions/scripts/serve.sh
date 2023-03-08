echo "Serve Toury Server"

firebase use toury-system

npm run build

firebase emulators:start --only functions

osascript -e 'display notification "Toury Server now serve" sound name "Submarine"'
