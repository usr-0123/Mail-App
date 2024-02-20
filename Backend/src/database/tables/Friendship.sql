CREATE TABLE Friendship(
    FriendshipID VARCHAR(255) PRIMARY KEY,
    User1ID VARCHAR(255),
    User2ID VARCHAR(255),
    FriendshipDate DATE,
    FOREIGN KEY (User1ID) REFERENCES tbl_user(UserID),
    FOREIGN KEY (User2ID) REFERENCES tbl_user(UserID)
);

DROP TABLE Friendship;

INSERT INTO Friendship
-- (FriendshipID,FriendshipDate)
VALUES
(3000,1,2,01/01/2020),
(3001,2,3,02/01/2020),
(3002,3,4,01/02/2020),
(3003,4,5,04/07/01/2020),
(3004,5,1,05/01/2020);

SELECT * FROM Friendship;