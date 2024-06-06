import { getMessages } from '../../lib/api';
import { Spinner } from '../Spinner/Spinner';
import { MsgForm } from './MsgForm';
import classNames from 'classnames';
import styles from './styles.module.css';
import { useQuery } from 'react-query';
import { MessageItem } from './MessageItem';
import { JSX } from 'react/jsx-runtime';

export const MessageList = () => {
    const { isLoading, isError, isSuccess, data } = useQuery('messages', getMessages);

    const errorMsg = 'Не удалось получить список сообщений';
    const emptyMsg = 'Нет сообщений';

    const transformData = (data: MessageDtoType[]) => {
        const messages: JSX.Element[] = [];

        data.forEach((item: MessageDtoType) => {
            const msgItem = <MessageItem key={item.id} item={item} />;
            messages.push(msgItem);
        })

        return messages;
    };

    return (
        <>
            {isLoading && <Spinner />}

            {isError && <div className='centered'> {errorMsg}</div>}

            {isSuccess && Boolean(data) && data.length === 0 &&
                <div className='centered'>{emptyMsg}</div>}

            {isSuccess && Boolean(data) && Boolean(data.length) &&
                <div className={classNames('centered', styles.list)}>
                    {transformData(data)}
                </div>
            }

            {<MsgForm />}
        </>
    )
}