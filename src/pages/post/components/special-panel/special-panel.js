import styled from 'styled-components';
import { Icon } from '../../../../components';

const SpecialPanelContainer = ({ className, publishedAt, editButton }) => {
	return (
		<div className={className}>
			<div className="published-at">
				<Icon id="fa-calendar-o" margin="0 8px 0 0" onClick={() => {}} />
				{publishedAt}
			</div>
			<div className="buttons">
				{editButton}
				<Icon id="fa-trash-o" size="20px" onClick={() => {}} />
			</div>
		</div>
	);
};

export const SpecialPanel = styled(SpecialPanelContainer)`
	display: flex;
	justify-content: space-between;
	margin: ${({ margin }) => margin};

	& .published-at {
		display: flex;
		align-items: center;
		font-size: 18px;
	}

	& .buttons {
		display: flex;
	}

	& .i {
		position: relative;
		top: -1px;
	}
`;
