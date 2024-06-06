import classNames from 'classnames';
import styles from './styles.module.css';

export const Form = ({ onSubmit, children, addStyle }: FormPropsType) => {
    return (
        <form className={classNames(styles.form, addStyle)} onSubmit={onSubmit}>
            {children}
        </form>
    );
}