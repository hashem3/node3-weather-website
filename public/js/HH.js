var cur = /** @class */ (function () {
    function cur(currency1, currency2, exchangeRate) {
        this.currency1 = currency1;
        this.currency2 = currency2;
        this.exchangeRate = exchangeRate;
    }
    cur.prototype.swap = function () {
        var t;
        t = this.currency1;
        this.currency1 = this.currency2;
        this.currency2 = t;
        document.getElementById("Currancy1").value = String(this.currency1);
        document.getElementById("Currancy2").value = String(this.currency2);
        document.getElementById("ExchangeRate").value = String((1 / this.exchangeRate).toFixed(4));
        this.exchangeRate = 1 / this.exchangeRate;
    };
    cur.prototype.present = function () {
        document.getElementById("result").innerHTML = "Exchange rate " + this.currency2 + "/" + this.currency1 + "=" + (this.exchangeRate.toFixed(4));
        document.getElementById("left").innerHTML = this.currency1;
        document.getElementById("right").innerHTML = this.currency2;
    };
    cur.prototype.forloop = function () {
        var x, y;
        x = 20;
        y = 200;
        for (var i = 1; i <= 10; i++) {
            for (var j = 1; j <= 1; j++) {
                document.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].innerHTML = String((this.exchangeRate * i).toFixed(2));
            }
        }
        for (var i = 11; i <= 19; i++) {
            for (var j = 1; j <= 1; j++) {
                document.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].innerHTML = String((this.exchangeRate * x).toFixed(2));
                x = x + 10;
            }
        }
        for (var i = 20; i <= 28; i++) {
            for (var j = 1; j <= 1; j++) {
                document.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].innerHTML = String((this.exchangeRate * y).toFixed(2));
                y = y + 100;
            }
        }
    };
    return cur;
}());
function add() {
    var n = new cur(document.getElementById("Currancy1").value, document.getElementById("Currancy2").value, Number(document.getElementById("ExchangeRate").value));
    n.present();
    n.forloop();
}
function add2() {
    var n = new cur(document.getElementById("Currancy1").value, document.getElementById("Currancy2").value, Number(document.getElementById("ExchangeRate").value));
    n.swap();
    n.present();
    n.forloop();
}
function show() {
    document.getElementById("hidden").style.display = "block";
    document.getElementById("hidden2").style.display = "block";
    document.getElementById("result").style.display = "block";
}
