for (let i = 0; i < 16; i++) {
    let tile = `<div id="box${i}" class="box"></div>`;
    $("#board").append(tile);


    $(`#box${i}`).click(function () {
        $(this).toggleClass("lightBox")
    });
};
