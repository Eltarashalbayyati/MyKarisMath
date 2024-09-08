function hitungWarisan() {
    const gender = document.getElementById('gender').value;
    const spouse = parseInt(document.getElementById('spouse').value) || 0;
    const sons = parseInt(document.getElementById('sons').value) || 0;
    const daughters = parseInt(document.getElementById('daughters').value) || 0;
    const father = document.getElementById('father').value === 'yes';
    const mother = document.getElementById('mother').value === 'yes';
    const grandfather = document.getElementById('grandfather').value === 'yes';
    const grandmother = document.getElementById('grandmother').value === 'yes';
    const brothers = parseInt(document.getElementById('brothers').value) || 0;
    const sisters = parseInt(document.getElementById('sisters').value) || 0;
    const grandsons = parseInt(document.getElementById('grandsons').value) || 0;
    const granddaughters = parseInt(document.getElementById('granddaughters').value) || 0;

    let totalWarisan = 100; // Asumsi harta 100%
    let hasil = {};

    // Suami/Istri
    if (spouse > 0) {
        if (gender === 'male') {
            hasil['Suami/Istri'] = totalWarisan * 0.125; // Istri mendapat 1/8
            totalWarisan -= hasil['Suami/Istri'];
        } else {
            hasil['Suami/Istri'] = totalWarisan * 0.25; // Suami mendapat 1/4
            totalWarisan -= hasil['Suami/Istri'];
        }
    }

    // Anak
    if (sons > 0 || daughters > 0) {
        const anakLakiLakiPortion = 2; // Anak laki-laki mendapat 2 bagian
        const anakPerempuanPortion = 1; // Anak perempuan mendapat 1 bagian

        const totalPortion = (sons * anakLakiLakiPortion) + (daughters * anakPerempuanPortion);
        hasil['Anak'] = (totalWarisan * (anakLakiLakiPortion / totalPortion)) * sons +
                        (totalWarisan * (anakPerempuanPortion / totalPortion)) * daughters;
        totalWarisan -= hasil['Anak'];
    }

    // Orang tua
    if (father) {
        hasil['Ayah'] = totalWarisan * 0.1667; // Ayah mendapat 1/6
        totalWarisan -= hasil['Ayah'];
    }
    
    if (mother) {
        hasil['Ibu'] = totalWarisan * 0.1667; // Ibu mendapat 1/6
        totalWarisan -= hasil['Ibu'];
    }

    // Kakek/Nenek
    if (grandfather) {
        hasil['Kakek'] = totalWarisan * 0.1667; // Kakek mendapat 1/6 jika ada
        totalWarisan -= hasil['Kakek'];
    }

    if (grandmother) {
        hasil['Nenek'] = totalWarisan * 0.1667; // Nenek mendapat 1/6 jika ada
        totalWarisan -= hasil['Nenek'];
    }

    // Cucu dan Saudara
    if (grandsons > 0 || granddaughters > 0 || brothers > 0 || sisters > 0) {
        // Kalkulasi lebih lanjut bisa ditambahkan sesuai ketentuan
    }

    // Tampilkan hasil
    let result = '<h3>Hasil Warisan:</h3>';
    for (const key in hasil) {
        result += `<p>${key}: ${hasil[key].toFixed(2)}%</p>`;
    }

    document.getElementById('result').innerHTML = result;
}
