export const authEndpoint = 'https://accounts.spotify.com/authorize';
export const clientId = 'YOUR_SPOTIFY_CLIENT_ID';
export const redirectUri = 'http://localhost:3000/callback';
export const scopes = [
    'user-read-currently-playing',
    'user-read-playback-state',
    'playlist-read-private',
    'playlist-read-collaborative'
];