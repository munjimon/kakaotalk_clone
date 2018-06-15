$(document).ready(() => {
    let $actionBtn = $("#actionBtn"),
        $iconBtn = $("#actionBtn .fa"),
        $lockBtn = $("#lockBtn");


    $actionBtn.click(() => {
        $iconBtn.toggleClass("fa-times fa-comment");
        $lockBtn.toggleClass("showing-button");
    });
});

