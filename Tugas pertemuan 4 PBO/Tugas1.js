// SuperClass Pesawat
class Pesawat { 
    constructor(nama, jenis, kecepatan, ketinggian) {
        this.nama = nama;
        this.jenis = jenis;
        this.kecepatan = kecepatan;
        this.ketinggian = ketinggian;
    }
    terbang() {
        return `Pesawat ${this.nama} dengan jenis ${this.jenis} terbang dengan kecepatan ${this.kecepatan} km/jam dan ketinggian ${this.ketinggian} meter`;
    }
}

// SubClass pesawat terbang
class PesawatTerbang extends Pesawat {
    constructor(nama, jenis, kecepatan, ketinggian, tujuan) {
        super(nama, jenis, kecepatan, ketinggian);
        this.tujuan = tujuan;
    }
    terbang() {
        return `Pesawat ${this.nama} dengan jenis ${this.jenis} terbang dengan kecepatan ${this.kecepatan} km/jam dan ketinggian ${this.ketinggian} meter menuju ${this.tujuan}`;
    }
}

// SubClass pesawat kargo
class PesawatKargo extends Pesawat {
    constructor(nama, jenis, kecepatan, ketinggian, berat) {
        super(nama, jenis, kecepatan, ketinggian);
        this.berat = berat;
    }
    terbang() {
        return `Pesawat ${this.nama} dengan jenis ${this.jenis} terbang dengan kecepatan ${this.kecepatan} km/jam dan ketinggian ${this.ketinggian} meter membawa kargo dengan berat ${this.berat} kg`;
    }
}

// SubClass pesawat tempur
class PesawatTempur extends Pesawat {
    constructor(nama, jenis, kecepatan, ketinggian, jumlahRudal) {
        super(nama, jenis, kecepatan, ketinggian);
        this.jumlahRudal = jumlahRudal;
    }
    terbang() {
        return `Pesawat ${this.nama} dengan jenis ${this.jenis} terbang dengan kecepatan ${this.kecepatan} km/jam dan ketinggian ${this.ketinggian} meter membawa ${this.jumlahRudal} rudal`;
    }
}
let pesawatTerbang = new PesawatTerbang("Garuda", "Boeing", 800, 30000, "Jakarta");
let pesawatKargo = new PesawatKargo("Lion", "Airbus", 700, 25000, 5000);
let pesawatTempur = new PesawatTempur("F-16", "Lockheed Martin", 1800, 50000, 6);

//SuperClass Motor
class Motor {
    constructor(nama, jenis, kecepatan, cc) {
        this.nama = nama;
        this.jenis = jenis;
        this.kecepatan = kecepatan;
        this.cc = cc;
    }
    jalan() {
        return `Motor ${this.nama} dengan jenis ${this.jenis} berjalan dengan kecepatan ${this.kecepatan} km/jam dan cc ${this.cc}`;
    }
}

//SubClass motorsport
class MotorSport extends Motor {
    constructor(nama, jenis, kecepatan, cc, tenaga) {
        super(nama, jenis, kecepatan, cc);
        this.tenaga = tenaga;
    }
    jalan() {
        return `Motor ${this.nama} dengan jenis ${this.jenis} berjalan dengan kecepatan ${this.kecepatan} km/jam dan cc ${this.cc} memiliki tenaga ${this.tenaga}`;
    }
}

//SubClass motormatic
class MotorMatic extends Motor {
    constructor(nama, jenis, kecepatan, cc, otomatis) {
        super(nama, jenis, kecepatan, cc);
        this.otomatis = otomatis;
    }
    jalan() {
        return `Motor ${this.nama} dengan jenis ${this.jenis} berjalan dengan kecepatan ${this.kecepatan} km/jam dan cc ${this.cc} memiliki sistem ${this.otomatis}`;
    }
}
let motorSport = new MotorSport("Yamaha R6", "Sport", 200, 600, 120);
let motorMatic = new MotorMatic("Honda Vario", "Matic", 120, 110, "Otomatis");

//SuperClass Sepeda
class Sepeda {
    constructor(nama, jenis, kecepatan, roda) {
        this.nama = nama;
        this.jenis = jenis;
        this.kecepatan = kecepatan;
        this.roda = roda;
    }
    jalan() {
        return `Sepeda ${this.nama} dengan jenis ${this.jenis} berjalan dengan kecepatan ${this.kecepatan} km/jam dan roda ${this.roda}`;
    }
}

//SubClass Sepeda Gunung
class SepedaGunung extends Sepeda {
    constructor(nama, jenis, kecepatan, roda, suspension) {
        super(nama, jenis, kecepatan, roda);
        this.suspension = suspension;
    }
    jalan() {
        return `Sepeda ${this.nama} dengan jenis ${this.jenis} berjalan dengan kecepatan ${this.kecepatan} km/jam dan roda ${this.roda} memiliki suspension ${this.suspension}`;
    }
}

//SubClass Sepeda Balap
class SepedaBalap extends Sepeda {
    constructor(nama, jenis, kecepatan, roda, posisi) {
        super(nama, jenis, kecepatan, roda);
        this.posisi = posisi;
    }
    jalan() {
        return `Sepeda ${this.nama} dengan jenis ${this.jenis} berjalan dengan kecepatan ${this.kecepatan} km/jam dan roda ${this.roda} memiliki posisi ${this.posisi}`;
    }
}
let sepedaGunung = new SepedaGunung("Polygon", "Gunung", 30, 26, "Hydrolik");
let sepedaBalap = new SepedaBalap("Trek", "Balap", 50, 20, "Aerodinamis");

//SuperClass Satelit
class Satelit {
    constructor(nama, jenis, kecepatan, orbit) {
        this.nama = nama;
        this.jenis = jenis;
        this.kecepatan = kecepatan;
        this.orbit = orbit;
    }
    beredar() {
        return `Satelit ${this.nama} dengan jenis ${this.jenis} beredar dengan kecepatan ${this.kecepatan} km/jam dan orbit ${this.orbit}`;
    }
}


//SubClass Satelit Komunikasi
class SatelitKomunikasi extends Satelit {
    constructor(nama, jenis, kecepatan, orbit, frekuensi) {
        super(nama, jenis, kecepatan, orbit);
        this.frekuensi = frekuensi;
    }
    beredar() {
        return `Satelit ${this.nama} dengan jenis ${this.jenis} beredar dengan kecepatan ${this.kecepatan} km/jam dan orbit ${this.orbit} memiliki frekuensi ${this.frekuensi}`;
    }
}


//SubClass Satelit Pengintai
class SatelitPengintai extends Satelit {
    constructor(nama, jenis, kecepatan, orbit, resolusi) {
        super(nama, jenis, kecepatan, orbit);
        this.resolusi = resolusi;
    }
    beredar() {
        return `Satelit ${this.nama} dengan jenis ${this.jenis} beredar dengan kecepatan ${this.kecepatan} km/jam dan orbit ${this.orbit} memiliki resolusi ${this.resolusi}`;
    }
}
let satelitKomunikasi = new SatelitKomunikasi("Telkom", "Komunikasi", 25000, "Geostasioner", "C-Band");
let satelitPengintai = new SatelitPengintai("NRO", "Pengintai", 20000, "Polar", "1m");


//Output atau memasukkan ke console
console.log(pesawatTerbang.terbang());
console.log(pesawatKargo.terbang());
console.log(pesawatTempur.terbang());
console.log(motorSport.jalan());
console.log(motorMatic.jalan());
console.log(sepedaGunung.jalan());
console.log(sepedaBalap.jalan());
console.log(satelitKomunikasi.beredar());
console.log(satelitPengintai.beredar());
