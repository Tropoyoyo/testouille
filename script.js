// End tabs.js

// Initialise at bottom of HTML in a <script> tag or within your main js bundle somewhere.

// Set 1
var tabs1 = tabs({
  el: "#tabs1",
  tabNavigationLinks: ".tab-link",
  tabContentContainers: ".tab-content",
});

// Initialise Set 1
tabs1.init();
var items = [];
var itemsHidden = [];
var itemsShowed = [];
$(document).ready(function () {




  if (window.location.href.indexOf("author") == -1) {
    $(".new").css("display", "none");
  }
  if (window.location.href.indexOf("author") == -1) {
    //$( "<span id='tc-viewPromoScroll'></span>" ).insertBefore( $(".featuredpromo:first").parent().parent().parent().parent().parent()  );
    $(".featuredpromo:first")
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .addClass("tc-viewPromoScroll");
    // $(".tc-viewPromoScroll").next().append('<div class="tc_readmore"> <button onclick="updatePromos()" class="tc_readmoreBtn" style="outline: 0px;"> Voir plus </button> </div>')
    $(".featuredpromo").each(function (i, item) {
      let iClass = `tc-promo-id-${i}`;

      items.push(iClass);
      $(this).addClass(iClass);
      if (i > 2) {
        itemsHidden.push(iClass);
        $(item).addClass("tc-promoOut");
      } else {
        itemsShowed.push(iClass);
      }
    });
  }
  $(".ancrePhone").css({
    display: "none",
  });
  var fixmeTop = 495;
  $(window).scroll(function () {
    var currentScroll = $(window).scrollTop();

    if (currentScroll >= fixmeTop) {
      $(".ancrePhone").css({
        display: "block",
        position: "fixed",
        top: "14%",
        right: "5rem",
      });
    } else if (currentScroll <= fixmeTop) {
      $(".ancrePhone").css({
        display: "none",
      });
    } else {
      $(".ancrePhone").css({
        display: "none",
      });
    }
  });
  // $("#full-topic__page-banner").append(
  //   '<div style="" class="tc-arrowDownContainer"><a href="#tc-container"><img src="/content/dam/html/fr/topic-cyber-2020/img/down arrow.png"/></a></div>'
  // );

  $("#full-topic__page-banner").append(
    '<div class="tc-imageTopContainer"><img src="/content/dam/assets/tx/project/equipes-regions/bordeaux/img/bordeaux-header-img.svg"/></div><div class="tc-videoTopContainer"><video poster="/content/dam/assets/tx/project/equipes-regions/bordeaux/img/bordeaux-header-img.svg" /></video></div>'
  );
});
$(".tc-select").on("change", function () {
  if (this.value == 1) {
    $(".c-1").addClass("is-active");
    $(".c-2").removeClass("is-active");
    $(".c-3").removeClass("is-active");
    $(".c-4").removeClass("is-active");
    $(".c-5").removeClass("is-active");
    $(".c-6").removeClass("is-active");
    $(".c-7").removeClass("is-active");
  } else if (this.value == 2) {
    $(".c-1").removeClass("is-active");
    $(".c-2").addClass("is-active");
    $(".c-3").removeClass("is-active");
    $(".c-4").removeClass("is-active");
    $(".c-5").removeClass("is-active");
    $(".c-6").removeClass("is-active");
    $(".c-7").removeClass("is-active");
  } else if (this.value == 3) {
    $(".c-1").removeClass("is-active");
    $(".c-2").removeClass("is-active");
    $(".c-3").addClass("is-active");
    $(".c-4").removeClass("is-active");
    $(".c-5").removeClass("is-active");
    $(".c-6").removeClass("is-active");
    $(".c-7").removeClass("is-active");
  } else if (this.value == 4) {
    $(".c-1").removeClass("is-active");
    $(".c-2").removeClass("is-active");
    $(".c-3").removeClass("is-active");
    $(".c-4").addClass("is-active");
    $(".c-5").removeClass("is-active");
    $(".c-6").removeClass("is-active");
    $(".c-7").removeClass("is-active");
  } else if (this.value == 5) {
    $(".c-1").removeClass("is-active");
    $(".c-2").removeClass("is-active");
    $(".c-3").removeClass("is-active");
    $(".c-4").removeClass("is-active");
    $(".c-5").addClass("is-active");
    $(".c-6").removeClass("is-active");
    $(".c-7").removeClass("is-active");
  } else if (this.value == 6) {
    $(".c-1").removeClass("is-active");
    $(".c-2").removeClass("is-active");
    $(".c-3").removeClass("is-active");
    $(".c-4").removeClass("is-active");
    $(".c-5").removeClass("is-active");
    $(".c-6").addClass("is-active");
    $(".c-7").removeClass("is-active");
  } else if (this.value == 7) {
    $(".c-1").removeClass("is-active");
    $(".c-2").removeClass("is-active");
    $(".c-3").removeClass("is-active");
    $(".c-4").removeClass("is-active");
    $(".c-5").removeClass("is-active");
    $(".c-6").removeClass("is-active");
    $(".c-7").addClass("is-active");
  }
});

$(".tc-linedInMain").hover(
  function () {
    $(this).animate(
      {
        width: "100px",
      },
      300
    );
  },
  function () {
    $(this).animate(
      {
        width: "30px",
      },
      300
    );
  }
);

$(".tc-PhoneMain").hover(
  function () {
    $(this).animate(
      {
        width: "150px",
      },
      300
    );
  },
  function () {
    $(this).animate(
      {
        width: "30px",
      },
      300
    );
  }
);
function updatePromos() {
  if (itemsHidden.length == 0) {
    itemsShowed = [];
    let itemsShowedTemp = items;
    $.each(itemsShowedTemp, function (i, item) {
      if (i > 2) {
        itemsHidden.push(item);
        $("." + item).addClass("tc-promoOut");
      } else {
        itemsShowed.push(item);
        $("." + item).removeClass("tc-promoOut");
        $("." + item).addClass("tc-promoIn");
      }
    });
  } else {
    var itemsCurruntshow = itemsHidden;
    if (itemsHidden.length >= 3) {
      itemsCurruntshow = itemsHidden.splice(0, 3);
    } else if (itemsHidden.length == 2) {
      itemsCurruntshow = itemsHidden.splice(0, 2);
    } else if (itemsHidden.length == 1) {
      itemsCurruntshow = itemsHidden.splice(0, 1);
    }
    let tempItemsShowed = itemsShowed;

    $.each(itemsShowed, function (i, item) {
      $("." + item).addClass("tc-promoOut");
    });

    $.each(itemsCurruntshow, function (i, item) {
      $("." + item).removeClass("tc-promoOut");
      $("." + item).addClass("tc-promoIn");
      itemsShowed.push(item);
    });



  }
  console.log("scroll");
  document
    .querySelector(".tc-promos")
    .scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
}
// $(".tc_readmoreBtn").click(function (e) {
//   e.preventDefault();

//});
//
