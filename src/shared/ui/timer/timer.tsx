'use client';
import { Button, Group, Stack, Text } from '@mantine/core';
import { useState } from 'react';
import { useTimer } from 'react-timer-hook';
import { EditTimer } from './edit-timer';

interface TimerProps {
  duration: number;
  onExpire?: () => void;
}

const formatNumber = (num: number) => num.toString().padStart(2, '0');

export const Timer = ({ duration, onExpire }: TimerProps) => {
  const [editableDuration, setEditableDuration] = useState(duration);
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + editableDuration);

  const { seconds, minutes, hours, days, isRunning, start, pause, restart } = useTimer({
    expiryTimestamp,
    onExpire,
    autoStart: false,
  });

  const timeDisplay = [
    days > 0 && formatNumber(days),
    hours > 0 && formatNumber(hours),
    formatNumber(minutes),
    formatNumber(seconds),
  ]
    .filter(Boolean)
    .join(':');

  return (
    <Stack align="center" gap="md">
      <Text size="xl" fw={700}>
        {timeDisplay}
      </Text>
      <Group gap="sm">
        <EditTimer
          editableDuration={editableDuration}
          setEditableDuration={setEditableDuration}
          restart={restart}
        />

        {isRunning ? (
          <Button onClick={pause} color="red">
            Stop
          </Button>
        ) : (
          <Button onClick={start} color="green">
            Start
          </Button>
        )}
      </Group>
    </Stack>
  );
};
