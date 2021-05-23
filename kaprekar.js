function htmlx()
{
    var number = document.getElementById("num").value;
    
    var numList = get_digits(number);
    numList = numList.sort();

    if (numList.length === 4) 
    {
        console.log('4');
        let dig1 = numList[3];
        let dig2 = numList[2];
        let dig3 = numList[1];
        let dig4 = numList[0];

        let descendingNumber = Number(dig1.toString() + dig2.toString() + dig3.toString() + dig4.toString());
        let ascendingNumber = Number(dig4.toString() + dig3.toString() + dig2.toString() + dig1.toString());

        var sonuc = is_6174_real(number, descendingNumber, ascendingNumber);
    }

    else 
    {
        console.log('4 değil');
        var sonuc = "Lütfen uygun bir sayı girin.";
    }

    document.getElementById("sonuc").innerHTML = sonuc;

}

function get_digits(number) 
{
    return digits = (""+number).split("");
}
    
function is_6174_real(number, descendingNumber, ascendingNumber) 
{
    let counter = 0;

    let temp = number;

    if (number === 6174) 
    {
        return "6174, reaches 6174 at 1 step.";
    }

    while (descendingNumber - ascendingNumber !== temp) 
    {
        if (descendingNumber - ascendingNumber === 999) 
        {
            descendingNumber = 9990;
            ascendingNumber = 999;
        }

        temp = descendingNumber - ascendingNumber;

        var numList = get_digits(temp);
        numList = numList.sort();

        let dig1 = numList[3];
        let dig2 = numList[2];
        let dig3 = numList[1];
        let dig4 = numList[0];

        descendingNumber = Number(dig1.toString() + dig2.toString() + dig3.toString() + dig4.toString());
        ascendingNumber = Number(dig4.toString() + dig3.toString() + dig2.toString() + dig1.toString());

        counter++;

        if (descendingNumber - ascendingNumber === temp)
        {
                if (temp === 6174) 
                {
                    return `6174 sayısına ${counter} adımda ulaşıyor!`;
                }
        }
    }
}
