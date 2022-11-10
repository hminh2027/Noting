-- CATEGORY
INSERT INTO `category` (name) VALUES ("Học tập");
INSERT INTO `category` (name) VALUES ("Giải trí");
INSERT INTO `category` (name) VALUES ("Sức khỏe");

-- USER password: 123456
INSERT INTO `user` (firstName, lastName, email, password) VALUES ("Ông", "Liêm", "test1@gmail.com", '$2b$10$OPQs1sGAxVaemlbU9Zdzpu4bWx8DfgHWkYPw.a771Ad/URxto0DI6');
INSERT INTO `user` (firstName, lastName, email, password) VALUES ("Ông", "Sắc", "test2@gmail.com", '$2b$10$OPQs1sGAxVaemlbU9Zdzpu4bWx8DfgHWkYPw.a771Ad/URxto0DI6');
INSERT INTO `user` (firstName, lastName, email, password) VALUES ("Ông", "Lích", "test3@gmail.com", '$2b$10$OPQs1sGAxVaemlbU9Zdzpu4bWx8DfgHWkYPw.a771Ad/URxto0DI6');

-- TAG
INSERT INTO `tag` (name) VALUES ("Lập trình");
INSERT INTO `tag` (name) VALUES ("Javascript");
INSERT INTO `tag` (name) VALUES ("Mẹo hay");

-- NOTE
INSERT INTO `note` (title, content, isTemplate, isPublic, userId, categoryId, createdAt, updatedAt) VALUES ("101 bài học nên nhớ khi dùng Javascript", '[{"type":"paragraph","data":{"text":"Dolor aute nostrud ex nulla officia tempor mollit et minim elit sint id pariatur sit. Velit nulla duis et minim do enim duis. Cillum incididunt magna ipsum dolore id ad cupidatat exercitation duis aliqua minim eu nisi. Sint fugiat aute officia nostrud voluptate voluptate. Aliqua quis ut aute velit do id occaecat est consectetur nostrud do qui aliquip minim."}}]', false, false, 1, 1, "2022-11-02 00:04:43.392513", "2022-11-02 00:04:43.392513");
INSERT INTO `note` (title, content, isTemplate, isPublic, userId, categoryId, createdAt, updatedAt) VALUES ("Mẫu TODO", '[{"type":"paragraph","data":{"text":"Dolor aute nostrud ex nulla officia tempor mollit et minim elit sint id pariatur sit. Velit nulla duis et minim do enim duis. Cillum incididunt magna ipsum dolore id ad cupidatat exercitation duis aliqua minim eu nisi. Sint fugiat aute officia nostrud voluptate voluptate. Aliqua quis ut aute velit do id occaecat est consectetur nostrud do qui aliquip minim."}}]', true, true, 1, 1, "2022-11-03 00:04:43.392513", "2022-11-03 00:04:43.392513");

-- TAG_NOTE
INSERT INTO `tag_notes_note` VALUES (2, 1);
INSERT INTO `tag_notes_note` VALUES (3, 1);
INSERT INTO `tag_notes_note` VALUES (1, 1);

-- SNAPSHOT
INSERT INTO `snapshot` (title, userId, content, noteId, description, createdAt) VALUES ("101 bài học nên nhớ khi dùng Javascript", 1, "Hello im snapshot!", 1, "Someone just change the content", "2022-11-03 00:04:43.392513");
INSERT INTO `snapshot` (title, userId, content, noteId, description, createdAt) VALUES ("101 bài học nên nhớ khi dùng Javascript", 1, "snapshot 2!", 1, "Someone just change the content", "2022-11-04 00:04:43.392513");
INSERT INTO `snapshot` (title, userId, content, noteId, description, createdAt) VALUES ("101 bài học nên nhớ khi dùng Javascript", 1, "snapshot 3!", 1, "Someone just change the content", "2022-11-05 00:04:43.392513");

-- ATTACHMENT
INSERT INTO `attachment` VALUES ("image.png", 1);
INSERT INTO `attachment` VALUES ("image2.png", 2);
INSERT INTO `attachment` VALUES ("image2.png", 1);

-- COMMENT
INSERT INTO `comment` (content, userId, noteId, createdAt, updatedAt) VALUES ("OMG so great!", 1, 1, "2022-11-03 00:04:43.392513", "2022-11-03 00:04:43.392513");
INSERT INTO `comment` (content, userId, noteId, createdAt, updatedAt) VALUES ("Keep it up sir!", 2, 1, "2022-11-04 00:04:43.392513", "2022-11-04 00:04:43.392513");
INSERT INTO `comment` (content, userId, noteId, createdAt, updatedAt) VALUES ("Damn that was nice!", 2, 2, "2022-12-03 00:04:43.392513", "2022-12-03 00:04:43.392513");

-- USER CATEGORY
INSERT INTO `user_categories_category` VALUES (1, 1);
INSERT INTO `user_categories_category` VALUES (1, 2);
INSERT INTO `user_categories_category` VALUES (3, 2);

-- SHARED NOTE