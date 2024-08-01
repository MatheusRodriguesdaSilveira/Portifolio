var titleText = document.getElementById('dynamic_text');
var text = 'SEARCH FOR SUCCESS'; // Sem o ponto final
var point = '.'; // Ponto final estilizado
var index = 0;

const write = () => {
    titleText.innerHTML = titleText.innerHTML.replace('|', '')

    if (text.length > index) {
        titleText.innerHTML += text.charAt(index) + '|';
        index++;
        setTimeout(write, 100);
    } else if (index === text.length) {
        titleText.innerHTML += '<span class="text-ocean text-5xl md:text-7xl">' + point + '</span>' + '|';
        index++;
        setTimeout(write, 100);
    } else {
        titleText.innerHTML = text + '<span class="text-ocean text-5xl md:text-7xl">' + point + '</span>';
        setTimeout(() => {
            index = 0;
            titleText.innerHTML = ''; 
            write();
        }, 1000);
    }
}

write();
