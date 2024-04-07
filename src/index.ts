import { server } from './server/Server';

server.listen(process.env.PORT, () => console.log(`servidor rodando no url http://localhost:${process.env.PORT}`));