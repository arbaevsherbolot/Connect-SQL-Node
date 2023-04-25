CREATE TABLE all_users (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(25) NOT NULL,
    `email` VARCHAR(40) NOT NULL,
    `password` VARCHAR(20) NOT NULL
);