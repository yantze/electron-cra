import styles from './index.module.css';

interface LogoProps {
  uri: string;
}

export default (props: LogoProps) => {
  const { uri } = props;
  const source = { uri };
  // return <Image className={styles.logo} source={source} />;
  return null;
};
