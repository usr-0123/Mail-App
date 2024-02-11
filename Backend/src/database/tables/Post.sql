CREATE TABLE Post (
    PostID INT PRIMARY KEY,
    UserID INT NOT NULL,
    Content VARCHAR(MAX) NOT NULL,
    PostDate DATETIME NOT NULL,
    Likes INT DEFAULT 0,
    Comments INT DEFAULT 0,
    FOREIGN KEY (UserID) REFERENCES [User](UserID)
);

SELECT * from Post;

DROP TABLE Post;

INSERT INTO Post (PostID,UserID,Content,PostDate,Likes,Comments)
VALUES
(1001,001,'Cool pic','01/12/2024',5,2),
(1002,001,'Nice one','10/06/2023',5,2),
(1003,001,'Nice one','11/11/2023',5,2),
(1004,001,'Nice one','07/08/2023',5,2);

SELECT * FROM
Post
WHERE Likes > 10;