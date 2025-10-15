// src/kelulusan.jsx
import React, {useState} from 'react';
import './kelulusan.css'; // Import file CSS 

const Kelulusan = () => {
    const [nilai, setNilai] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const nilaiAngka = parseFloat(nilai);

        if (isNaN(nilaiAngka)){
            setStatus('nilai harus berupa angka');
        } else if (nilaiAngka > 85 ) {
            setStatus('Lulus sangat memuaskan');
        } else if (nilaiAngka < 50 ) {
            setStatus('Tidak lulus');
        } else {
            setStatus('Lulus');
        }
    };

    return (
        <div className="container">
            <h2>Status Kelulusan</h2>
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor="nilaiinput" className="label">Masukkan Nilai:</label>
                <input
                    type="number"
                    id="nilaiInput"
                    className='input'
                    value={nilai}
                    onChange={(e) => setNilai(e.target.value)}
                    placeholder='Masukkan nilai...'
                />
                <button type="submit" className='button'>Cek Status</button>
            </form>
            {status && (
                <div className="result">
                    <strong>Status: </strong>{status}
                </div>
            )}
        </div>
    );
}

export default Kelulusan;