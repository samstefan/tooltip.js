$.fn.tooltip = function(options) {

  var defaults = {
    position: 'top',
    type: 'hover',
    offsetTop: 0,
    offsetLeft: 0
  }

  var options = $.extend(defaults, options)

  return this.each(function() {
    var obj = $(this)
    ,   content = obj.attr('data-tooltip-content')
    ,   tooltipWrapper = '<div class="tooltip"></div>'
    ,   elementPosition = new Object()
    ,   tooltipObj

    // Create tooltip element
    tooltipObj = $($.parseHTML(tooltipWrapper))

    // Add Content
    tooltipObj.prepend(content)

    function setPostion () {
      switch(options.position) {
        case 'top':
          elementPosition.fromTop = obj.offset().top - tooltipObj.outerHeight() - options.offsetTop
          elementPosition.fromLeft = obj.offset().left + ( obj.outerWidth() / 2 ) - ( tooltipObj.outerWidth() / 2 ) - options.offsetLeft
          tooltipObj.addClass('tooltip-top')
          break
        case 'bottom':
          elementPosition.fromTop = obj.offset().top + obj.outerHeight() - options.offsetTop
          elementPosition.fromLeft = obj.offset().left + ( obj.outerWidth() / 2 ) - ( tooltipObj.outerWidth() / 2 ) - options.offsetLeft
          tooltipObj.addClass('tooltip-bottom')
        break
        case 'right':
          elementPosition.fromTop = obj.offset().top + ( obj.outerHeight() / 2 ) - ( tooltipObj.outerHeight() / 2 ) - options.offsetTop
          elementPosition.fromLeft = obj.offset().left + obj.outerWidth() - options.offsetLeft
          tooltipObj.addClass('tooltip-right')
        break
        case 'left':
          elementPosition.fromTop = obj.offset().top + ( obj.outerHeight() / 2 ) - ( tooltipObj.outerHeight() / 2 ) - options.offsetTop
          elementPosition.fromLeft = obj.offset().left - tooltipObj.outerWidth() - options.offsetLeft
          tooltipObj.addClass('tooltip-left')
        break
      }
      // Set the elements position
      tooltipObj.css( 'top', elementPosition.fromTop ).css( 'left', elementPosition.fromLeft )
    }

    switch(options.type) {
      case 'hover':
        obj.mouseenter( function() {
          $('body').append(tooltipObj)
          setPostion()
        })
        obj.mouseleave( function() {
          $('.tooltip').remove()
        })
      break

      case 'focus':
        obj.focusin( function() {
          $('body').append(tooltipObj)
          setPostion()
        })
        obj.focusout( function() {
          $('.tooltip').remove()
        })
      break
    }

  })
}