import { createBoard } from '@wixc3/react-board';
import App from '../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    isSnippet: true,
    environmentProps: {
        windowBackgroundColor: '#484848',
    },
});
