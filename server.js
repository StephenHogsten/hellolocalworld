require('dotenv').config();

for (var i=0,j; i<10; i++) {
  j = i*20;
  console.log('number ' + i);
  console.log(' other number ' + j);
  console.log(process.env.MONGO_URI);
}
return 