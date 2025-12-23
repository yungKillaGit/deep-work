import { Container, Text, Title } from '@mantine/core';
import Link from 'next/link';
import styles from './page.module.css';

export const AuthErrorPage = () => {
  return (
    <Container size="sm" className={styles.container}>
      <div className={styles.centeredContent}>
        <Title order={2} className={styles.title}>
          Authentication Error
        </Title>
        <Text className={styles.description}>
          We couldn't verify your email. Please try again or contact support if the issue persists.
        </Text>
        <Link href="/" className={styles.button}>
          Go back
        </Link>
      </div>
    </Container>
  );
};
