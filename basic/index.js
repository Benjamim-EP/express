const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.post('/corpo',(req,res)=>{
	let corpo =''
	req.on('data',function(parte){
			corpo += parte
	})

	req.end('end',function(){
		res.send(corpo)
	})
})

app.listen(3001)