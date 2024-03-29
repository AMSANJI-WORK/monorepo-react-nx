// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Header } from '@monorepo-react/header';
import NxWelcome from './nx-welcome';
export function App() {
  return (
    <>
      <Header />
      <main>
        <NxWelcome title="monorepo-react" />
      </main>
    </>
  );
}

export default App;
