import './App.css';

import { Paper, TextField, Button } from '@mui/material';
import SendIcon from '@material-ui/icons/Send';
import { MessageLeft } from './Messages';

function App() {
	return (
		<div className="App">
			<Paper style={{ width: '80vw' }}>
				// Chat Messages Container
				<Paper style={{ width: 'calc(100% -20px)' }}>
					<MessageLeft />
				</Paper>
				// Input Message Field
				<form style={{ display: 'flex' }}>
					<TextField label="Type You Message Here..." style={{ width: '100%' }} />
					<Button variant="contained" color="primary">
						<SendIcon />
					</Button>
				</form>
			</Paper>
		</div>
	);
}

export default App;
