echo "Shell Toury Server"

firebase use toury-system

npm run build

firebase functions:shell

osascript -e 'display notification "Toury Server now shell" sound name "Submarine"'
