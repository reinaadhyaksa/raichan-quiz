const myIps = [
    {
        soal: 'Proses pelapukan batuan yang disebabkan oleh perubahan suhu disebut...',
        choose: ['Pelapukan fisik', 'Pelapukan kimia', 'Pelapukan biologis', 'Erosi', 'Sedimentasi'],
        key: 'Pelapukan fisik'
    },
    {
        soal: 'Garis khayal yang membagi bumi menjadi belahan utara dan selatan disebut...',
        choose: ['Meridian', 'Garis bujur', 'Garis lintang', 'Khatulistiwa', 'Tropis'],
        key: 'Khatulistiwa'
    },
    {
        soal: 'Gunung api yang erupsi dengan mengeluarkan lava disebut...',
        choose: ['Gunung api strato', 'Gunung api perisai', 'Gunung api maar', 'Gunung api kerucut', 'Gunung api vulkanik'],
        key: 'Gunung api perisai'
    },
    {
        soal: 'Sumber daya alam yang tidak dapat diperbarui adalah...',
        choose: ['Air', 'Minyak bumi', 'Angin', 'Sinar matahari', 'Tanah'],
        key: 'Minyak bumi'
    },
    {
        soal: 'Fenomena El Nino dapat menyebabkan...',
        choose: ['Penurunan suhu laut', 'Curah hujan tinggi', 'Kekeringan di beberapa wilayah', 'Meningkatnya jumlah ikan di perairan', 'Penebalan lapisan ozon'],
        key: 'Kekeringan di beberapa wilayah'
    },
    {
        soal: 'Lapisan atmosfer yang berfungsi melindungi bumi dari sinar ultraviolet adalah...',
        choose: ['Troposfer', 'Stratosfer', 'Mesosfer', 'Termosfer', 'Eksosfer'],
        key: 'Stratosfer'
    },
    {
        soal: 'Jenis tanah yang subur untuk pertanian adalah...',
        choose: ['Tanah laterit', 'Tanah aluvial', 'Tanah podsol', 'Tanah gambut', 'Tanah kapur'],
        key: 'Tanah aluvial'
    },
    {
        soal: 'Banjir dapat terjadi akibat...',
        choose: ['Reboisasi', 'Pengelolaan limbah', 'Penggundulan hutan', 'Pembangunan bendungan', 'Pembuatan terasering'],
        key: 'Penggundulan hutan'
    },
    {
        soal: 'Wilayah yang memiliki curah hujan tinggi di Indonesia adalah...',
        choose: ['Kalimantan', 'Nusa Tenggara', 'Bali', 'Jawa Timur', 'Sumatra Selatan'],
        key: 'Kalimantan'
    },
    {
        soal: 'Proses pemanasan global disebabkan oleh...',
        choose: ['Peningkatan hujan', 'Peningkatan kadar gas karbon dioksida', 'Berkurangnya radiasi matahari', 'Aktivitas reboisasi', 'Penurunan polusi udara'],
        key: 'Peningkatan kadar gas karbon dioksida'
    },
    {
        soal: 'Kerajaan Hindu tertua di Indonesia adalah...',
        choose: ['Tarumanegara', 'Kutai', 'Majapahit', 'Sriwijaya', 'Singasari'],
        key: 'Kutai'
    },
    {
        soal: 'Perang Diponegoro terjadi pada tahun...',
        choose: ['1825-1830', '1800-1805', '1815-1820', '1830-1835', '1850-1855'],
        key: '1825-1830'
    },
    {
        soal: 'Sumpah Pemuda diikrarkan pada tanggal...',
        choose: ['17 Agustus 1945', '10 November 1945', '20 Mei 1908', '28 Oktober 1928', '1 Juni 1945'],
        key: '28 Oktober 1928'
    },
    {
        soal: 'Kerajaan Majapahit mencapai puncak kejayaannya di bawah pimpinan...',
        choose: ['Gajah Mada', 'Hayam Wuruk', 'Raden Wijaya', 'Airlangga', 'Ken Arok'],
        key: 'Hayam Wuruk'
    },
    {
        soal: 'Perang Dunia II berakhir pada tahun...',
        choose: ['1942', '1943', '1944', '1945', '1946'],
        key: '1945'
    },
    {
        soal: 'Organisasi pergerakan nasional yang pertama kali berdiri adalah...',
        choose: ['Boedi Oetomo', 'Sarekat Islam', 'Muhammadiyah', 'Nahdlatul Ulama', 'Perhimpunan Indonesia'],
        key: 'Boedi Oetomo'
    },
    {
        soal: 'Isi dari Perjanjian Linggarjati adalah...',
        choose: ['Pengakuan Indonesia atas seluruh wilayahnya', 'Pembentukan negara federal', 'Pengakuan kedaulatan Indonesia di Jawa, Sumatra, dan Madura', 'Pelaksanaan sistem tanam paksa', 'Pembagian wilayah Indonesia menjadi bagian timur dan barat'],
        key: 'Pengakuan kedaulatan Indonesia di Jawa, Sumatra, dan Madura'
    },
    {
        soal: 'Kerajaan Islam pertama di Indonesia adalah...',
        choose: ['Samudera Pasai', 'Demak', 'Aceh', 'Banten', 'Ternate'],
        key: 'Samudera Pasai'
    },
    {
        soal: 'Bangunan candi yang bercorak Hindu adalah...',
        choose: ['Borobudur', 'Mendut', 'Prambanan', 'Kalasan', 'Pawon'],
        key: 'Prambanan'
    },
    {
        soal: 'Tokoh perumus dasar negara Pancasila adalah...',
        choose: ['Moh. Hatta', 'Ir. Soekarno', 'Sutan Sjahrir', 'Agus Salim', 'Tan Malaka'],
        key: 'Ir. Soekarno'
    },
    {
        soal: 'Kegiatan membeli barang dari luar negeri disebut...',
        choose: ['Ekspor', 'Impor', 'Distribusi', 'Produksi', 'Konsumsi'],
        key: 'Impor'
    },
    {
        soal: 'Sistem ekonomi di Indonesia berdasarkan...',
        choose: ['Kapitalisme', 'Sosialisme', 'Liberalisme', 'Pancasila', 'Komunisme'],
        key: 'Pancasila'
    },
    {
        soal: 'Uang logam pertama kali digunakan pada masa kerajaan...',
        choose: ['Majapahit', 'Sriwijaya', 'Mataram', 'Kutai', 'Tarumanegara'],
        key: 'Sriwijaya'
    },
    {
        soal: 'Kegiatan utama dari distributor adalah...',
        choose: ['Menjual bahan mentah', 'Menyalurkan barang dari produsen ke konsumen', 'Mengolah bahan mentah menjadi barang jadi', 'Membeli barang untuk disimpan', 'Membeli barang untuk dijual lagi ke produsen'],
        key: 'Menyalurkan barang dari produsen ke konsumen'
    },
    {
        soal: 'Inflasi adalah...',
        choose: ['Penurunan harga barang secara besar-besaran', 'Kenaikan harga barang secara terus-menerus', 'Penurunan nilai tukar mata uang', 'Peningkatan produksi barang dalam negeri', 'Penurunan daya beli masyarakat'],
        key: 'Kenaikan harga barang secara terus-menerus'
    }
];

export default myIps;