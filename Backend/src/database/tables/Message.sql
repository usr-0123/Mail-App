CREATE TABLE Message (
    messageID VARCHAR(255) PRIMARY KEY,
    senderID VARCHAR(255),
    receiverID VARCHAR(255),
    Content VARCHAR(500),
    message_date DATETIME,
    FOREIGN KEY (senderID) REFERENCES tbl_user (UserID),
    FOREIGN KEY (receiverID) REFERENCES tbl_user (UserID)
);

SELECT * FROM Message;

INSERT INTO Message (messageID,senderID,receiverID,Content)
VALUES
('u7000','001','002','Niaje?'),
('u7001','002','003','Mkuu'),
('u7002','003','004','Sawa'),
('u7003','004','005','Hehee'),
('u7004','005','001','Wow');

DROP TABLE Message;