$('.load-more').on('click', function(e) {
  e.preventDefault();
  var $self = $(e.currentTarget),
      $container = $self.closest('ul');
  
  // don't allow another load when already loading
  if($self.hasClass('loading')) {
    return;
  }
  $self.addClass('loading');

  var item = '<div class="event-item">\
                                <div class="event-img">\
                                    <img src="assets/img/img-1.jpg" alt="Image">\
                                </div>\
                                <div class="event-info">\
                                    <span class="date">20.06.2020 – 20:00 Uhr</span>\
                                    <h4>Veranstaltungstitel</h4>\
                                    <span class="date ml-10">Veranstaltungsort</span>\
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>\
                                    <a href="#" class="link">Zum Event <img src="assets/img/arrow-2.svg" alt="Image"></a>\
                                </div>\
                            </div>',
      items = '',
      itemsPerRow = 4;
  
  for (var i = 0; i < itemsPerRow; i++) {  
    items += item;
  }
  
  var $newrow = $(items);
  
  // timeout delay values
  var ajaxDelay = 2000,
      animationWait = 50,
      animationDuration = 201;

  // mimic ajax call
  setTimeout(function() {
    $newrow.insertBefore($self);
    // delay to show intro animation
    setTimeout(function() {
      $newrow.removeClass('intro-animation');
      // delay to return all back to their default state
      setTimeout(function() {
        $self.removeClass('loading');
        $newrow.removeClass('ajax');
      }, animationDuration);
    }, animationWait);
  }, ajaxDelay);
  
}); // END click handler