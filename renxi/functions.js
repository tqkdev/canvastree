
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date) {
    var now = new Date();
    var seconds = Math.floor((now - date) / 1000);

    var days = Math.floor(seconds / (3600 * 24));
    seconds %= 3600 * 24;

    var hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
    seconds %= 3600;

    var minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    var secs = String(seconds % 60).padStart(2, "0");

    $("#countdown").html(
        `<span class="digit">${days}</span> ngày 
         <span class="digit">${hours}</span> giờ 
         <span class="digit">${minutes}</span> phút 
         <span class="digit">${secs}</span> giây`
    );
}

function countdownTo(targetDate) {
    var now = new Date();
    var diff = Math.floor((targetDate - now) / 1000); // tổng giây còn lại

    if (diff <= 0) {
        $("#clock").html("Đã tới ngày ❤️");
        return;
    }

    var days = Math.floor(diff / (3600 * 24));
    diff %= 3600 * 24;

    var hours = String(Math.floor(diff / 3600)).padStart(2, "0");
    diff %= 3600;

    var minutes = String(Math.floor(diff / 60)).padStart(2, "0");
    var seconds = String(diff % 60).padStart(2, "0");

    $("#clock").html(
        `<span class="digit">${days}</span> ngày 
         <span class="digit">${hours}</span> giờ 
         <span class="digit">${minutes}</span> phút 
         <span class="digit">${seconds}</span> giây`
    );
}
