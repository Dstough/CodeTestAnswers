using System;
using System.Text.RegularExpressions;

public class Username
{
    public static bool Validate(string username)
    {
        var Invalid = false;
        var Valid = true;

        if (username.Length < 6 || username.Length > 16)
            return Invalid;

        if (!isAlphaNumericWithHyphen(username) || !HasOneHyphen(username))
            return Invalid;

        if (!StartsWithLetter(username) || EndsWithHyphen(username))
            return Invalid;

        return Valid;
    }
    public static bool EndsWithHyphen(string username)
    {
        return username.EndsWith("-");
    }

    public static bool StartsWithLetter(string username)
    {
        return (username[0] >= 'A' && username[0] <= 'Z') ||
               (username[0] >= 'a' && username[0] <= 'z');
    }
    public static bool HasOneHyphen(string username)
    {
        return username.IndexOf('-') == username.LastIndexOf('-');
    }
    public static Boolean isAlphaNumericWithHyphen(string str)
    {
        Regex rg = new Regex(@"^[A-Za-z\d-]+$");
        return rg.IsMatch(str);
    }
}