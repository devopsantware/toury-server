echo "Deploying Toury Server"

firebase use toury-system

firebase deploy --only functions

osascript -e 'display notification "Toury Server now deploying" sound name "Submarine"'
