class sepeda {
    constructor(merk, jenis, harga) {
        this.merk = merk;
        this.jenis = jenis;
        this.harga = harga;
    }
}

class indonesia
    extends sepeda {

    berhenti() {
        console.log(this.merk + " sedang berhenti");
    }
}
class malaysia
    extends sepeda {

    jalan() {
        console.log(this.merk + " sedang jalan");
    }
}

// Instance of Rabbit
let dariindo = new indonesia("sepeda BMX", "sepeda gunung", 5000000);

// Instance of Eagle
let darimalaysia = new malaysia("sepeda balap", "sepeda lipet", 3000000);

dariindo.berhenti();
darimalaysia.jalan();

console.log(dariindo);
console.log(darimalaysia);

