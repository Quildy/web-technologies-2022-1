function checkWords(text)
{
    let words = text.split(" ");
    let resultString = "";
    for (let i = 0; i< words.length; i++)
    {
        if (words[i].length >= 5)
        {
            resultString += reverseWord(words[i]) + " ";
        }
        else
        {
            resultString += words[i] + " ";
        }
    }
    console.log(resultString);
}

function reverseWord(word)
{
    let reverse = "";
    for (let k = word.length - 1; k >= 0; k--) 
    {
        reverse += word[k];
    }
    return reverse;
}

checkWords("Привет я Эдем");
checkWords("Тест Эль Примо");
checkWords( "Привет от Legacy" )