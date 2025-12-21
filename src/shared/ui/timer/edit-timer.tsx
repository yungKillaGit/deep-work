import { Button } from '@mantine/core';

interface EditTimerProps {
  editableDuration: number;
  setEditableDuration: (duration: number) => void;
  restart: (expiryTimestamp: Date, autoStart: boolean) => void;
}

export const EditTimer = ({ editableDuration, setEditableDuration, restart }: EditTimerProps) => {
  const handleEdit = () => {
    const newDuration = prompt('Enter new duration in seconds:', editableDuration.toString());
    if (newDuration) {
      const parsedDuration = Number.parseInt(newDuration, 10);
      if (!Number.isNaN(parsedDuration) && parsedDuration > 0) {
        setEditableDuration(parsedDuration);
        const newExpiryTimestamp = new Date();
        newExpiryTimestamp.setSeconds(newExpiryTimestamp.getSeconds() + parsedDuration);
        restart(newExpiryTimestamp, false);
      }
    }
  };

  return <Button onClick={handleEdit}>Edit</Button>;
};
