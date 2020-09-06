# Mobile App - Map Tracking
## Stack: React Native, Express, Node JS, MongoDB
A mobile app that can request the location permission from users, track users’ real-time locations, and draw a route on the map. The users can record, save, and retrieve their tracks.

## Features:
### In-App Authentication:
Used ```Express``` and ```Node JS``` for backend and set up two API routes: ```./signup``` and ```./signin```. Used ```jsonwebtoken``` for authentication and ```Bcrypt``` for password-hashing. Users hashed credentials are stored in ```MongoDB``` database with ```mongoose``` library.

### Persistent Login:
Stored token in ```AsyncStorage```. The app reads the token in ```AsyncStorage``` for persistent login.

### Location Permission Request:
When the user navigates to create a track, the app prompts the user for permission to track locations. The request is ```requestPermissionsAsync()``` function from ```expo-location``` library.

### Subscribe Locations:
Once the user grants the permission to track locations, the app subscribes to location update events with ```watchPositionAsync(```) function from ```expo-location``` library.

### MapView:
Included ```MapView``` from ```‘react-native-maps’``` and used ```Circle``` and ```Polyline``` to track current and historical locations. The ```Polyline``` only tracks the locations when the tracking mode is on. 

### Tracking Mode Turn On/Off:
Used state ```recording``` to track tracking mode. The tracking mode is on when ```recording === true``` and triggered by a button press. 

### Store/Fetch Tracks:
Used ```Axios``` to send/receive data from the backend server. Set up ```/tracks``` API to post and get tracks. The data is stored in ```MongoDB``` with ```mongoose``` library.
