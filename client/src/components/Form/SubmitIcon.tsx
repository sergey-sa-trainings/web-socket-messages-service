import styles from './styles.module.css';

export const SubmitIcon = ({ svgId }: SubmitIconPropsType) => {
    return (
        <button className={styles['submit-icon']} type='submit'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                <use xlinkHref={svgId}></use>
            </svg>
        </button>
    );
}