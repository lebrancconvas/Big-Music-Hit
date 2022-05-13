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
	}, []);

	return(
		<div>
			<h1 className="text-center text-teal-500 text-3xl p-10">Music List</h1>
			{musicList.map((music: IMusicData, index: number) => {
				return(
					<div className="w-25">
						<div className="h-2 bg-red-light"></div>
						<div className="bg-white shadow-lg rounded-lg">
							<div className="flex">
								<div>
									<img className="w-full rounded hidden md:block" src={music.image} alt="Track Pic" />
								</div>
								<div className="w-full p-8">
									<div className="flex justify-between">
										<div>
											<h3 className="text-2xl text-gray-darkest font-medium">
												<a href={music.url} target="_blank" rel="noreferrer">
													{music.track}
												</a>
											</h3>
											<p className="text-sm text-grey mt-1">{music.artist}</p>
											<p className="text-sm text-grey mt-1">{music.album}</p>
										</div>
										<div className="text-red-lighter">
											<svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z"/></svg>
										</div>
									</div>
									<div className="flex justify-between items-center mt-8">
										<div className="text-grey-darker">
											<svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6.59 12.83L4.4 15c-.58.58-1.59 1-2.4 1H0v-2h2c.29 0 .8-.2 1-.41l2.17-2.18 1.42 1.42zM16 4V1l4 4-4 4V6h-2c-.29 0-.8.2-1 .41l-2.17 2.18L9.4 7.17 11.6 5c.58-.58 1.59-1 2.41-1h2zm0 10v-3l4 4-4 4v-3h-2c-.82 0-1.83-.42-2.41-1l-8.6-8.59C2.8 6.21 2.3 6 2 6H0V4h2c.82 0 1.83.42 2.41 1l8.6 8.59c.2.2.7.41.99.41h2z"/></svg>
										</div>
										<div className="text-grey-darker">
											<svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z"/></svg>
										</div>
										<div className="text-white p-8 rounded-full bg-red-light shadow-lg">
											<svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z"/></svg>
										</div>
										<div className="text-grey-darker">
											<svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z"/></svg>
										</div>
										<div className="text-grey-darker">
											<svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 4a2 2 0 0 0-2 2v6H0l4 4 4-4H5V6h7l2-2H5zm10 4h-3l4-4 4 4h-3v6a2 2 0 0 1-2 2H6l2-2h7V8z"/></svg>
										</div>
									</div>
								</div>
							</div>
							<div className="mx-8 py-4">
								<div className="flex justify-between text-sm text-grey-darker">
									<p>0:00</p>
									<p>{music.duration}</p>
								</div>
								<div className="mt-1">
									<div className="h-1 bg-grey-dark rounded-full">
										<div className="w-1/5 h-1 bg-red-light rounded-full relative">
											<span className="w-4 h-4 bg-red absolute pin-r pin-b -mb-1 rounded-full shadow"></span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
};

export default MusicList;