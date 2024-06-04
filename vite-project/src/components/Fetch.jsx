import { useEffect, useState } from 'react';
import axios from 'axios';

const TopTracks = ({ token }) => {
    const [topTracks, setTopTracks] = useState([]);

    useEffect(() => {
        const fetchTopTracks = async () => {
            try {
                const response = await axios.get('https://api.spotify.com/v1/me/top/tracks', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setTopTracks(response.data.items);
            } catch (error) {
                console.error('Error fetching top tracks:', error);
            }
        };

        fetchTopTracks();
    }, [token]);

    return (
        <div>
            <h1>Top Tracks</h1>
            {topTracks.length > 0 ? (
                <ul>
                    {topTracks.map((track, index) => (
                        <li key={track.id}>
                            <img src={track.album.images[0].url} alt="Album Art" style={{ width: 50, height: 50 }} />
                            <p><strong>{index + 1}. {track.name}</strong> by {track.artists.map(artist => artist.name).join(', ')}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No top tracks available</p>
            )}
        </div>
    );
};