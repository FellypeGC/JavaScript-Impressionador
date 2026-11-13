import styles from './CampoTexto.module.css';

export default function CampoTexto({ ref, placeholder }) {
  return <input className={styles.input} type='text' ref={ref} placeholder={placeholder} />;
}
