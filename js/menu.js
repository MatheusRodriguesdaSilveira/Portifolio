var titleText = document.getElementById('dynamic_text');
var text = 'SEARCH FOR SUCCESS'; // Sem o ponto final
var point = '.'; // Ponto final estilizado
var index = 0;

const write = () => {
    titleText.innerHTML = titleText.innerHTML.replace('|', '');

    if (text.length > index) {
        titleText.innerHTML += text.charAt(index) + '|';
        index++;
        setTimeout(write, 180);
    } else if (index === text.length) {
        titleText.innerHTML += '<span class="bg-gradient-to-r text-white bg-clip-text text-transparent">' + point + '</span>';
        index++;
        setTimeout(() => {
            index = 0;
            titleText.innerHTML = ''; 
            write();
        }, 700);
    }
}

write();