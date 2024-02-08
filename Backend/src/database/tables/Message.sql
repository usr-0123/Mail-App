CREATE TABLE Message (
    MessageID INT NOT NULL PRIMARY KEY,
    SenderID INT NOT NULL,
    ReceiverID INT NOT NULL,
    MessageDate DATETIME NOT NULL,
    Content VARCHAR(MAX) NOT NULL,
    FOREIGN KEY (SenderID) REFERENCES [User](UserID),
    FOREIGN KEY (ReceiverID) REFERENCES [User](UserID)
);