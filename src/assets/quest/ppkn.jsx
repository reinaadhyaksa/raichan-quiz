const myPpkn = [
    {
        soal: 'Pancasila ditetapkan sebagai dasar negara Indonesia pada tanggal...',
        choose: ['17 Agustus 1945', '18 Agustus 1945', '1 Juni 1945', '28 Oktober 1928', '20 Mei 1908'],
        key: '18 Agustus 1945'
    },
    {
        soal: 'Nilai-nilai yang terkandung dalam sila pertama Pancasila adalah...',
        choose: ['Keadilan dan kemakmuran', 'Persatuan dan kesatuan', 'Ketuhanan, keimanan, dan toleransi', 'Kebebasan dan kesetaraan', 'Demokrasi dan musyawarah'],
        key: 'Ketuhanan, keimanan, dan toleransi'
    },
    {
        soal: 'Lambang sila kedua Pancasila adalah...',
        choose: ['Pohon beringin', 'Rantai emas', 'Kepala banteng', 'Padi dan kapas', 'Bintang'],
        key: 'Rantai emas'
    },
    {
        soal: 'Sila keempat Pancasila menekankan pada nilai...',
        choose: ['Persatuan', 'Keadilan', 'Kesejahteraan', 'Musyawarah dan demokrasi', 'Ketuhanan'],
        key: 'Musyawarah dan demokrasi'
    },
    {
        soal: 'Makna dari sila kelima Pancasila adalah...',
        choose: ['Kebebasan beragama', 'Keadilan sosial bagi seluruh rakyat Indonesia', 'Menjaga persatuan bangsa', 'Mengutamakan kepentingan pribadi', 'Menjunjung tinggi hak asasi manusia'],
        key: 'Keadilan sosial bagi seluruh rakyat Indonesia'
    },
    {
        soal: 'Pancasila sebagai pandangan hidup bangsa artinya...',
        choose: ['Digunakan untuk mencapai kemerdekaan', 'Sebagai dasar hukum tertinggi', 'Sebagai pedoman dalam kehidupan sehari-hari', 'Hanya digunakan dalam pemerintahan', 'Tidak memiliki pengaruh dalam kehidupan masyarakat'],
        key: 'Sebagai pedoman dalam kehidupan sehari-hari'
    },
    {
        soal: 'Lambang negara Indonesia, Garuda Pancasila, diresmikan pada tahun...',
        choose: ['1945', '1947', '1950', '1953', '1955'],
        key: '1950'
    },
    {
        soal: 'Sila keempat Pancasila mengajarkan kita untuk...',
        choose: ['Meningkatkan ketakwaan kepada Tuhan', 'Memutuskan segala sesuatu dengan musyawarah', 'Menjunjung tinggi nilai persatuan', 'Memberikan keadilan sosial', 'Meningkatkan kesejahteraan rakyat'],
        key: 'Memutuskan segala sesuatu dengan musyawarah'
    },
    {
        soal: 'Bunyi sila ketiga Pancasila adalah...',
        choose: ['Kemanusiaan yang adil dan beradab', 'Persatuan Indonesia', 'Kerakyatan yang dipimpin oleh hikmat kebijaksanaan', 'Ketuhanan yang Maha Esa', 'Keadilan sosial bagi seluruh rakyat Indonesia'],
        key: 'Persatuan Indonesia'
    },
    {
        soal: 'Pancasila sebagai dasar negara tercantum dalam...',
        choose: ['UUD 1945 Pembukaan alinea pertama', 'UUD 1945 Pembukaan alinea kedua', 'UUD 1945 Pembukaan alinea ketiga', 'UUD 1945 Pembukaan alinea keempat', 'UUD 1945 Pasal 1'],
        key: 'UUD 1945 Pembukaan alinea keempat'
    },
    {
        soal: 'Dasar hukum negara Indonesia adalah...',
        choose: ['Pancasila', 'Proklamasi', 'UUD 1945', 'Bhinneka Tunggal Ika', 'Pembukaan UUD 1945'],
        key: 'UUD 1945'
    },
    {
        soal: 'Pasal 1 ayat 1 UUD 1945 berbunyi...',
        choose: ['Negara Indonesia ialah negara kesatuan yang berbentuk republik', 'Kedaulatan berada di tangan rakyat', 'Negara berdasar atas hukum', 'Presiden adalah kepala negara', 'Negara melindungi segenap bangsa Indonesia'],
        key: 'Negara Indonesia ialah negara kesatuan yang berbentuk republik'
    },
    {
        soal: 'Salah satu tujuan negara Indonesia menurut UUD 1945 adalah...',
        choose: ['Memperjuangkan hak individu', 'Melindungi segenap bangsa Indonesia', 'Membentuk pemerintahan dunia', 'Mengutamakan ekonomi pasar', 'Mengurangi peran pemerintah'],
        key: 'Melindungi segenap bangsa Indonesia'
    },
    {
        soal: 'Hak asasi manusia dijamin dalam UUD 1945 pasal...',
        choose: ['27', '28', '29', '30', '31'],
        key: '28'
    },
    {
        soal: 'Kedaulatan berada di tangan rakyat tercantum dalam UUD 1945 Pasal...',
        choose: ['1 ayat 1', '1 ayat 2', '1 ayat 3', '2 ayat 1', '2 ayat 2'],
        key: '1 ayat 2'
    },
    {
        soal: 'Lembaga negara yang memiliki tugas membuat undang-undang adalah...',
        choose: ['Presiden', 'DPR', 'MPR', 'MA', 'DPD'],
        key: 'DPR'
    },
    {
        soal: 'Hari Kesaktian Pancasila diperingati setiap tanggal...',
        choose: ['17 Agustus', '28 Oktober', '1 Juni', '5 Oktober', '1 Oktober'],
        key: '1 Oktober'
    },
    {
        soal: 'Prinsip Bhinneka Tunggal Ika berarti...',
        choose: ['Berbeda-beda tetapi tetap satu', 'Bersatu dalam kebersamaan', 'Berjuang bersama demi kesetaraan', 'Saling menghormati satu sama lain', 'Menjunjung tinggi keadilan'],
        key: 'Berbeda-beda tetapi tetap satu'
    },
    {
        soal: 'Wilayah NKRI meliputi...',
        choose: ['Darat dan udara', 'Laut dan udara', 'Darat, laut, dan udara', 'Darat dan laut saja', 'Laut saja'],
        key: 'Darat, laut, dan udara'
    },
    {
        soal: 'Lambang negara Indonesia adalah...',
        choose: ['Bendera Merah Putih', 'Burung Garuda', 'Pancasila', 'Bhinneka Tunggal Ika', 'Undang-Undang Dasar'],
        key: 'Burung Garuda'
    },
    {
        soal: 'Kewajiban warga negara terhadap negara adalah...',
        choose: ['Menuntut hak', 'Melanggar peraturan', 'Membayar pajak', 'Meninggalkan negara', 'Mengabaikan aturan'],
        key: 'Membayar pajak'
    },
    {
        soal: 'Contoh hak sebagai warga negara adalah...',
        choose: ['Membayar pajak', 'Mendapatkan pendidikan', 'Melanggar hukum', 'Membuat undang-undang', 'Mengatur sistem pemerintahan'],
        key: 'Mendapatkan pendidikan'
    },
    {
        soal: 'Kewajiban utama seorang pelajar adalah...',
        choose: ['Mendapatkan nilai tinggi', 'Belajar dengan sungguh-sungguh', 'Membayar pajak', 'Mengajarkan ilmu kepada guru', 'Mengatur kebijakan sekolah'],
        key: 'Belajar dengan sungguh-sungguh'
    },
    {
        soal: 'Setiap warga negara berhak mendapatkan perlindungan hukum sesuai...',
        choose: ['Status sosial', 'Konstitusi negara', 'Kehendak pribadi', 'Kekuasaan pemerintah', 'Peraturan daerah'],
        key: 'Konstitusi negara'
    },
    {
        soal: 'Menghormati hak orang lain termasuk dalam...',
        choose: ['Hak asasi manusia', 'Kewajiban warga negara', 'Kebebasan individu', 'Ketidaksetaraan sosial', 'Perbedaan pendapat'],
        key: 'Kewajiban warga negara'
    }
];

export default myPpkn;