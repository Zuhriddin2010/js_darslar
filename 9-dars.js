//shart operatorlari

/*
{
    let x = 12;
    
    if (x > 0)
    {
        x = x+10;
        console.log('x =',x)
    }

    if(x , 0)
    {
        x = x-10;
        console.log('x =',x)
    }
}
*/

{
    let n = prompt('istalgan son kiriting men uni sizga musbat yoki manfiy ekanligini aytib beraman')
    n = Number(n);

    if (n < 0)
    {
        alert('siz kiritga son manfiy')

    }

    if(n == 0)
    {
        alert('siz kiritgan nol sonidir')
    }

    if(n > 0)
    {
        alert('siz kiritgan son musbat son')
    }
}
