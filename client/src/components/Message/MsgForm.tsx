import { useForm } from 'react-hook-form';
import { createMessage } from '../../lib/api';
import { Form } from '../Form/Form';
import { Input } from '../Form/Input';
import { SubmitIcon } from '../Form/SubmitIcon';
import styles from './styles.module.css';
import { useMutation } from 'react-query';

export const MsgForm = () => {
    const mutation = useMutation(createMessage);

    const { register, handleSubmit, resetField } = useForm();

    const fetchData = async ({ message }: GenericObjectType) => {
        resetField('message');
        mutation.mutate({
            message,
        });
    };
    const errorMsg = 'Произошла ошибка. Попробуйте еще раз';

    return (
        <Form
            onSubmit={handleSubmit(fetchData)}
            addStyle={styles['msg-form']}
        >
            {mutation.isError && <div className='centered'> {errorMsg}</div>}
            <div className={styles.input}>
                <Input register={{ ...register('message', { required: true }) }} />

                <SubmitIcon svgId='#svg_send' />
            </div>
        </Form>
    );
}