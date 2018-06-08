var express = require('express')
var cheerio = require('cheerio')
var superagent = require('superagent')

var app = express()

app.get('/', function(req, res, next) {
  superagent.get('https://cnodejs.org/').end(function(err, sres) {
    if (err) return next(err)

    const $ = cheerio.load(sres.text)
    const items = []
    $('#topic_list .topic_title').each(function(idx, element) {
      const $element = $(element)
      items.push({
        title: $element.attr('title'),
        href: $element.attr('href'),
      })
    })

    res.send(items)
  })
})

app.listen(process.env.PORT || 4000, function() {
  console.log('app is listening at port 4000')
})
