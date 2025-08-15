function ComapreTime(timeString1 , timeString2)
{
    let datetime1 = new Date(timeString1);
    let datetime2 = new Date(timeString2);
    if(datetime1.getTime() > datetime2.getTime())
    {
        return true;
    }
    else
    {
        return false;
    }
}
export {
    ComapreTime
}