CREATE TABLE GroupMembers (
    GroupID INT PRIMARY KEY,
    MemberID INT NOT NULL,
    FOREIGN KEY (GroupID) REFERENCES [tbl_Group](GroupID),
    FOREIGN KEY (MemberID) REFERENCES [tbl_User](UserID)
);

SELECT * FROM GroupMembers;

DROP TABLE GroupMembers;

INSERT INTO GroupMembers
VALUES
(5000,001),
(5001,002),
(5002,003),
(5003,004),
(5004,005);