
function FS( FirstNumber, SecondNumber,  Range,  Counter, Sum)
{
    if (Counter < Range)
    {
        Counter++;
        FirstNumber = SecondNumber;
        SecondNumber = Sum;

        Sum = FirstNumber + SecondNumber;
        console.log("{0},   ", Sum);
        document.writeln(Sum);
        FS(FirstNumber, SecondNumber, Range, Counter, Sum);
        //console.log("ammar");
    }
    console.log("return");
    return;
}

 
var Counter = 0, Sum = 0, FirstNumber = 0, SecondNumber = 1;
var Range =prompt("type a range  for fubanci"); 

// FS(FirstNumber, SecondNumber, Range, Counter, Sum);


 

