
ALTER TABLE users
ADD COLUMN status VARCHAR(100) NOT NULL DEFAULT 'NA' COMMENT 'Active, Inactive, Pending, or Declined';
