import classNames from 'classnames';
import styles from './styles.module.css';

export const Spinner = () => {
    return (
        <div className={classNames(styles.ellips, 'centered')}>
            <div></div><div></div><div></div><div></div>
        </div>
    )
}