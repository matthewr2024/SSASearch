$(document).ready(function () {
  $.get("https://google-analytics.com/collect?v=1&t=pageview&tid=UA-171272647-1&cid=1&dp=search", function (data, status) {});
  $("#qualifyingSearchesLink").click(function (event) {
    event.preventDefault();
    $.get("https://google-analytics.com/collect?v=1&t=event&tid=UA-171272647-1&cid=0&ec=linkClick&ea=click&el=qualifyingSearches", function (data, status) {
      document.location = "https://www.goodshop.com/faq?q=9";
    });
  });
  $("#installInstructionsLink").click(function (event) {
    event.preventDefault();
    $.get("https://google-analytics.com/collect?v=1&t=event&tid=UA-171272647-1&cid=0&ec=footerLinkClick&ea=click&el=installInstructions", function (
      data,
      status
    ) {
      document.location = "https://matthewr2024.github.io/SSASearch/#instalation-instructions";
    });
  });
  $("#feedbackLink").click(function (event) {
    event.preventDefault();
    $.get("https://google-analytics.com/collect?v=1&t=event&tid=UA-171272647-1&cid=0&ec=footerLinkClick&ea=click&el=feedback", function (data, status) {
      document.location = "https://matthewr2024.github.io/SSASearch/#feedback";
    });
  });
  $("#otherWaysToHelpLink").click(function (event) {
    event.preventDefault();
    $.get("https://google-analytics.com/collect?v=1&t=event&tid=UA-171272647-1&cid=0&ec=footerLinkClick&ea=click&el=otherWaysToHelp", function (data, status) {
      document.location = "https://ststephensacademy.com/simple-fundraising/";
    });
  });
});
