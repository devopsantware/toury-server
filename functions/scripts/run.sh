echo "Running Toury Server"

firebase use toury-system

npm run shell

osascript -e 'display notification "Toury Server now running" sound name "Submarine"'
