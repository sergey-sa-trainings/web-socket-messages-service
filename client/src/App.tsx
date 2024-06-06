import { useEffect } from 'react';
import { QueryClient, QueryClientProvider, } from 'react-query';
import useWebSocket from 'react-use-websocket';
import { AppRoutes } from './components/Routes/Routes';
import { Svg } from './Svg';
import './app.css';
import config from './config/config.json';

const queryClient = new QueryClient();

const socketUrl = `ws://${config.host}:${config.port}`;

export const App = () => {
  const { lastMessage } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage?.data === config.wsNotify) {
      queryClient.invalidateQueries('messages');
    }
  }, [lastMessage]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className='container-xxl main'>
        <Svg />
        <AppRoutes />
      </div >
    </QueryClientProvider >
  )
};