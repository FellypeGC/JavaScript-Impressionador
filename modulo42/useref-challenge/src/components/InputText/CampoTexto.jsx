import styles from './CampoTexto.module.css';

export default function CampoTexto({ ref }) {
  return <input className={styles.input} type='text' ref={ref} />;
}
