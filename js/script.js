const div = document.querySelector('.row');
const childrenCount = div.childElementCount;
console.log(`Количество детей у дива: ${childrenCount}`);

const sectionX = document.querySelector('.x-ordered');
const sectionY = document.querySelector('.y-ordered');
const sectionZ = document.querySelector('.z-ordered');

if (childrenCount % 3 === 0) {
    sectionX.classList.add('col-xs-12', 'col-md-6', 'col-lg-4');
    sectionY.classList.add('col-xs-12', 'col-md-6', 'col-lg-4');
    sectionZ.classList.add('col-xs-12', 'col-md-12', 'col-lg-4');
    console.log('расклад "дети/3 дает остаток 0" активирован');
}

if (childrenCount % 3 === 1) {
    sectionX.classList.add('col-xs-12', 'col-md-6', 'col-lg-4');
    sectionY.classList.add('col-xs-12', 'col-md-6', 'col-lg-4');
    sectionZ.classList.add('col-xs-12', 'col-md-6', 'col-lg-12');
    console.log('расклад "дети/3 дает остаток 1" активирован');
}

if (childrenCount % 3 === 2) {
    sectionX.classList.add('col-xs-12', 'col-md-6', 'col-lg-4');
    sectionY.classList.add('col-xs-12', 'col-md-6', 'col-lg-6');
    sectionZ.classList.add('col-xs-12', 'col-md-6', 'col-lg-6');
    console.log('расклад "дети/3 дает остаток 2" активирован');
}