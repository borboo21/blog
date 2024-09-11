import styled from 'styled-components';
import { Icon } from '../../../icon/icon';
import { Link, useNavigate } from 'react-router-dom';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const StyledLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	width: 100px;
	height: 32px;
	color: black;
	text-decoration: none;
	border: 1px solid #000;
	background-color: #eee;
`;

const StyledButton = styled.div`
	&: hover {
		cursor: pointer;
	}
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();

	return (
		<div className={className}>
			<RightAligned>
				<StyledLink to="/login">Войти</StyledLink>
			</RightAligned>
			<RightAligned>
				<StyledButton onClick={() => navigate(-1)}>
					<Icon id="fa-backward" margin="10px 0px 0 0px"></Icon>
				</StyledButton>
				<Link to="/post">
					<Icon id="fa-file-text-o" margin="10px 0px 0 16px"></Icon>
				</Link>
				<Link to="/users">
					<Icon id="fa-users" margin="10px 0px 0 16px"></Icon>
				</Link>
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
