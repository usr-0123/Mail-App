CREATE TABLE Friendship (
FriendshipID INT PRIMARY KEY,
User1ID INT NOT NULL,
User2ID INT NOT NULL,
FriendshipDate DATETIME NOT NULL
FOREIGN KEY(User1ID) REFERENCES [tbl_User] (UserID),
FOREIGN KEY(User2ID) REFERENCES [tbl_User] (UserID)
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