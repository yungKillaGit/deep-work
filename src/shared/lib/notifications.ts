import { notifications } from '@mantine/notifications';

export const showError = (message: string) => {
  notifications.show({
    title: 'Error',
    message,
    color: 'red',
  });
};

export const showSuccess = (message: string) => {
  notifications.show({
    title: 'Success',
    message,
    color: 'green',
  });
};

export const showInfo = (message: string) => {
  notifications.show({
    title: 'Info',
    message,
    color: 'blue',
  });
};

export const showWarning = (message: string) => {
  notifications.show({
    title: 'Warning',
    message,
    color: 'yellow',
  });
};
