import Skills from '../../components/skills/Skills';

const HomePage = () => {
    return (
        <div className='pt-28 text-center'>
            <h2 className='text-2xl text-primary mb-[22px]'>
                Hello, I'm Do Tuan Dat
            </h2>

            <h1 className='text-4xl mb-10 leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
                I build & design
                <br />
                Web interfaces.
            </h1>

            <p className='text-md text-gray-400 mb-10'>
                With 1.5 years of work experience, I can participate in building beautiful and well-performing user interfaces
            </p>

            <Skills />
        </div>
    )
}

export default HomePage