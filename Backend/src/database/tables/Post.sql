CREATE TABLE post (
post_id  VARCHAR(300) PRIMARY KEY,
UserID  VARCHAR(255),
content VARCHAR(MAX) DEFAULT 'no content',
post_date DATETIME DEFAULT GETDATE(),
likes INT DEFAULT 0,
comments INT DEFAULT 0,
FOREIGN KEY (UserID)
REFERENCES tbl_user (UserID)
);

SELECT * from post;

DELETE FROM post
WHERE UserID = '001';

DROP TABLE post;

INSERT INTO Postz (post_id,UserID,content,post_date,likes,comments)
VALUES
(1001,'001','Cool pic','01/12/2024',5,2),
(1002,'001','Nice one','10/06/2023',5,2),
(1003,'001','Nice one','11/11/2023',5,2),
(1004,'001','Nice one','07/08/2023',5,2);
