// Wait that all the html is loaded
jQuery(document).ready(function() {
  // When we click on #open-modal
  jQuery("#open-modal").click(function() {
    jQuery("#modal-example").css("display", "flex");

    jQuery(".modal-close").click(function() {
      jQuery("#modal-example").css("display", "none");
    });
  });
});
