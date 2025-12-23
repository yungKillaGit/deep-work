import { Box } from '@mantine/core';
import styles from './auth-layout.module.css';

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <Box className={styles.container}>{children}</Box>;
};
