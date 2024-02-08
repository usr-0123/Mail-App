CREATE TABLE GroupMembers (
    GroupID INT PRIMARY KEY,
    MemberID INT NOT NULL,
    FOREIGN KEY (GroupID) REFERENCES [Group](GroupID),
    FOREIGN KEY (MemberID) REFERENCES [User](UserID)
);