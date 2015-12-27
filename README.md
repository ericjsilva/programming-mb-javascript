# programming-mb-javascript
Sample Javascript Program to be used for BSA Programming Merit Badge


## Insert New Tasks into MonogDB Database

```
db.tasks.insert({ text: "Hello world!", createdAt: new Date() });
db.tasks.insert({ text: "Learn Python", createdAt: new Date() });
db.tasks.insert({ text: "Learn PHP", createdAt: new Date() });
```