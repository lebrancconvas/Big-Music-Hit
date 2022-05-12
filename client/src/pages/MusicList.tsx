import React, {useState, useEffect} from 'react';
import axios from 'axios';
import IMusicData from '../interface/MusicData';

const MusicList: React.FC = () => {
	const [musicList, setMusicList] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:8000')
			.then(response => response.data)
			.then(data => setMusicList(data))
			.catch(err => console.error(err))
	});

	return(
		<div>
			<h1 className="text-center text-teal-500 text-3xl p-10">Music List</h1>
			{musicList.map((music: IMusicData, index: number) => {
				return(
					<div className="flex items-center justify-center rounded-full m-10 w-25 h-20 bg-fuchsia-300" key={index}>
						<div>
							<div className="text-2xl">{music.name}</div>
						</div>
						<div>
							<div className="text-lg">{music.artist}</div>
						</div>
						<div>
							<div className="text-lg">{music.album}</div>
						</div>
					</div>
				)
			})}
		</div>
	)
};

export default MusicList;