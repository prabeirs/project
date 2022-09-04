const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/StudentDB', {
    useNewUrlParser: true,
},
    err => {
        if (!err)
        {
            console.log('Connected to Mongo')
        }
        else
        {
            console.log('Error connecting ' + err);
        }
    }
);

require('./student.model');