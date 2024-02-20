CREATE TABLE tbl_todo (
    id INT IDENTITY(1,1) PRIMARY KEY,
    title NVARCHAR(100) NOT NULL,
    completed BIT NOT NULL
);

SELECT * FROM tbl_todo;

INSERT INTO tbl_todo (title, completed) VALUES ('todo 1', 0);
INSERT INTO tbl_todo (title, completed) VALUES ('todo 2', 0);
INSERT INTO tbl_todo (title, completed) VALUES ('todo 3', 0);