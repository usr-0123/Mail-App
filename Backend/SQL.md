## SOCIAL MEDIA APP WITH DB

### DB SQL SCRIPT

### USERS TABLE

```sql
CREATE TABLE  tbl_user (
    UserID VARCHAR(255) PRIMARY KEY,
    Username VARCHAR(255),
    Email VARCHAR(255),
    Password VARCHAR(255),
    TagName VARCHAR(255),
    Location VARCHAR(255)
);

-- USERS TABLE DUMMY DATA


INSERT INTO tbl_User (UserID,Username,Email,Password,TagName,Location)
VALUES
('u01','caleb','caleb@gmail.com','1234u01','Caleb','Kingongo'),
('u03','leah','leah@gmail.com','1234u03','Leah','CBD'),
('u04','becky','becky@gmail.com','123u04','Becky','Ngangarithi'),
('u05','chrispin','chrispin@gmail.com','123u05','Chrispin','Ciaraini');

```

### GROUPS TABLE

```SQL
CREATE TABLE tbl_Group
(
    GroupID VARCHAR(255) NOT NULL PRIMARY KEY,
    GroupName VARCHAR(255),
    Description VARCHAR(255),
    CreatedDate DATETIME,
);

-- GROUPS TABLE DUMMY DATA

INSERT INTO tbl_Group
VALUES
(5000,'Group1','Group 1 discussion group','01/12/2023'),
(5001,'Group2','Group 2 discussion group','01/12/2023'),
(5002,'Group3','Group 3 discussion group','01/12/2023'),
(5003,'Group4','Group 4 discussion group','01/12/2023'),
(5004,'Group5','Group 5 discussion group','01/12/2023');

```

### POSTS TABLE

```SQL
CREATE TABLE post(
post_id  VARCHAR(300) PRIMARY KEY,
UserID  VARCHAR(255) FOREIGN KEY REFERENCES tbl_user(UserID),
content VARCHAR(MAX) DEFAULT 'no content',
post_date DATETIME DEFAULT GETDATE(),
likes INT DEFAULT 0,
comments INT DEFAULT 0
);

-- POSTS DUMMY DATA

INSERT INTO PostS (post_id,UserID,content,post_date,likes,comments)
VALUES
(1001,'001','Cool pic','01/12/2024',5,2),
(1002,'001','Nice one','10/06/2023',5,2),
(1003,'001','Nice one','11/11/2023',5,2),
(1004,'001','Nice one','07/08/2023',5,2);

```

### EVENTS TABLE
```SQL
CREATE TABLE Event (
    EventID VARCHAR(255) NOT NULL PRIMARY KEY,
    EventName VARCHAR(MAX),
    Description VARCHAR(MAX),
    EventDate DATETIME,
    Location VARCHAR(255) ,
    EventPoster VARCHAR(MAX)
);

-- EVENTS TABLE DATA

INSERT INTO Event
VALUES
(6000,'First presentations','The First groups presentation',14/01/2023,'Nyeri','https://drive/poster6001.com'),
(6001,'Second presentations','The Second groups presentation',14/01/2023,'Nairobi','https://drive/poster6001.com'),
(6002,'Third presentations','The Third groups presentation',14/01/2023,'Nanyuki','https://drive/poster6001.com'),
(6003,'Fourth presentations','The Fourth groups presentation',14/01/2023,'Embu','https://drive/poster6001.com'),
(6004,'Fifth presentations','The Fifth groups presentation',14/01/2023,'Kirinyaga','https://drive/poster6001.com');

```
<!-- NOT-OKAY -->

### COMMENTS TABLE
```SQL
CREATE TABLE Comment (
    CommentID VARCHAR(255) PRIMARY KEY,
    PostID INT NOT NULL,
    UserID INT NOT NULL,
    CommentDate DATETIME  NOT NULL,
    Content VARCHAR(MAX)
    FOREIGN KEY (UserID) REFERENCES [User](UserID),
    FOREIGN KEY (PostID) REFERENCES [Post](PostID)
);

-- COMMENTS TABLE DUMMY DATA

INSERT INTO Comment
VALUES
(2000,1000,001,02/11/2023,'Good'),
(2001,1001,002,01/12/2024,'Cool one'),
(2003,1002,003,10/06/2023,'Hehee'),
(2004,1003,004,11/11/2023,'Wow'),
(2005,1004,005,08/07/2023,'Safii');

```
<!-- NOT OKAY -->


### FRIENDSHIP TABLE
```SQL

CREATE TABLE Friendship (
FriendshipID INT PRIMARY KEY,
User1ID INT NOT NULL,
User2ID INT NOT NULL,
FriendshipDate DATETIME NOT NULL
FOREIGN KEY(User1ID) REFERENCES [tbl_User] (UserID),
FOREIGN KEY(User2ID) REFERENCES [tbl_User] (UserID)
);

-- COMMENTS TABLE DUMMY DATA

INSERT INTO Friendship
(FriendshipID,FriendshipDate)
VALUES
(3000,1,2,01/01/2020),
(3001,2,3,02/01/2020),
(3002,3,4,01/02/2020),
(3003,4,5,04/07/01/2020),
(3004,5,1,05/01/2020);

```

<!-- NOT OKAY -->

### PHOTOS TABLE
```SQL

CREATE TABLE Photo (
    photoID INT NOT NULL PRIMARY KEY,
    UserID INT NOT NULL,
    PhotoURL VARCHAR(MAX) NOT NULL,
    UploadDate DATETIME NOT NULL,
    FOREIGN KEY (UserID) REFERENCES [User](UserID)
);

-- COMMENTS TABLE DUMMY DATA

INSERT INTO Photo
VALUES
(4000,001,'https://drive/photos/4000.com',01/02/2022),
(4001,002,'https://drive/photos/4001.com',01/02/2023),
(4002,003,'https://drive/photos/4002.com',19/01/2023),
(4003,004,'https://drive/photos/4003.com',21/08/2022),
(4004,005,'https://drive/photos/4004.com',28/02/2023);

```

<!-- NOT OKAY -->

### GROUP MEMBERS TABLE
```SQL

CREATE TABLE GroupMembers (
    GroupID INT PRIMARY KEY,
    MemberID INT NOT NULL,
    FOREIGN KEY (GroupID) REFERENCES [tbl_Group](GroupID),
    FOREIGN KEY (MemberID) REFERENCES [tbl_User](UserID)
);

-- COMMENTS TABLE DUMMY DATA

INSERT INTO GroupMembers
VALUES
(5000,001),
(5001,002),
(5002,003),
(5003,004),
(5004,005);

```

<!-- NOT OKAY -->

### EVENT ATTENDEES
```SQL

CREATE TABLE EventAttendee (
    EventID INT NOT NULL PRIMARY KEY,
    AttendeeID INT NOT NULL,
    FOREIGN KEY (EventID) REFERENCES [Event](EventID),
    FOREIGN KEY (AttendeeID) REFERENCES [User](UserID)
);

-- COMMENTS TABLE DUMMY DATA

INSERT INTO EventAttendee
VALUES
(6000,001),
(6001,002),
(6002,003),
(6003,004),
(6004,005);

```