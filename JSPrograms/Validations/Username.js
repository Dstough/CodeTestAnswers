(function UserNameValidator () {
    IsCorrectLength = function (str) {
        return str.length >= 6 && str.length <= 16
    }

    IsAlphaNumericWithHyphens = function (str) {
        return str.match(/^[a-z0-9-]+$/i);
    }

    HasOnlyOneHyphen = function (str) {
        return str.indexOf("-") === str.lastIndexOf("-")
    }

    StartsWithLetter = function (str) {
        return str.match(/^[a-z]/i);
    }

    EndsWithHyphen = function (str) {
        return str.match(/[-]$/i);
    }

    validate = function (username) {
        var Invalid = "Invalid Username."
        var Valid = "Valid Username.";

        if (IsCorrectLength(username) &&
            IsAlphaNumericWithHyphens(username) &&
            HasOnlyOneHyphen(username) &&
            StartsWithLetter(username) &&
            !EndsWithHyphen(username))
            return Valid;
        else return Invalid;
    }
})();