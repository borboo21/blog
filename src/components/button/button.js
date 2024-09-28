import styled from 'styled-components';

const ButtonContainer = ({ children, className, width, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	width: ${({ width = '100%' }) => width};
	height: 32px;
	color: black;
	text-decoration: none;
	border: 1px solid #000;
	background-color: #eee;

	&: hover {
		cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
	}

	&: disabled {
		background-color: light-dark(rgba(239, 239, 239, 0.3), rgba(19, 1, 1, 0.3));
		color: light-dark(rgba(16, 16, 16, 0.3), rgba(255, 255, 255, 0.3));
		border-color: light-dark(rgba(118, 118, 118, 0.3), rgba(195, 195, 195, 0.3));
	}
`;
