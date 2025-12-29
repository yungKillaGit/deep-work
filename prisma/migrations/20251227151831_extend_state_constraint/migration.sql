ALTER TABLE work_interval
DROP CONSTRAINT IF EXISTS state_check;

ALTER TABLE work_interval
ADD CONSTRAINT state_check CHECK (state IN ('active', 'paused', 'completed'));