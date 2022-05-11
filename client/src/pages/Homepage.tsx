import React, {useState, useEffect} from 'react';
import axios, {AxiosResponse} from 'axios';
import {Card, CardActions, CardContent, Box, Typography, Button} from '@mui/material';
import '../App.css';

interface MusicData {
	id: number;
	name: string;
	artist: string;
	album: string;
	url: string
}

const Homepage: React.FC = () => {
	const [musics, setMusics] = useState([]);

	useEffect(() => {
		axios.get('/api/v1/musics')
			.then((response: AxiosResponse) => response.data)
			.then(data => setMusics(data))
			.catch(err => console.error(err))
	}, []);

  return (
    <div className="App">
      <h1>Big Music Hit</h1>

			{musics.map((music: MusicData, index: number) => {
				return(
					<Box sx={{maxWidth: 275}} key={index}>
						<Card variant="outlined">
							<CardContent key={index}>
								<Typography sx={{fontSize: 16}}>{music.name}</Typography>
								<Typography>{music.artist}</Typography>
								<Typography>{music.album}</Typography>
							</CardContent>
						</Card>
					</Box>
				)
			})}

			<Button variant="contained">
				Analyse 
			</Button>
    </div>
  );
}

export default Homepage;
