import mtkImage from '../img/matematika.jpeg';
import ipsImage from '../img/ips.jpeg';
import ipaImage from '../img/ipa.jpeg';
import ppknImage from '../img/ppkn.jpeg';
import inggrisImage from '../img/inggris.png';
import createQuestInterface from '../../start';
import myMatematika from '../quest/matematika';
import myIps from '../quest/ips';
import myIpa from '../quest/ipa';
import myPpkn from '../quest/ppkn';
import myInggris from '../quest/inggris';
import myIndonesia from '../quest/indonesia';


function Main() {
    function mtk() {
        createQuestInterface(myMatematika);
    }

    function ips() {
        createQuestInterface(myIps);
    }

    function ipa() {
        createQuestInterface(myIpa);
    }

    function ppkn() {
        createQuestInterface(myPpkn);
    }

    function inggris() {
        createQuestInterface(myInggris);
    }

    function indonesia() {
        createQuestInterface(myIndonesia);
    }

    return (
        <>
        <main>
            <p className="descriptions">
                Selamat datang di website quiz edukasi kami! Temukan berbagai quiz menarik yang akan menguji pengetahuan Anda dalam berbagai mata pelajaran. Dengan soal-soal yang dirancang secara interaktif, website ini akan membantu Anda memperdalam pemahaman dan mempersiapkan ujian dengan cara yang seru dan efektif. Tantang diri Anda untuk mencapai skor tertinggi dan tingkatkan kemampuan belajar Anda!
            </p>
            <p className="title" id="titleOfQuest">
                Kategori
            </p>

            <div id="container">
                <div className="card">
                    <img 
                    src= { mtkImage } 
                    />
                    <p>
                        Matematika
                    </p>
                    <button role="button" id="btnMtk" onClick={ mtk }>
                        Mulai
                    </button>
                </div>
                <div className="card">
                    <img 
                    src= { ipsImage }
                    />
                    <p>
                        Ilmu Pengetahuan Sosial
                    </p>
                    <button role="button" id="btnIps" onClick={ ips }>
                        Mulai
                    </button>
                </div>
                <div className="card">
                    <img 
                    src= { ipaImage }
                    />
                    <p>
                        Ilmu Pengetahuan Alam
                    </p>
                    <button role="button" id="btnIpa" onClick={ ipa }>
                        Mulai
                    </button>
                </div>
                <div className="card">
                    <img 
                    src= { ppknImage } 
                    />
                    <p>
                        Pendidikan Pancasila dan Kewarganegaraan
                    </p>
                    <button role="button" id="btnPpkn" onClick={ ppkn }>
                        Mulai
                    </button>
                </div>
                <div className="card">
                    <img 
                    src= { inggrisImage }  
                    />
                    <p>
                        Bahasa Inggris
                    </p>
                    <button role="button" id="btnBIng" onClick={ inggris }>
                        Mulai
                    </button>
                </div>
            </div>
        </main>
        </>
    )
}

export default Main;