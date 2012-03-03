var express = require('express'),
            app = express.createServer();

app.configure(function() {
                  app.use(express.static(__dirname + '/assets'));
});
console.log(process.env.PORT);
app.listen(process.env.PORT || 8001);

