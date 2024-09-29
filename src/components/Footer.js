function Footer() {
    const footerStyle = {
        minheight: '10vh',
        fontSize: '1.2em',
        color: 'white',
        backgroundColor: '#2C3E50',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };
    
    return (
        <>
            
                <footer style={footerStyle}>
                    <p className='text-center'>Advanced Web App Development @2024</p>
                </footer>
            
        </>
    );
}

export default Footer;