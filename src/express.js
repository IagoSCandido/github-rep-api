import express from 'express';
import user from './models/user.js';

const port = 3000
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/create-user-test', async (req, res) => {
  // const {
  // owner_login,
  // avatar_url,
  // name,
  // description,
  // visibility,
  // default_branch,
  // size,
  // } = req.body
  console.log(req.body) 
  await user.create(req.body)
})
app.listen(port, () => {
  console.log(`API rodando na porta:${port}`)
})

export default app;