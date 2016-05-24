var Stark = (function () {
    function Stark() {
        this.name = "Augusteen";
        this.saying = Stark.castle;
    }
    Stark.castle = "KUM KUM";
    return Stark;
}());
var ned = new Stark();
ned.saying = "Winter is coming";
console.log(Stark.castle);
