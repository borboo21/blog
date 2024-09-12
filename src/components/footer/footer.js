import { useEffect, useState } from 'react';
import styled from 'styled-components';

export const FooterContainer = ({ className }) => {
	const [city, setCity] = useState('');
	const [temperature, setTemperature] = useState('');
	const [weather, setWeather] = useState('');
	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&lang=ru&appid=f404758a05cfe440a8ca3b2c7f222608',
		)
			.then((res) => res.json())
			.then(({ name, main, weather }) => {
				setCity(name);
				setTemperature(Math.round(main.temp));
				setWeather(weather[0].description);
			});
	}, []);
	return (
		<div className={className}>
			<div>
				<div>Блог веб-разработчика</div>
				<div>web@developer.ru</div>
			</div>
			<div>
				<div>
					{new Date().toLocaleString('ru', { day: 'numeric', month: 'long' })}
					{', '}
					{city}
				</div>
				<div>
					{temperature} °C, {weather}
				</div>
			</div>
		</div>
	);
};

export const Footer = styled(FooterContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 120px;
	padding: 20px 40px;
	box-shadow: 0px 2px 17px #000;
	background-color: #fff;
	width: 1000px;
	font-weight: bold;
`;
