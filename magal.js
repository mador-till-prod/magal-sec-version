const CODE = ["2453","ממג", "המנון", "סמל", "דגל"];
var elem = document.querySelector("html");

//load event
window.addEventListener("load", function(){
    $(".check").on("click", checkCode);
    $(".main-door").on("click", showRoom);
    $("#next-button").on("click", function() {
        window.location = "https://mador-till-prod.github.io/magal-escape-box/code/";
    });
})

function checkCode() {
    $(this).off("click", checkCode)
    console.log($("#enter-code-"+ $(this).attr("id").slice(-1)));
    if ($("#enter-code-"+ $(this).attr("id").slice(-1)).val() === CODE[(Number($(this).attr("id").slice(-1)))-1]) {
eval("response" + $(this).attr("id").slice(-1)+'("correct")');
    } else{
        $(this).on("click", checkCode);
        eval("response" + $(this).attr("id").slice(-1)+'("incorrect")');
    }
}

function response1(answer) {
    if(answer === "correct") {
        document.getElementById("code-instructions").innerHTML = "הצלחתם להיכנס לחדר!";
        setTimeout(function(){
    $("#code-div").slideToggle(500);
    // document.getElementById("mission-div").style.cssText = "display:block";
        }, 1000)
    } else {
        document.getElementById("code-instructions").innerHTML = "זה לא הקוד הנכון! תנסו שוב...";
    }
}

function response2(answer) {
    if(answer === "correct") {
        document.getElementById("main-instructions-question").innerHTML = "כל הכבוד! הצלחתם לצאת מהחדר";
        $("#gagi").css("display", "none");
        $("#next-button").css("display", "block");
    } else {
        document.getElementById("main-instructions-question").innerHTML = "זה לא הקוד הנכון! תנסו שוב...";
    }
}

function response3(answer) {
$("#answer-1").css("display", "block");
if(answer === "correct") {
document.getElementById("answer-1").innerHTML = 'נכון! השיר "התקווה" הוא ההמנון הלאומי של מדינת ישראל. הוא נכתב בשנת 1878 על ידי נפתלי הרץ אימבר.';
} else {
    document.getElementById("answer-1").innerHTML = "זו לא התשובה הנכונה";
}
}

function response4(answer) {
    $("#answer-2").css("display", "block");
    if(answer === "correct") {
    document.getElementById("answer-2").innerHTML = 'נכון! מנורת שבעת הקנים היא הסמל היהודי העתיק ביותר שמזוהה עם היהדות. עיצוב המנורה לקוח משער טיטוס שברומא, המתאר את לקיחתה. עלי הזית משני צידי המנורה מסמלים את רצון העם היהודי בשלום.';
    } else {
        document.getElementById("answer-2").innerHTML = "זו לא התשובה הנכונה";
    }
    }

    function response5(answer) {
        $("#answer-3").css("display", "block");
        if(answer === "correct") {
        document.getElementById("answer-3").innerHTML = 'נכון! לפי החזון של בנימין זאב הרצל, דגל המדינה נועד להיות לבן עם שבעה כובי זהב. העיצוב של הדגל הנוכחי הוצע על ידי עוזרו הקרוב, דוד וולפסון- עם פסי תכלת שמסמלים את טלית.';
        } else {
            document.getElementById("answer-3").innerHTML = "זו לא התשובה הנכונה";
        }
        }

function showRoom() {
    if($("#room-"+ $(this).attr("id").slice(-1)).css("display") === "none"){
        $("#room-"+ $(this).attr("id").slice(-1)).css("display", "block");
    } else {
        $("#room-"+ $(this).attr("id").slice(-1)).css("display", "none");
    }

}