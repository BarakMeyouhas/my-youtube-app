import { Button, TextField } from '@mui/material';
import Song from '../../modal/Song';
import { youtube } from '../../Redux/Store';
import { ChangeEvent, useState } from 'react';
import SingleItem from '../AddSongForm/SingleItem/SingleItem';
import SearchIcon from '@mui/icons-material/Search';


function SongSearch(): JSX.Element {
    const allSongs = youtube.getState().songs.allSongs;
    const [searchValue, setSearchValue] = useState('');
    const [filteredSongs, setFilteredSongs] = useState<Song[]>([]);

    const handleSearch = () => {
        const filtered = allSongs.filter(song =>
            song.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredSongs(searchValue ? filtered : []);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
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
             <Button variant="contained" color="primary" onClick={handleSearch} style={{ height: "56px" }}>
                <SearchIcon />
            </Button>
            <hr />

            <div>
                {filteredSongs.map(song => (
                    <SingleItem
                        key={song.id}
                        url={song.url}
                        title={song.title}
                        description={song.description}
                        img={song.img}
                        id={song.id}
                        categoryName={song.categoryName}
                    />
                ))}
            </div>
        </div>
    );
}

export default SongSearch;
