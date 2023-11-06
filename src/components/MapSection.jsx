const MapSection = () => {
  return (
    <div className='mt-14'>
      <h2 className='text-center font-bold text-4xl mb-10'>Our Location</h2>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.325534232814!2d90.359057788855!3d23.807020499999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c105f81691d5%3A0x4aa9bd97de918f7b!2sSher-E-Bangla%20National%20Cricket%20Stadium!5e0!3m2!1sen!2sbd!4v1699302297103!5m2!1sen!2sbd'
        className='w-full'
        height='450'
        style='border:0;'
        style={{ border: 'none' }}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
};

export default MapSection;
