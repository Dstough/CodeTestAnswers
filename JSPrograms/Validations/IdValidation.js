(function () {
    validateDigit = function (id) {
        return recursiveDigitSum(id);
    }
    recursiveDigitSum = function (id) {
        if (id.length <= 1)
            return id
        else {
            var sum = 0;
            for (var i = 0; i < id.length; i++) {
                var num = id.charAt(i);
                if (isNaN(num)) throw "Non numeric digit in Id.";
                sum = sum + parseInt(num);
            }
            return recursiveDigitSum(sum.toString());
        }
    }
})();

console.log(validateDigit('115789')); // 4
console.log(validateDigit('584898')); // 6