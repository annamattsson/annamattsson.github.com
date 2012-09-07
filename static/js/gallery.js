(function(){
  $(document).ready(function() {
    var posnames, stories;
    stories = $('.story');
    posnames = function() {
      return stories.each(function() {
        var offset;
        offset = $(this).find('img').offset();
        return $(this).find('.storyname').css(offset);
      });
    };
    stories.each(function() {
      var offset;
      offset = $(this).find('img').offset();
      $(this).append($('<div class="storyname hidden">' + $(this).attr('title') + '</div>'));
      return posnames();
    });
    $(window).resize(posnames);
    return $('.story img').hover(function(event) {
      var images, story;
      story = $(event.target).parents('.story');
      images = story.find('img');
      images.toggleClass('active');
      return story.find('.storyname').toggleClass('hidden');
    });
  });
})();
