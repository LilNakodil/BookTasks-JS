"use strict"
function AgeInRangeChecker(age){
    if (age>=14 && age<=90){
        return true;
    }
    else
    {
        return false;
    }
}
function AgeOutRangeChecker(age){
    if (age<14 && age>90){
        return true;
    }
    else
    {
        return false;
    }
}
function AgeOutRangeChecker2(age){
    if (!(age>=14 && age<=90)){
        return true;
    }
    else
    {
        return false;
    }
}