import { RouterProvider } from 'react-router';
import { router } from './routes';
import { EditalProvider } from './context/edital-context';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <EditalProvider>
      <RouterProvider router={router} />
      <Toaster />
    </EditalProvider>
  );
}