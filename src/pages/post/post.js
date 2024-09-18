import styled from 'styled-components';
import { H2 } from '../../components';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const PostContainer = (className) => {
	const post = useSelector(selector);

	useEffect(() => {}, []);

	return (
		<div className={className}>
			<PostContent />
			<Comments />
			<H2>Пользователи</H2>
			<div></div>
		</div>
	);
};

export const Post = styled(Post)``;
