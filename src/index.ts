import { server } from './server';

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`\n** Started on port ${port} **\n`));
