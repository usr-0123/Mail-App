CREATE TABLE EventAttendee (
    EventID VARCHAR(255),
    AttendeeID VARCHAR(255),
    PRIMARY KEY (EventID, AttendeeID),
    FOREIGN KEY (EventID) REFERENCES Event(EventID),
    FOREIGN KEY (AttendeeID) REFERENCES tbl_User(UserID)
);

SELECT * FROM EventAttendee;

INSERT INTO EventAttendee
VALUES
('6000','001'),
('6001','002'),
('6002','003'),
('6003','004'),
('6004','005');

DROP TABLE EventAttendee;