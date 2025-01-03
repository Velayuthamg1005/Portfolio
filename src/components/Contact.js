export default function Contact() {
    const config = {
        email: 'velayuthamg1005@gmail.com',
        phone: '9361393990'
    };

    return (
        <section id='contact' className='flex flex-col bg-primary px-5 py-20 text-white'>
            <div className='flex flex-col items-center'>
                <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
                <p className='pb-5'>If you want to discuss more in detail, please contact me</p>
                <p className='py-2'>
                    <span className='font-bold'>Email:</span> 
                    <a href={`mailto:${config.email}`} className="text-secondary hover:text-white">{config.email}</a>
                </p>
                <p className='py-2'>
                    <span className='font-bold'>Phone:</span> 
                    <a href={`tel:${config.phone}`} className="text-secondary hover:text-white">{config.phone}</a>
                </p>
            </div>
        </section>
    );
}
