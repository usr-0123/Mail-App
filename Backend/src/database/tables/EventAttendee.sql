CREATE TABLE EventAttendee (
    EventID INT NOT NULL PRIMARY KEY,
    AttendeeID INT NOT NULL,
    FOREIGN KEY (EventID) REFERENCES [Event](EventID),
    FOREIGN KEY (AttendeeID) REFERENCES [User](UserID)
);