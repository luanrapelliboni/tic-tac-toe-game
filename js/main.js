$(document).ready(function(){
    let winner = null;
    let squares = new Array(9);
    var current = $('#current').val();
    $('.row .square').bind('click', function(){
        if (winner == null) {
            let data_index = $(this).attr('data-index');
            squares[data_index] = current;
            $(this).children('span').html(current);
            current = (current === "X") ? "O" : "X";
            winner = calculateWinner(squares);
            if (winner != null) {
                $('#scoreboard').html(winner + ' é o vencedor!');
                $('#scoreboard').show();
                $('.row .square').removeClass('pointer');
                $('#button-container').show();
            }
        }
    });
    $('#button-container button').click(function(){
        squares.length = 0;
        winner = null;
        $('#scoreboard').html('');
        $('#scoreboard').hide();
        $('.row .square span').html('');
        $('.row .square').addClass('pointer');
        $('#button-container').hide();
    });
});
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const[a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}