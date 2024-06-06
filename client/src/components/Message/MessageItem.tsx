import styles from './styles.module.css';

export const MessageItem = ({ item }: MessageItemPropsType) => {

    return (
        <div className={styles.item}>
            {item.message}
        </div>
    )
}