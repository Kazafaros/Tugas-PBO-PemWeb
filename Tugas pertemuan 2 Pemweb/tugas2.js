const form = document.createElement('form');
form.action = '';

const table = document.createElement('table');

const namaRow = document.createElement('tr');
const namaLabel = document.createElement('td');
namaLabel.textContent = 'Nama';
const namaInput = document.createElement('td');
const namaField = document.createElement('input');
namaField.type = 'text';
namaField.name = 'nama';
namaInput.appendChild(namaField);
namaRow.appendChild(namaLabel);
namaRow.appendChild(namaInput);
table.appendChild(namaRow);

const nimRow = document.createElement('tr');
const nimLabel = document.createElement('td');
nimLabel.textContent = 'Nim';
const nimInput = document.createElement('td');
const nimField = document.createElement('input');
nimField.type = 'text';
nimField.name = 'nim';
nimInput.appendChild(nimField);
nimRow.appendChild(nimLabel);
nimRow.appendChild(nimInput);
table.appendChild(nimRow);

const tempatLahirRow = document.createElement('tr');
const tempatLahirLabel = document.createElement('td');
tempatLahirLabel.textContent = 'Tempat lahir';
const tempatLahirInput = document.createElement('td');
const tempatLahirField = document.createElement('input');
tempatLahirField.type = 'text';
tempatLahirField.name = 'tempat lahir';
tempatLahirInput.appendChild(tempatLahirField);
tempatLahirRow.appendChild(tempatLahirLabel);
tempatLahirRow.appendChild(tempatLahirInput);
table.appendChild(tempatLahirRow);

const tanggalLahirRow = document.createElement('tr');
const tanggalLahirLabel = document.createElement('td');
tanggalLahirLabel.textContent = 'Tanggal lahir';
const tanggalLahirInput = document.createElement('td');
const tanggalLahirField = document.createElement('input');
tanggalLahirField.type = 'date';
tanggalLahirField.name = 'tanggal lahir';
tanggalLahirInput.appendChild(tanggalLahirField);
tanggalLahirRow.appendChild(tanggalLahirLabel);
tanggalLahirRow.appendChild(tanggalLahirInput);
table.appendChild(tanggalLahirRow);

const jkRow = document.createElement('tr');
const jkLabel = document.createElement('td');
jkLabel.textContent = 'Jenis kelamin';
const jkInput = document.createElement('td');
const lakiLakiField = document.createElement('input');
lakiLakiField.type = 'radio';
lakiLakiField.name = 'jk';
lakiLakiField.value = 'laki-laki';
const perempuanField = document.createElement('input');
perempuanField.type = 'radio';
perempuanField.name = 'jk';
perempuanField.value = 'perempuan';
jkInput.appendChild(lakiLakiField);
jkInput.appendChild(document.createTextNode('Laki-laki'));
jkInput.appendChild(perempuanField);
jkInput.appendChild(document.createTextNode('Perempuan'));
jkRow.appendChild(jkLabel);
jkRow.appendChild(jkInput);
table.appendChild(jkRow);

const alamatRow = document.createElement('tr');
const alamatLabel = document.createElement('td');
alamatLabel.textContent = 'Alamat';
const alamatInput = document.createElement('td');
const alamatField = document.createElement('textarea');
alamatField.name = 'alamat';
alamatField.cols = 30;
alamatField.rows = 10;
alamatInput.appendChild(alamatField);
alamatRow.appendChild(alamatLabel);
alamatRow.appendChild(alamatInput);
table.appendChild(alamatRow);

const hobiRow = document.createElement('tr');
const hobiLabel = document.createElement('td');
hobiLabel.textContent = 'Hobi';
const hobiInput = document.createElement('td');
const membacaField = document.createElement('input');
membacaField.type = 'checkbox';
membacaField.name = 'hobi';
membacaField.value = 'membaca';
const menulisField = document.createElement('input');
menulisField.type = 'checkbox';
menulisField.name = 'hobi';
menulisField.value = 'menulis';
const menontonField = document.createElement('input');
menontonField.type = 'checkbox';
menontonField.name = 'hobi';
menontonField.value = 'menonton';
const futsalField = document.createElement('input');
futsalField.type = 'checkbox';
futsalField.name = 'hobi';
futsalField.value = 'futsal';
hobiInput.appendChild(membacaField);
hobiInput.appendChild(document.createTextNode('Membaca'));
hobiInput.appendChild(menulisField);
hobiInput.appendChild(document.createTextNode('Menulis'));
hobiInput.appendChild(menontonField);
hobiInput.appendChild(document.createTextNode('Bermain Game '));
hobiInput.appendChild(futsalField);
hobiInput.appendChild(document.createTextNode('Futsal'));
hobiRow.appendChild(hobiLabel);
hobiRow.appendChild(hobiInput);
table.appendChild(hobiRow);

const programStudiRow = document.createElement('tr');
const programStudiLabel = document.createElement('td');
programStudiLabel.textContent = 'Program studi';
const programStudiInput = document.createElement('td');
const programStudiSelect = document.createElement('select');
programStudiSelect.name = 'program studi';
const options = [
    {'value': 'Sistem Informasi Kelautan', 'text': 'Sistem informasi kelautan'},
    {'value': 'Logistik Kelautan', 'text': 'Logistik kelautan'},
    {'value': 'Pendidikan Kelautan Perikanan', 'text': 'Pendidikan Kelautan Perikanan'},
    {'value': 'Pendidikan Guru Sekolah Dasar', 'text': 'Pendidikan Guru Sekolah Dasar'},
    {'value': 'Pendidikan Guru Pendidikan Anak Usia Dini', 'text': 'Pendidikan Guru Pendidikan Anak Usia Dini'}
];
options.forEach(option => {
    const op = document.createElement('option');
    op.value = option.value;
    op.textContent = option.text;
    programStudiSelect.appendChild(op);
});
programStudiInput.appendChild(programStudiSelect);
programStudiRow.appendChild(programStudiLabel);
programStudiRow.appendChild(programStudiInput);
table.appendChild(programStudiRow);

const submitRow = document.createElement('tr');
const submitCell = document.createElement('td');
const submitField = document.createElement('input');
submitField.type = 'submit';
submitField.value = 'Simpan';
submitCell.appendChild(submitField);
submitRow.appendChild(submitCell);
table.appendChild(submitRow);

form.appendChild(table);

document.body.appendChild(form);

const resultTable = document.createElement('table');
resultTable.id = 'result-table';
const resultThead = document.createElement('thead');
const resultTbody = document.createElement('tbody');

const resultRow = document.createElement('tr');
const resultThNama = document.createElement('th');
resultThNama.textContent = 'Nama';
const resultThNim = document.createElement('th');
resultThNim.textContent = 'Nim';
const resultThTempatLahir = document.createElement('th');
resultThTempatLahir.textContent = 'Tempat lahir';
const resultThTanggalLahir = document.createElement('th');
resultThTanggalLahir.textContent = 'Tanggal lahir';
const resultThJk = document.createElement('th');
resultThJk.textContent = 'Jenis kelamin';
const resultThAlamat = document.createElement('th');
resultThAlamat.textContent = 'Alamat';
const resultThHobi = document.createElement('th');
resultThHobi.textContent = 'Hobi';
const resultThProgramStudi = document.createElement('th');
resultThProgramStudi.textContent = 'Program studi';

resultRow.appendChild(resultThNama);
resultRow.appendChild(resultThNim);
resultRow.appendChild(resultThTempatLahir);
resultRow.appendChild(resultThTanggalLahir);
resultRow.appendChild(resultThJk);
resultRow.appendChild(resultThAlamat);
resultRow.appendChild(resultThHobi);
resultRow.appendChild(resultThProgramStudi);

resultThead.appendChild(resultRow);
resultTable.appendChild(resultThead);
resultTable.appendChild(resultTbody);

document.body.appendChild(resultTable);


document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nama = document.querySelector('input[name="nama"]').value;
    const nim = document.querySelector('input[name="nim"]').value;
    const tempatLahir = document.querySelector('input[name="tempat lahir"]').value;
    const tanggalLahir = document.querySelector('input[name="tanggal lahir"]').value;
    const jk = document.querySelector('input[name="jk"]:checked').value;
    const alamat = document.querySelector('textarea[name="alamat"]').value;
    const hobi = [];
    const hobiFields = document.querySelectorAll('input[name="hobi"]:checked');
    hobiFields.forEach(function(field) {
        hobi.push(field.value);
    });
    const programStudi = document.querySelector('select[name="program studi"]').value;

    const resultRow = document.createElement('tr');
    const resultNama = document.createElement('td');
    resultNama.textContent = nama;
    const resultNim = document.createElement('td');
    resultNim.textContent = nim;
    const resultTempatLahir = document.createElement('td');
    resultTempatLahir.textContent = tempatLahir;
    const resultTanggalLahir = document.createElement('td');
    resultTanggalLahir.textContent = tanggalLahir;
    const resultJk = document.createElement('td');
    resultJk.textContent = jk;
    const resultAlamat = document.createElement('td');
    resultAlamat.textContent = alamat;
    const resultHobi = document.createElement('td');
    resultHobi.textContent = hobi.join(', ');
    const resultProgramStudi = document.createElement('td');
    resultProgramStudi.textContent = programStudi;

    resultRow.appendChild(resultNama);
    resultRow.appendChild(resultNim);
    resultRow.appendChild(resultTempatLahir);
    resultRow.appendChild(resultTanggalLahir);
    resultRow.appendChild(resultJk);
    resultRow.appendChild(resultAlamat);
    resultRow.appendChild(resultHobi);
    resultRow.appendChild(resultProgramStudi);

    resultTbody.appendChild(resultRow);
});

document.querySelector('form').addEventListener('click', function(event) {
    console.log('Formulir di klik');
});

document.querySelector('form').addEventListener('change', function(event) {
    console.log('Formulir berubah');
});

document.querySelector('form').addEventListener('mouseover', function(event) {
    console.log('Formulir di hover');
});

document.querySelector('form').addEventListener('keyup', function(event) {
    console.log('Formulir di ketik');
});

window.addEventListener('load', function(event) {
    console.log('Formulir selesai di load');
});
