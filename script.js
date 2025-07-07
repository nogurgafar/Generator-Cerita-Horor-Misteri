document.addEventListener('DOMContentLoaded', () => {
    const genres = [
        { "name": "Rumah Berhantu (Tempat Tinggal yang Menakutkan)", "guideline": "Masuki kedalaman rumah hantu yang mengerikan. Ciptakan kisah horor yang mengeksplorasi rahasia jahat, roh gelisah, dan kekuatan jahat yang bersembunyi di balik temboknya." },
        { "name": "Horor Psikologis (Mind's Abyss)", "guideline": "Selidiki kegelapan jiwa manusia. Tulislah cerita horor yang terungkap dalam benak karakter, mengaburkan batas antara kenyataan dan khayalan." },
        { "name": "Entitas Supernatural (Teror Dunia Lain)", "guideline": "Panggil makhluk gaib yang menentang alam. Buat narasi horor yang menampilkan makhluk, hantu, dan entitas yang menimbulkan ketakutan dan ketakutan." },
        { "name": "Urban Legends (Legenda Urban, Berbisik dalam Gelap)", "guideline": "Menghidupkan legenda urban dan cerita rakyat. Ciptakan kisah horor yang menghidupkan kisah-kisah mengerikan ini, jelajahi asal-usulnya dan kebenaran mengerikan di baliknya." },
        { "name": "Fitur Makhluk Ghaib (Mimpi Buruk Mengerikan)", "guideline": "Bebaskan makhluk mengerikan dari kedalaman imajinasi Anda. Tulis narasi horor yang mengikuti karakter saat mereka bertemu makhluk aneh, mkahluk gaib dan menakutkan." },
        { "name": "Horor Isolasi (Ketakutan yang Sunyi)", "guideline": "Menjebak karakter dalam lingkungan terpencil dan terpencil. Ciptakan cerita horor yang memanfaatkan rasa takut sendirian, rentan, dan dikelilingi oleh hal-hal yang tidak diketahui." },
        { "name": "Horor Kosmik (Kekosongan Tak Terduga)", "guideline": "Jelajahi teror kosmos yang tidak diketahui. Tulislah narasi horor yang menyelami betapa kecilnya umat manusia di hadapan kekuatan kosmik yang tidak dapat dipahami." },
        { "name": "Kesurupan (Siksaan Jiwa)", "guideline": "Selami kedalaman kerasukan dan roh jahat. Ciptakan cerita horor yang mengikuti karakter-karakter saat mereka bergulat dengan siksaan karena dikuasai dan dirasuki oleh kekuatan dunia lain." },
        { "name": "Roh Pendendam (Kemarahan Gelisah)", "guideline": "Buatlah narasi tentang penampakan dendam yang meminta balasan. Tulislah cerita horor yang mengeksplorasi konsekuensi dari urusan yang belum selesai dan penyesalan yang belum terselesaikan." },
        { "name": "Thriller Psikologis (Pikiran yang rusak)", "guideline": "Kaburkan batas antara horor dan ketegangan psikologis. Ciptakan narasi yang menyelidiki cara kerja rumit dari sebuah pemikiran karakter, di mana realitas menjadi labirin yang memutarbalikkan dan kenyataan menjadi samar." },
        { "name": "Tempat Terbengkalai (Kengerian yang Terlupakan)", "guideline": "Temukan rahasia lokasi terbengkalai yang ditinggalkan. Tulislah cerita horor yang mengungkap masa lalu kelam dan misteri menghantui dari tempat-tempat yang dibiarkan membusuk." },
        { "name": "Kultus dan Ritual (Pengabdian Seram)", "guideline": "Selidiki dunia pemujaan dan ritual terlarang. Ciptakan narasi horor yang mengeksplorasi sejauh mana tindakan orang atas nama pengabdian dan hal supernatural." },
        { "name": "Benda Terkutuk (Artefak Jahat)", "guideline": "Menanamkan benda-benda biasa dengan kedengkian dan kutukan. Benda spesial yang dirasuki kebencian dan roh jahat. Buatlah cerita horor yang mengikuti karakter saat mereka menghadapi objek dengan kekuatan jahat dan sejarah yang menghantui." },
        { "name": "Horor Sejarah (Dark Chronicles)", "guideline": "Melangkah ke masa lalu dan mengungkap kengerian sejarah. Tulis narasi yang meninjau kembali peristiwa mengerikan, legenda kelam, dan misteri mengerikan dari masa lalu." },
        { "name": "Horor Medis (Teror di Dalam)", "guideline": "Jelajahi kengerian eksperimen medis dan kengerian tubuh. Ciptakan narasi yang mendalami aspek tubuh manusia yang aneh dan meresahkan." },
        { "name": "Balas Dendam (Pembalasan Dilepaskan)", "guideline": "Ciptakan kisah balas dendam dan pembalasan. Tulis cerita horor yang mengikuti karakter yang ingin membalas dendam, mengungkap jaringan horor dan keputusasaan." },
        { "name": "Kabin di Hutan (Perasaan Terisolasi dan Terasingkan)", "guideline": "Menjebak karakter di kabin terpencil, terputus dari peradaban. Ciptakan narasi horor yang meningkatkan rasa takut dan kerentanan dalam suasana terisolasi." },
        { "name": "Fantasi Gelap (Twisted Realm)", "guideline": "Padukan fantasi dan horor dalam kisah dunia yang berputar-putar. Ciptakan narasi yang mengeksplorasi dunia tempat sihir dan kejahatan hidup berdampingan, serta batas antara terang dan gelap menjadi kabur." },
        { "name": "Kematian Misterius (Cryptic Endings)", "guideline": "Buatlah kisah kematian misterius dan kejahatan yang belum terpecahkan. Tulis narasi horor yang mengikuti tokoh-tokoh saat mereka mengungkap teka-teki kematian yang tidak bisa dijelaskan." },
        { "name": "Pertemuan Iblis (Tawaran Neraka)", "guideline": "Panggil setan dan kekuatan neraka dari jurang maut. Ciptakan cerita horor yang mengeksplorasi konsekuensi dari persilangan antara dunia nyata dengan dunia supernatural." },
        { "name": "Suara Tanpa Tubuh (Bisikan Ketakutan)", "guideline": "Jelajahi fenomena menakutkan dari suara-suara tanpa tubuh. Ciptakan narasi horor yang mengikuti karakter saat mereka mendengar bisikan dan pesan yang menghantui dari luar." },
        { "name": "Pengetahuan Terlarang (Pengetahuan Terkutuklah)", "guideline": "Mengungkap ilmu terlarang dan akibat buruknya. Tulislah cerita horor yang menggali kengerian dalam mencari kebenaran yang seharusnya tetap tersembunyi." },
        { "name": "Rahasia Gaib (Enigma Eldritch)", "guideline": "Menyelidiki misteri okultisme dan kuno. Ciptakan narasi yang mengeksplorasi hal-hal terlarang dan esoterik, mengungkap rahasia yang menantang pemahaman manusia." },
        { "name": "Perjalanan Waktu (Teror Duniawi)", "guideline": "Memanipulasi waktu untuk menciptakan horor. Ciptakan narasi yang mengikuti karakter saat mereka menavigasi kengerian masa lalu, masa kini, dan masa depan melalui perjalanan waktu." },
        { "name": "Horor Klaustrofobik (Mimpi Buruk yang Terjebak)", "guideline": "Menjebak karakter di ruang terbatas dan menyesakkan. Tulislah cerita horor yang mengeksploitasi rasa takut akan kurungan dan rasa takut terjebak." },
        { "name": "Anak-anak Menyeramkan (Kepolosan Hilang)", "guideline": "Jelajahi dunia anak-anak yang menyeramkan. Ciptakan narasi horor yang menampilkan karakter muda menakutkan dengan kekuatan dan niat yang meresahkan." },
        { "name": "Kenangan Menghantui (Gema Masa Lalu)", "guideline": "Buatlah cerita tentang kenangan yang menghantui dan trauma yang belum terselesaikan. Tulis narasi horor yang mengikuti karakter saat mereka menghadapi masa lalu dan hantu yang masih ada." },
        { "name": "Teknologi Menjadi Salah (Ketakutan Digital)", "guideline": "Jelajahi kengerian teknologi dan AI. Ciptakan narasi yang menggali sisi gelap inovasi, saat mesin dan perangkat berbalik melawan kemanusiaan." },
        { "name": "Pandemi Horor (Kepanikan Epidemi)", "guideline": "Ciptakan narasi yang memanfaatkan ketakutan akan pandemi dan penularan. Tulislah cerita horor yang mengeksplorasi kekacauan, keputusasaan, dan ketakutan akan wabah penyakit." },
        { "name": "Invasi Rumah (Ancaman Penyusup)", "guideline": "Menyerang kesucian rumah karakter. Buat cerita horor yang mengikuti karakter saat mereka menghadapi penyusup, yang mengancam rasa aman mereka." },
        { "name": "Artefak Dingin (Relik Seram)", "guideline": "Menanamkan artefak dengan kedengkian dan sejarah kelam. Ciptakan narasi horor yang menampilkan benda dan relik terkutuk yang mendatangkan teror bagi pemiliknya." },
        { "name": "Ketakutan Kosmik (Kemarahan Alam Semesta)", "guideline": "Melepaskan kengerian kosmik pada karakter. Tulislah cerita horor yang mengeksplorasi betapa kecilnya umat manusia dalam menghadapi kekuatan kosmik yang tidak dapat dipahami." },
        { "name": "Hutan Berhantu (Ketakutan pada Hutan)", "guideline": "Masuklah ke dalam hutan berhantu yang penuh dengan kengerian. Ciptakan narasi yang mengikuti karakter saat mereka menjelajahi hutan menyeramkan yang penuh dengan rahasia mengerikan." },
        { "name": "Horor Tubuh (Daging dan Ketakutan)", "guideline": "Jelajahi aspek tubuh manusia yang aneh dan meresahkan. Tulislah cerita horor yang mendalami modifikasi tubuh, mutasi, dan teror transformasi fisik." },
        { "name": "Cermin Jahat (Mencerminkan Kejahatan)", "guideline": "Temukan kengerian yang ada di balik cermin. Ciptakan narasi yang mengeksplorasi refleksi menyeramkan, realitas alternatif, dan cermin terkutuk yang mendatangkan ketakutan." },
        { "name": "Rahasia Kota Kecil (Kengerian Tersembunyi)", "guideline": "Mengungkap rahasia kelam sebuah kota kecil. Ciptakan kisah horor yang mengungkap sisi buruk dari komunitas yang tampaknya indah." },
        { "name": "Penyelidik Paranormal (Pengejaran Hantu)", "guideline": "Ikuti penyelidik paranormal dalam pencarian hantu mereka. Tulis narasi yang mengeksplorasi pertemuan mereka dengan roh, makhluk berhantu, dan hal yang tidak diketahui." },
        { "name": "Vampir dan Manusia Serigala (Blood Moon Chronicles)", "guideline": "Masuki dunia vampir dan manusia serigala. Ciptakan cerita horor yang mengeksplorasi mitos dan legenda makhluk gaib tersebut." },
        { "name": "Seni Berhantu (Galeri Mimpi Buruk)", "guideline": "Tanamkan karya seni dengan kengerian dan kedengkian. Ciptakan narasi yang mengeksplorasi lukisan, patung, dan benda seni terkutuk yang membawa teror bagi mereka yang melihatnya." },
        { "name": "Horor Arktik (Ketakutan yang Membeku)", "guideline": "Rangkullah kehancuran Arktik. Tulis cerita horor yang mengikuti tokoh-tokoh saat mereka menghadapi isolasi, suhu beku, dan teror gurun es." },
        { "name": "Horor Parasit (Ketakutan Invasif)", "guideline": "Jelajahi teror organisme parasit. Ciptakan narasi yang menyelidiki invasi tubuh, pengendalian pikiran, dan kengerian dikonsumsi dari dalam." },
        { "name": "Kriptid dan Mitos (Enigma yang Tidak Wajar)", "guideline": "Temukan kebenaran di balik cryptid dan makhluk mitos. Ciptakan kisah horor yang mengaburkan batas antara kenyataan dan legenda, serta mengungkap kebenaran mengerikan." },
        { "name": "Ritual Sesat (Ritus Terlarang)", "guideline": "Jelajahi kedalaman ritual sesat dan gelap dan upacara terlarang. Tulis narasi yang menyelidiki praktik jahat yang mengundang entitas jahat melalui ritual sesat." },
        { "name": "Horor Gotik (Rumah Mengerikan)", "guideline": "Masuki dunia horor gotik dan suasana mengerikan. Ciptakan narasi yang terungkap dalam rumah-rumah mewah yang sudah rusak, jalan-jalan yang diselimuti kabut, dan kastil-kastil berhantu." },
        { "name": "Horor Senyap (Teror Tanpa Suara)", "guideline": "Buatlah cerita horor di mana keheningan menjadi sumber ketakutan. Tulis narasi yang mengeksplorasi teror dunia tanpa suara dan komunikasi." },
        { "name": "Perang Supernatural (Pertempuran Roh)", "guideline": "Terjunkan karakter ke dalam pertempuran supernatural antara kebaikan dan kejahatan. Ciptakan narasi horor yang menampilkan bentrokan antara malaikat, setan, dan kekuatan dunia lain." },
        { "name": "Kerasukan (Jiwa Berhantu)", "guideline": "Siksa kerasukan dan jiwa yang hilang. Ciptakan cerita horor yang mengikuti karakter saat mereka bergulat dengan invasi tubuh yang kesurupan dan pikiran mereka yang kerasukan hantu." },
        { "name": "Horor Lingkungan (Pembalasan Alam)", "guideline": "Melepaskan kemarahan alam terhadap karakter. Tulislah narasi yang mengeksplorasi teror bencana lingkungan, kekuatan alam, dan kerapuhan umat manusia." },
        { "name": "Mimpi Buruk Terlepas (Ketakutan Pemandangan Mimpi)", "guideline": "Masuki dunia mimpi buruk yang menjadi kenyataan. Ciptakan cerita horor yang mengaburkan batas antara mimpi dan kenyataan, yang mewujudkan ketakutan terdalam karakter." },
        { "name": "Rumah Sakit Berhantu (Kegilaan di Dalam)", "guideline": "Jelajahi kengerian rumah sakit jiwa dan institusi mental berhantu. Ciptakan narasi yang menyelidiki titik temu antara kegilaan, kekuatan supernatural, dan ketakutan." },
        { "name": "Kutukan Kuno (Siksaan Abadi)", "guideline": "Temukan kutukan kuno dan konsekuensi gelapnya. Tulislah cerita horor yang mengikuti tokoh-tokoh saat mereka bergulat dengan kutukan yang telah berlangsung selama beberapa generasi." },
        { "name": "Portal ke Neraka (Gerbang Neraka)", "guideline": "Buka portal menuju kedalaman neraka. Ciptakan narasi yang mengeksplorasi perjumpaan karakter dengan kekuatan neraka, setan, dan siksaan dunia bawah." },
        { "name": "Benda Berhantu (Harta Benda Seram)", "guideline": "Menanamkan benda biasa dengan roh jahat. Buatlah cerita horor yang mengikuti karakter saat mereka menemukan benda kerasukan yang membawa teror dan kekacauan." },
        { "name": "Karnaval Berhantu (Sirkus Mimpi Buruk)", "guideline": "Masuki karnaval berhantu yang penuh teror. Tulis narasi yang terungkap dalam suasana sirkus yang menyeramkan, lengkap dengan pemain jahat." },
        { "name": "Penghilangan Misterius (Undang-Undang Hilang)", "guideline": "Buatlah cerita seputar penghilangan misterius. Ciptakan narasi horor yang mengikuti karakter saat mereka menyelidiki orang hilang dan mengungkap kebenaran yang mengerikan." },
        { "name": "Horor Lovecraftian (Ketakutan Kosmik atau eldritch horror)", "guideline": "Rangkullah kengerian kosmik ala penulis Lovecraft. Tulislah sebuah narasi yang menyentuh ketakutan akan hal-hal yang tidak diketahui, dewa-dewa kuno, dan kekuatan-kekuatan yang tidak dapat dipahami di luar pemahaman manusia." },
        { "name": "Hotel Berhantu (Kamar 13)", "guideline": "Jelajahi koridor hotel dan penginapan yang berhantu. Ciptakan kisah horor yang terungkap di dalam dinding sebuah bangunan berhantu, tempat para tamu bertemu dengan hal-hal gaib." },
        { "name": "Transformasi Tidak Manusiawi (Metamorfosis Mengerikan)", "guideline": "Melepaskan kengerian transformasi yang tidak manusiawi. Tulis narasi yang mengeksplorasi perubahan mengerikan karakter manusia menjadi makhluk mengerikan." },
        { "name": "Ritual Pengorbanan (Persembahan Ketakutan)", "guideline": "Selidiki kegelapan pengorbanan ritual. Ciptakan cerita horor yang mengikuti tokoh-tokoh saat mereka menghadapi aliran sesat, upacara kelam, dan permintaan akan persembahan manusia." },
        { "name": "Makam Kuno (Peninggalan Terkutuklah)", "guideline": "Masuki kedalaman makam kuno dan kuburan. Ciptakan narasi yang mengikuti karakter saat mereka menghadapi peninggalan terkutuk, roh gelisah, dan kengerian masa lalu." }
    ];

    const genreSelect = document.getElementById('genre');
    const settingTypeSelect = document.getElementById('setting-type');
    const customSettingGroup = document.getElementById('custom-setting-group');
    const storyForm = document.getElementById('story-form');
    const storyResult = document.getElementById('story-result');
    const resetButton = document.getElementById('reset-button');
    const copyButton = document.getElementById('copy-button');
    const downloadButton = document.getElementById('download-button');
    const apiKey = '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';

    // Populate genre dropdown
    genres.forEach((genre, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = genre.name;
        genreSelect.appendChild(option);
    });

    // Show/hide custom setting input
    settingTypeSelect.addEventListener('change', () => {
        if (settingTypeSelect.value === 'Ketik nama tempatnya') {
            customSettingGroup.style.display = 'block';
        } else {
            customSettingGroup.style.display = 'none';
        }
    });

    // Handle form submission
    storyForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        storyResult.textContent = 'Menghasilkan cerita...';

        const formData = new FormData(storyForm);
        const selectedGenreIndex = formData.get('genre');
        const selectedGenre = genres[selectedGenreIndex];
        const characters = formData.get('characters');
        const pov = formData.get('pov');
        const length = formData.get('length');
        const settingType = formData.get('setting-type');
        const customSetting = formData.get('custom-setting');
        const language = formData.get('language');

        let setting = settingType;
        if (settingType === 'Ketik nama tempatnya') {
            setting = customSetting;
        }

        const prompt = `
            Anda adalah seorang penulis cerita horor dan misteri.
            Buatlah sebuah cerita berdasarkan informasi berikut:
            - Genre: ${selectedGenre.name}
            - Pedoman Genre: ${selectedGenre.guideline}
            - Karakter: ${characters}
            - Sudut Pandang: ${pov}
            - Panjang Cerita: ${length}
            - Latar Tempat: ${setting}
            - Bahasa: ${language}

            ATURAN:
            1. Buatlah cerita yang sangat dapat dipercaya.
            2. Tulislah seolah-olah seseorang menceritakan kisah ini dari sudut pandangnya sendiri.
            3. Ceritanya harus dapat dipercaya namun mengejutkan, mengerikan, dan benar-benar membuat takut orang.
        `;

        try {
            const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${apiKey}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "model": "google/gemini-2.0-flash-exp:free",
                    "messages": [
                        { "role": "user", "content": prompt }
                    ]
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            if (data.choices && data.choices.length > 0) {
                const storyText = data.choices[0].message.content;
                storyResult.textContent = storyText;
                copyButton.style.display = 'inline-block';
                downloadButton.style.display = 'inline-block';
            } else {
                storyResult.textContent = 'Gagal menghasilkan cerita. Coba lagi.';
                copyButton.style.display = 'none';
                downloadButton.style.display = 'none';
            }
        } catch (error) {
            console.error('Error:', error);
            storyResult.textContent = `Terjadi kesalahan: ${error.message}`;
            copyButton.style.display = 'none';
            downloadButton.style.display = 'none';
        }
    });

    resetButton.addEventListener('click', () => {
        storyResult.textContent = '';
        copyButton.style.display = 'none';
        downloadButton.style.display = 'none';
    });

    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(storyResult.textContent).then(() => {
            alert('Cerita berhasil disalin!');
        }, () => {
            alert('Gagal menyalin cerita.');
        });
    });

    downloadButton.addEventListener('click', () => {
        const storyText = storyResult.textContent;
        const doc = new docx.Document({
            sections: [{
                properties: {},
                children: [
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun(storyText)
                        ],
                    }),
                ],
            }],
        });

        docx.Packer.toBlob(doc).then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "cerita_horor.docx";
            a.click();
            window.URL.revokeObjectURL(url);
        });
    });
});