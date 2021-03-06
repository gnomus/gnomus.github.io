facts = {
  'seconds': 1,
  'debt': 1556,
  'birth': 0.02267,
  'death': 0.02754,
  'coffee': 2303.24,
  'cigarettes': 2546.296,
  'beer': 601.851,
  'fruits': 167.824,
  'vegetables': 243.055,
  'meat': 219.907,
  'drive': 8240.74,
  'gas-amount': 1368.055,
  'gas-cost': 1574.074,
  'pet-cost': 123.842,
  'trashed-food': 313,
  'gdp': 0.00136,
  'water': 0.0014,
  'marriage': 0.012239,
  'divorce': 0.00527
}

start = Date.now()

updateInterval = 100

numeral.language('de')

setInterval(function() {
  $('[live-update]').each(function(i, elem) {

    runtime = Date.now() - start;

    e = $(elem);

    newValue = (facts[e.attr('live-value')]*(runtime/1000.0))

    var format = e.attr('live-format') || "0,0.00"

    formated = numeral(newValue).format(format)

    e.html(formated)
  });

  $('[live-bar]').each(function(i, elem) {
    runtime = Date.now() - start;

    e = $(elem);

    newValue = (facts[e.attr('live-value')]*(runtime/1000.0))

    var divisor = parseFloat(e.attr('divisor')) || 1;

    e.css('width', newValue/divisor);
  });

}, updateInterval)


//jQuery Scroll Plugin
$.fn.followTo = function (pos,dist) {
    var $this = this,
        $window = $(window);

    $window.scroll(function (e) {
        if ($window.scrollTop() < pos-dist) {
            $this.css({
                position: 'absolute',
                top: pos
            });
        } else {
            $this.css({
                position: 'fixed',
                top: dist
            });
        }
    });
};

$('img.human').followTo(1200,100);
$('span.clock').followTo(1240,140);

$('.header').click(function() {
  $('.sources').toggle(500);
})
$('.sources').hide();
