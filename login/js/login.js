$(document).ready(function () {
  $(".tab").click(function () {
    let target = $(this).data("target");
    $(".tab").removeClass("active");
    $(this).addClass("active");
    if (target === "sms") {
      $("#smsForm").removeClass("d-none");
      $("#passwordForm").addClass("d-none");
    } else if (target === "password") {
      $("#smsForm").addClass("d-none");
      $("#passwordForm").removeClass("d-none");
    }
  });

  let countdown = 60;
  let timer = null;
  $("#sendCode").click(function () {
    let phone = $("#phoneInput").val();
    if (!phone) {
      alert("请输入手机号");
      return;
    }
    if (countdown === 60) {
      $(this).prop("disabled", true);
      timer = setInterval(function () {
        countdown--;
        $("#sendCode").text("重新发送（" + countdown + ")");
        if (countdown === 0) {
          clearInterval(timer);
          countdown = 60;
          $("#sendCode").prop("disabled", false).text("发送验证码");
        }
      }, 1000);
    }
  });
});
