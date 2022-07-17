
var sec = 0;
let timer;
function shuffle() {
    let pieces = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    pieces.sort(function (a, b) { return 0.5 - Math.random() });

    $('#puzzle').html('');
    for (var i = 0; i < pieces.length; i++) {
        $("#puzzle").append("<div id='tile" + pieces[i] + "' class='tile'></div>");
    }

    sec = 0;
    timer = setInterval(function () {
        sec = sec + 1;
        $("#timer").html(sec);
    }, 1000);
}



$(".sortable").sortable({ connectWith: ".sortable" },
    {
        update: function (event, ui) {
            countRight = 0;
            $("#puzzle > div").each((index, elem) => {
                if ('tile' + (index + 1) == elem.id) {
                    countRight = countRight + 1;
                }
                if (countRight == 9) {
                    let completedin = sec;
                    clearInterval(timer);
                    $("#timer").html('');
                    alert('completed in ' + completedin + ' seconds');
                    $('#startBtn').show();
                }
            });
        }
    });
$("#sortable").disableSelection();
