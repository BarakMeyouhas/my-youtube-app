import { Button, TextField } from '@mui/material';
import Song from '../../modal/Song';
import { youtube } from '../../Redux/Store';
import { SetStateAction, useState } from 'react';
import SingleItem from '../AddSongForm/SingleItem/SingleItem';

function SongSearch(): JSX.Element {
    const allSongs = youtube.getState().songs.allSongs;
    const [searchValue, setSearchValue] = useState('');
    const [filteredSongs, setFilteredSongs] = useState<Song[]>(allSongs);

    const handleSearch = () => {
        const filtered = allSongs.filter(song =>
            song.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredSongs(searchValue ? filtered : []);
    };

    const handleInputChange = (e: { currentTarget: { value: SetStateAction<string>; }; }) => {
        setSearchValue(e.currentTarget.value);
    };

    return (
        <div className="SongSearch">
            <h1>Search Song</h1>
            <TextField
                label="Search Song"
                variant="outlined"
                className="SearchInput"
                value={searchValue}
                onChange={handleInputChange}
            />
            <Button variant="contained" color="primary" onClick={handleSearch}>
                Search
            </Button>
            <hr />

            <div>
                {filteredSongs.map(song => (
                    <SingleItem
                    key={song["id"]}
                    url={song["url"]}
                    title={song["title"]}
                    description={song["description"]}
                    img={song["img"]}
                    id={song["id"]}
                    />
                ))}
            </div>
        </div>
    );
}

export default SongSearch;
