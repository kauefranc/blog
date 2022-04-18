import styles from './styles.module.scss'

interface ISubscribeButtonProps {
    priceId: string
}

export function SubscribeButton ({ priceId }: ISubscribeButtonProps ){
    return(
        <button className={styles.subButton}>
            Subscribe now
        </button>
    );
}