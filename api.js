import { Router } from 'express';

const router = new Router();
const users = [
    { avatar: 'http://google.com', name: 'John', age: 23 },
    { avatar: 'http://yahoo.com.tw', name: 'Amy', age: 18 },
];

// Write your restful api here:
router.get('/users', (req, res) => {
  res.json({users: users});
});

router.get('/users/:id', (req, res) => {
  var _id = req.params.id;
  if(_id<=users.length){
    res.json(users[id-1]);
  }
  else{
    res.send('404');
  }
  
});

export default router;
