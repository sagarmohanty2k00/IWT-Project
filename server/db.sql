CREATE TABLE student (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(200) UNIQUE NOT NULL,
    password VARCHAR(500) NOT NULL,
    profile_pic BYTEA,
    gender VARCHAR(1),
    branch VARCHAR(200),
    section VARCHAR(10),
    roll_no INT,
    dob DATE,

    total_tests INT NOT NULL DEFAULT 0,
    total_marks INT NOT NULL DEFAULT 0
);

CREATE TABLE admin (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(200) UNIQUE NOT NULL,
    password VARCHAR(500) NOT NULL,
    profile_pic BYTEA
);

CREATE TABLE subject (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(200)
);

CREATE TABLE quiz (
    subjectid INT,
    id SERIAL NOT NULL PRIMARY KEY,
    total_marks INT DEFAULT 0,
    pass_marks INT DEFAULT 0,
    CONSTRAINT fk_user
        FOREIGN KEY(subjectid)
            REFERENCES subject(id)
            ON DELETE CASCADE
);

CREATE TABLE question (
    id SERIAL NOT NULL PRIMARY KEY,
    quizid INT NOT NULL,

    question_text VARCHAR(2048) NOT NULL,

    op1 VARCHAR(1024) NOT NULL, 
    op2 VARCHAR(1024) NOT NULL, 
    op3 VARCHAR(1024) NOT NULL, 
    op4 VARCHAR(1024) NOT NULL,

    correct INT,
    CONSTRAINT fk_user
        FOREIGN KEY(quizid)
            REFERENCES quiz(id)
            ON DELETE CASCADE
);

CREATE TABLE answer (
    id SERIAL NOT NULL PRIMARY KEY,
    
    qnid INT NOT NULL,
    qzid INT NOT NULL,
    stid INT NOT NULL,

    option INT NOT NULL,
    correct BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT fk_user
        FOREIGN KEY(qnid)
            REFERENCES question(id)
            ON DELETE CASCADE,

    CONSTRAINT fk_quiz
        FOREIGN KEY(qzid)
            REFERENCES quiz(id)
            ON DELETE CASCADE,

    CONSTRAINT fk_student
        FOREIGN KEY(stid)
            REFERENCES student(id)
            ON DELETE CASCADE
);

CREATE TABLE appeared (
    id INT NOT NULL PRIMARY KEY,

    stid INT NOT NULL,
    qzid INT NOT NULL,

    time_taken INT DEFAULT 0,
    marks INT DEFAULT 0,

    CONSTRAINT fk_student
        FOREIGN KEY(stid)
            REFERENCES student(id)
            ON DELETE CASCADE,

    CONSTRAINT fk_quiz
        FOREIGN KEY(qzid)
            REFERENCES quiz(id)
            ON DELETE CASCADE
);




-- Adding Questions 

INSERT INTO question (quizid, question_text, op1, op2, op3, op4, correct) 
VALUES (1, 
'Multiplying or dividing vectors by scalars results in: but no direction?', 
'Vectors if multiplied or scalars if divided', 
'Scalars if multiplied scalars', 
'Scalars', 
'Vectors',
4);