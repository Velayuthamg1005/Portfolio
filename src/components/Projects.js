import websiteImg1 from '../assets/mern-todo.png';
import websiteImg2 from '../assets/blog.png';
import websiteImg3 from '../assets/readercircle.png';

export default function Projects() {

    const config = {
        projects: [
            {
                image: websiteImg1,
                description: 'MERN Stack Todo App.',
                link: 'https://github.com/Velayuthamg1005/Todo_app'
            },
            {
                image: websiteImg2,
                description: 'A Blog website designed to share knowledge, ideas, and inspiration',
                link: 'https://github.com/Velayuthamg1005/Inspire360'
            },
            {
                image: websiteImg3,
                description: 'A Simple book management web application',
                link: 'https://github.com/Velayuthamg1005/ReaderCircle'
            }
        ]
    }

    return (
        <section id='projects' className="flex flex-col px-5 py-20 justify-center bg-primary text-white">
            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                    <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                    <p>These are some of my best projects. I have built these with React, MERN. Check them out.</p>
                </div>
            </div>
            <div className="w-full">
                <div className='flex flex-col md:flex-row px-10 gap-5'>
                    {config.projects.map((project, index) => (
                        <div key={index} className='relative'>
                            <img className='h-[200px] w-[500px]' src={project.image} alt={`Project: ${project.description}`} /> {/* Added alt attribute */}
                            <div className='project-desc'>
                                <p className='text-center px-5 py-5'>{project.description}</p>
                                <div className='flex justify-center'>
                                    <a className='btn' target='_blank' rel='noopener noreferrer' href={project.link}>View Project</a> {/* Added rel="noopener noreferrer" */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
