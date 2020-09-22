$(document).ready(function () {
  $.get("https://google-analytics.com/collect?v=1&t=pageview&tid=UA-171272647-1&cid=1&dp=newtab", function (data, status) {});
  $("#gmailButton").click(function (event) {
    event.preventDefault();
    $.get("https://google-analytics.com/collect?v=1&t=event&tid=UA-171272647-1&cid=0&ec=bookmarkClick&ea=click&el=gmail", function (data, status) {
      document.location = "https://mail.google.com/";
    });
  });
  $("#classroomButton").click(function (event) {
    event.preventDefault();
    $.get("https://google-analytics.com/collect?v=1&t=event&tid=UA-171272647-1&cid=0&ec=bookmarkClick&ea=click&el=classroom", function (data, status) {
      document.location = "https://classroom.google.com/";
    });
  });
  $("#driveButton").click(function (event) {
    event.preventDefault();
    $.get("https://google-analytics.com/collect?v=1&t=event&tid=UA-171272647-1&cid=0&ec=bookmarkClick&ea=click&el=drive", function (data, status) {
      document.location = "https://drive.google.com/";
    });
  });
  $("#quizletButton").click(function (event) {
    event.preventDefault();
    $.get("https://google-analytics.com/collect?v=1&t=event&tid=UA-171272647-1&cid=0&ec=bookmarkClick&ea=click&el=quizlet", function (data, status) {
      document.location = "https://quizlet.com/";
    });
  });
  $("#chatButton").click(function (event) {
    event.preventDefault();
    $.get("https://google-analytics.com/collect?v=1&t=event&tid=UA-171272647-1&cid=0&ec=bookmarkClick&ea=click&el=chat", function (data, status) {
      document.location = "https://chat.google.com/";
    });
  });
  $("#chatButton").click(function (event) {
    event.preventDefault();
    $.get("https://google-analytics.com/collect?v=1&t=event&tid=UA-171272647-1&cid=0&ec=bookmarkClick&ea=click&el=chat", function (data, status) {
      document.location = "https://chat.google.com/";
    });
  });
  $("#meetButton").click(function (event) {
    event.preventDefault();
    $.get("https://google-analytics.com/collect?v=1&t=event&tid=UA-171272647-1&cid=0&ec=bookmarkClick&ea=click&el=meet", function (data, status) {
      document.location = "https://meet.google.com/";
    });
  });
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
