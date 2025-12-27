ALTER TABLE "work_interval"
ADD CONSTRAINT "state_check" CHECK (state IN ('active', 'completed'));