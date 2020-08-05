# Tpescript in VS Code Runner

- create Dockerfile containing this code

```dockerfile
FROM node:12-alpine
RUN npm install -g typescript && npm install -g ts-node
```

- run command

```bash
docker build -t "local:myts" .
```

- open VSCode runner settings and set typescript command

```json
"code-runner.executorMap": {
        "typescript": "docker run --rm --volume $dir$fileName:/home/$fileName local:myts ts-node /home/$fileName",
    }
```

- try create sample.ts file and run typescript.

```typescript
interface User {
    name: string;
    id: number;
}

let user1: User = { name: 'aaa', id: 1 };
let user2: User = { name: 'bbb', id: 2 };

let userList: User[] = [user1, user2];

console.table(userList);
```
