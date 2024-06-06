import { forwardRef } from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';

export const Input = forwardRef((props: InputPropsType, ref) => {
    return (
        <input
            {...props.register}
            className={classNames(
                props.required ? styles.required : '',
                styles.input
            )}
        />
    );
})