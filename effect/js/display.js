$(function () {
    $("ul li").hover(function(){
        $(this).addClass('hs');
        $(this).prevAll().addClass('hs');
    },function(){
        $(this).removeClass('hs');
        $(this).prevAll().removeClass('hs');
    })

    $("ul li").click(function () {
        $(this).addClass('cs');
        $(this).prevAll().addClass('cs');
        $(this).nextAll().removeClass('cs');
    })

      var html = ''
      for (var i = 0; i < 10; i++) {
        html+=`  <tr>
            <td>${i}dbi</td>
            <td>${i}$100</td>
            <td>${i}dbi</td>
            <td>${i}$100</td>
            <td>${i}dbi</td>
            <td >${i}</td>
            <td>${i}dbi</td>
            <td>${i}$100</td>

          </tr>`
      }
      $('.js_contain').html(html);

})

var sortTr = function(event) {
  console.log(event);
}
