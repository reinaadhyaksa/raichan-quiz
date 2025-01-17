const myIpa = [
    {
        soal: 'Alat optik yang digunakan untuk melihat benda-benda kecil disebut...',
        choose: ['Kamera', 'Mikroskop', 'Teleskop','Lup', 'Periskop'],
        key: 'Mikroskop'
    },
    {
        soal: 'Hukum III Newton berbunyi...',
        choose: ['Jika gaya bekerja pada benda, maka benda akan bergerak.', 'Aksi dan reaksi dua benda selalu sama besar, tetapi berlawanan arah.', 'Percepatan benda sebanding dengan gaya yang bekerja pada benda tersebut.', 'Gaya gravitasi hanya berlaku di bumi.', 'Semua benda diam akan tetap diam jika tidak ada gaya.'],
        key: 'Aksi dan reaksi dua benda selalu sama besar, tetapi berlawanan arah.'
    },
    {
        soal: 'Satuan SI dari energi adalah...',
        choose: ['Newton', 'Joule', 'Watt', 'Pascal', 'Ampere'],
        key: 'Joule'
    },

    {
        soal: 'Bunyi tidak dapat merambat melalui...',
        choose: ['Udara', 'Air', 'Logam', 'Hampa udara', 'Tanah'],
        key: 'Hampa udara'
    },
    {
        soal: 'Cermin yang digunakan untuk memperbesar bayangan benda adalah...',
        choose: ['Cermin datar', 'Cermin cekung', 'Cermin cembung', 'Prisma', 'Cermin parabolik'],
        key: 'Cermin cekung'
    },
    {
        soal: 'Perubahan energi yang terjadi pada kipas angin adalah...',
        choose: ['Energi listrik menjadi energi gerak', 'Energi gerak menjadi energi listrik', 'Energi listrik menjadi energi panas', 'Energi gerak menjadi energi bunyi', 'Energi bunyi menjadi energi listrik'],
        key: 'Energi listrik menjadi energi gerak'
    },
    {
        soal: 'Kecepatan sebuah mobil yang menempuh jarak 120 km dalam waktu 2 jam adalah...',
        choose: ['40 km/jam', '50 km/jam', '60 km/jam', '80 km/jam', '100 km/jam'],
        key: '80 km/jam'
    },
    {
        soal: 'Sumber energi utama di bumi adalah...',
        choose: ['Bahan bakar fosil', 'Matahari', 'Air', 'Angin', 'Listrik'],
        key: 'Matahari'
    },
    {
        soal: 'Sebuah benda dikatakan melayang jika...',
        choose: ['Massa jenis benda lebih besar dari zat cair', 'Massa jenis benda lebih kecil dari zat cair' ,'Massa jenis benda sama dengan zat cair', 'Tidak ada gaya apung yang bekerja', 'Zat cair tidak memiliki massa jenis'],
        key: 'Massa jenis benda sama dengan zat cair'
    },
    {
        soal: 'Jenis gelombang yang membutuhkan medium untuk merambat adalah...',
        choose: ['Gelombang elektromagnetik', 'Gelombang cahaya', 'Gelombang bunyi', 'Gelombang radio', 'Gelombang sinar-X'],
        key: 'Gelombang bunyi'
    },
    {
        soal: 'Proses fotosintesis terjadi di bagian tumbuhan yang mengandung...',
        choose: ['Kloroplas', 'Nukleus', 'Mitokondria', 'Ribosom', 'Sitoplasma'],
        key: 'Kloroplas'
    },
    {
        soal: 'Organisme yang tidak memiliki membran inti disebut...',
        choose: ['Prokariota', 'Eukariota', 'Multiseluler', 'Uniseluler', 'Autotrof'],
        key: 'Prokariota'
    },
    {
        soal: 'Jaringan pada tumbuhan yang berfungsi untuk mengangkut air dan mineral adalah...',
        choose: ['Floem', 'Kambium', 'Epidermis', 'Xilem', 'Parenkim'],
        key: 'Xilem'
    },
    {
        soal: 'Hewan yang berkembang biak dengan cara bertelur disebut...',
        choose: ['Vivipar', 'Ovovivipar', 'Ovipar', 'Parasit', 'Omnivora'],
        key: 'Ovipar'
    },
    {
        soal: 'Salah satu fungsi hati pada manusia adalah...',
        choose: ['Menyaring darah', 'Menghasilkan enzim lipase', 'Menghasilkan empedu', 'Mengalirkan oksigen', 'Memproduksi hormon insulin'],
        key: 'Menghasilkan empedu'
    },
    {
        soal: 'Sel darah merah berfungsi untuk...',
        choose: ['Membunuh kuman penyakit', 'Membekukan darah', 'Mengangkut oksigen', 'Mengangkut nutrisi', 'Mengangkut karbon dioksida'],
        key: 'Mengangkut oksigen'
    },
    {
        soal: 'Sumber vitamin C alami yang tinggi ditemukan pada...',
        choose: ['Susu', 'Daging', 'Jeruk', 'Roti', 'Keju'],
        key: 'Jeruk'
    },
    {
        soal: 'Organisme yang berperan sebagai dekomposer adalah...',
        choose: ['Tumbuhan', 'Serangga', 'Jamur', 'Burung', 'Ikan'],
        key: 'Jamur'
    },
    {
        soal: 'Zat yang dihasilkan oleh pankreas untuk membantu pencernaan adalah...',
        choose: ['Insulin', 'Empedu', 'Pepsin', 'Lipase', 'Hemoglobin'],
        key: 'Lipase'
    },
    {
        soal: 'Proses pernapasan yang terjadi tanpa menggunakan oksigen disebut...',
        choose: ['Aerob', 'Anaerob', 'Inspirasi', 'Ekspirasi', 'Difusi'],
        key: 'Anaerob'
    },
    {
        soal: 'Partikel terkecil dari suatu unsur yang masih memiliki sifat unsur tersebut adalah...',
        choose: ['Molekul', 'Atom', 'Proton', 'Elektron', 'Neutron'],
        key: 'Atom'
    },
    {
        soal: 'Unsur utama yang terdapat pada air adalah...',
        choose: ['Karbon dan Hidrogen', 'Oksigen dan Hidrogen', 'Oksigen dan Karbon', 'Nitrogen dan Oksigen', 'Nitrogen dan Karbon'],
        key: 'Oksigen dan Hidrogen'
    },
    {
        soal: 'Perubahan wujud dari gas menjadi cair disebut...',
        choose: ['Menguap', 'Membeku', 'Mengembun', 'Menyublim', 'Melebur'],
        key: 'Mengembun'
    },
    {
        soal: 'Zat yang tidak dapat diuraikan menjadi zat yang lebih sederhana disebut...',
        choose: ['Campuran', 'Larutan', 'Unsur', 'Senyawa', 'Molekul'],
        key: 'Unsur'
    },
    {
        soal: 'Air termasuk ke dalam jenis...',
        choose: ['Unsur', 'Senyawa', 'Larutan', 'Campuran homogen', 'Campuran heterogen'],
        key: 'Senyawa'
    }
];

export default myIpa;