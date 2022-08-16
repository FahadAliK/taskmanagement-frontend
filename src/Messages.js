import { Avatar } from '@material-ui/core';
import React from 'react';

export const MessageLeft = ({}) => {
	return (
		<div>
			<Avatar src="https://i.picsum.photos/id/100/536/354.jpg?hmac=IFSN5RUAqYtL3epHwfu5cahc51PmydqwgdB2ApY6FeM"></Avatar>
			<div>
				<div>Some Display Name From Props</div>
				<div>
					<div>
						<p>Some Message Text </p>
					</div>
				</div>
			</div>
		</div>
	);
};
export const MessageRight = () => {
	return <div>Messages</div>;
};
