import styles from './my-api-lib.module.scss';

/* eslint-disable-next-line */
export interface MyApiLibProps {}

export function MyApiLib(props: MyApiLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyApiLib!</h1>
    </div>
  );
}

export default MyApiLib;
