import Head from 'next/head'

export default function Gallery() {
    const images = [
        'index1.jpg',
        'index2.jpg',
        'index4.jpg',
        'index5.jpg',
        'index6.jpg',
        'index7.jpg',
        'index8.jpg',
        'index9.jpg',
        'index10.jpg',
        'index11.jpg',
        'index12.jpg',
        'index13.jpg',
        'index14.jpg',
        'index15.jpg',
        'index16.jpg',
        'index17.jpg',
        'index18.jpg',
        'index19.jpg',
        'index20.jpg',
        'index21.jpg',
        'index22.jpg',
        'index23.jpg',
        'index24.jpg',
        'index25.jpg',
        'index26.jpg',
        'index27.jpg',
        'index28.jpg',
        'index29.jpg',
        'index30.jpg',
        'index31.jpg',
        'index32.jpg',
        'index33.jpg',
        'index34.jpg',
        'index35.jpg',
        'index36.jpg'
    ]

    return (
        <>
            <Head>
                <title>Gallery - Erald Calaj</title>
            </Head>
            <div
                style={{
                    fontFamily: 'Arial, sans-serif',
                    lineHeight: '1.6',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '20px',
                    color: '#333'
                }}
            >
                <h1 style={{ textAlign: 'center', margin: '40px 0' }}>Gallery</h1>
                <div style={{ display: 'block', textAlign: 'center', margin: '20px 0' }}>
                    <a href="/" style={{ color: '#0066cc', textDecoration: 'none' }}>
                        ← Back to Home
                    </a>
                </div>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '20px',
                        margin: '40px 0'
                    }}
                >
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={`/gallery/${img}`}
                            alt={`Gallery image ${index + 1}`}
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '4px',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                            }}
                        />
                    ))}
                </div>
                <div style={{ display: 'block', textAlign: 'center', margin: '20px 0' }}>
                    <a href="/" style={{ color: '#0066cc', textDecoration: 'none' }}>
                        ← Back to Home
                    </a>
                </div>
            </div>
        </>
    )
}
