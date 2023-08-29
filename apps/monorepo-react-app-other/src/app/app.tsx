// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import { Header } from '@monorepo-react/header';
export function App() {
  return (
    <div>
      <Header />
      <NxWelcome title="monorepo-react-app-other" />
    </div>
  );
}

export default App;
