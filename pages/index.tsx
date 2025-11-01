import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
    const [showSkills, setShowSkills] = useState(false)
    const [showExperience, setShowExperience] = useState(false)
    const [showProjects, setShowProjects] = useState(false)
    const [showBeliefs, setShowBeliefs] = useState(false)

    return (
        <>
            <Head>
                <title>Erald Calaj - Software Engineer</title>
                <meta
                    name="description"
                    content="Software Engineer with 10+ years experience in full-stack development, product research, and architecture design."
                />
            </Head>
            <div
                style={{
                    fontFamily: 'Arial, sans-serif',
                    lineHeight: '1.4',
                    maxWidth: '1000px',
                    margin: '0 auto',
                    padding: '15px',
                    color: '#333',
                    fontSize: '13px'
                }}
            >
                {/* Header */}
                <div style={{ marginBottom: '20px', borderBottom: '2px solid #333', paddingBottom: '10px' }}>
                    <h1 style={{ margin: '0 0 5px 0', fontSize: '28px' }}>Erald Calaj</h1>
                    <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
                        Software Engineer | Product Research | Architecture Design
                    </p>
                    <div style={{ marginTop: '8px', fontSize: '12px' }}>
                        <a href="mailto:eraldcalaj@gmail.com" style={{ color: '#0066cc', textDecoration: 'none' }}>
                            eraldcalaj@gmail.com
                        </a>{' '}
                        | Munich, Germany
                    </div>
                </div>

                {/* About Me */}
                <div style={{ marginBottom: '15px' }}>
                    <h2
                        style={{
                            margin: '0 0 10px 0',
                            fontSize: '16px',
                            borderBottom: '1px solid #ccc',
                            paddingBottom: '5px'
                        }}
                    >
                        Some things about me:
                    </h2>
                    <div style={{ fontSize: '12px', lineHeight: '1.6' }}>
                        <div style={{ marginBottom: '8px' }}>
                            • I grew up in a small village in albania, it looked something like this:{' '}
                            <a
                                href="/gallery/index23.jpg"
                                target="_blank"
                                rel="noreferrer"
                                style={{ color: '#0066cc', textDecoration: 'none' }}
                            >
                                [image]
                            </a>
                        </div>
                        <div style={{ marginBottom: '8px' }}>
                            • Started coding at 15, explored apps like Dreamweaver which sparked my interest
                        </div>
                        <div style={{ marginBottom: '8px' }}>
                            • I like to play only 2 video games, Rust and Overwatch.
                        </div>
                        <div style={{ marginBottom: '8px' }}>
                            • Generalist, but once in a while I like to specialize in a specific domains.
                        </div>
                        <div style={{ marginBottom: '8px' }}>
                            • {new Date().getFullYear() - 2017}+ years of experience in startups, in countless projects,
                            domains, and industries.
                        </div>
                        <div style={{ marginBottom: '8px' }}>• Will never stop learning.</div>
                    </div>
                </div>

                {/* Experience */}
                <div style={{ marginBottom: '15px' }}>
                    <h2
                        onClick={() => setShowExperience(!showExperience)}
                        style={{
                            margin: '0 0 10px 0',
                            fontSize: '16px',
                            borderBottom: '1px solid #ccc',
                            paddingBottom: '5px',
                            cursor: 'pointer',
                            userSelect: 'none'
                        }}
                    >
                        Experience {showExperience ? '−' : '+'}
                    </h2>

                    {showExperience && (
                        <>
                            <div style={{ marginBottom: '12px' }}>
                                <strong>Senior Software Engineer @ Wemolo</strong> (DE) |{' '}
                                <span style={{ color: '#666', fontSize: '12px' }}>Jun 2023 - Present</span>
                                <ul style={{ margin: '5px 0 0 20px', padding: '0', fontSize: '12px' }}>
                                    <li>IoT device management dashboard for thousands of devices</li>
                                    <li>Distributed authorization system (ABAC/OPA pattern)</li>
                                    <li>Product vision and architecture design</li>
                                    <li>Wrote and deployed scalable apps on AWS Elastic Kubernetes Service</li>
                                    <li>
                                        Worked on setting up a redundant,scalable, secure VPN network for all our iot
                                        devices
                                    </li>
                                </ul>
                            </div>

                            <div style={{ marginBottom: '12px' }}>
                                <strong>Software Engineer @ Quickbird</strong> (DE) |{' '}
                                <span style={{ color: '#666', fontSize: '12px' }}>Jun 2021 - May 2023</span>
                                <ul style={{ margin: '5px 0 0 20px', padding: '0', fontSize: '12px' }}>
                                    <li>Full-stack development environments setup</li>
                                    <li>Web deployment pipelines</li>
                                    <li>Government-regulated medical applications</li>
                                </ul>
                            </div>

                            <div style={{ marginBottom: '12px' }}>
                                <strong>Team Lead @ Revstar Consulting</strong> (USA) |{' '}
                                <span style={{ color: '#666', fontSize: '12px' }}>Jul 2020 - Jun 2021</span>
                                <ul style={{ margin: '5px 0 0 20px', padding: '0', fontSize: '12px' }}>
                                    <li>Led team of 5 developers</li>
                                    <li>Medical industry solutions (frontend, backend, AWS)</li>
                                    <li>HIPAA-compliant software design</li>
                                </ul>
                            </div>

                            <div style={{ marginBottom: '12px' }}>
                                <strong>Software Engineer @ Horizont Labs</strong> (UK) |{' '}
                                <span style={{ color: '#666', fontSize: '12px' }}>Jul 2019 - Jun 2020</span>
                                <ul style={{ margin: '5px 0 0 20px', padding: '0', fontSize: '12px' }}>
                                    <li>FITSQD fitness platform (React Native, NodeJS)</li>
                                    <li>Blockchain mobile client (React Native, TypeScript)</li>
                                    <li>Resource management dashboards (ReactJS)</li>
                                </ul>
                            </div>

                            <div style={{ marginBottom: '12px' }}>
                                <strong>Frontend Engineer @ Dierbro</strong> (IT) |{' '}
                                <span style={{ color: '#666', fontSize: '12px' }}>Oct 2017 - Jul 2019</span>
                                <ul style={{ margin: '5px 0 0 20px', padding: '0', fontSize: '12px' }}>
                                    <li>ERP application (React JS, React Native)</li>
                                    <li>Performance optimization for large-scale applications</li>
                                    <li>Scalable client architecture</li>
                                </ul>
                            </div>
                        </>
                    )}
                </div>

                {/* Projects */}
                <div style={{ marginBottom: '15px' }}>
                    <h2
                        onClick={() => setShowProjects(!showProjects)}
                        style={{
                            margin: '0 0 10px 0',
                            fontSize: '16px',
                            borderBottom: '1px solid #ccc',
                            paddingBottom: '5px',
                            cursor: 'pointer',
                            userSelect: 'none'
                        }}
                    >
                        Key Projects {showProjects ? '−' : '+'}
                    </h2>

                    {showProjects && (
                        <>
                            <div style={{ marginBottom: '10px' }}>
                                <strong>
                                    <a
                                        href="https://www.mamly.de"
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{ color: '#0066cc', textDecoration: 'none' }}
                                    >
                                        Mamly
                                    </a>
                                </strong>{' '}
                                |{' '}
                                <span style={{ color: '#666', fontSize: '12px' }}>
                                    Docker, NestJS, ReactJS, Flutter
                                </span>
                                <div style={{ fontSize: '12px', marginTop: '3px' }}>
                                    Post-natal recovery app in collaboration with TK insurance
                                </div>
                            </div>

                            <div style={{ marginBottom: '10px' }}>
                                <strong>
                                    <a
                                        href="https://www.parlament.al"
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{ color: '#0066cc', textDecoration: 'none' }}
                                    >
                                        Albanian Parliament Landing Page
                                    </a>
                                </strong>{' '}
                                | <span style={{ color: '#666', fontSize: '12px' }}>React, ASP.NET, C#, Redux</span>
                                <div style={{ fontSize: '12px', marginTop: '3px' }}>
                                    Requirement gathering, design, implementation, ODATA interface
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* Skills */}
                <div style={{ marginBottom: '15px' }}>
                    <h2
                        onClick={() => setShowSkills(!showSkills)}
                        style={{
                            margin: '0 0 10px 0',
                            fontSize: '16px',
                            borderBottom: '1px solid #ccc',
                            paddingBottom: '5px',
                            cursor: 'pointer',
                            userSelect: 'none'
                        }}
                    >
                        Skills {showSkills ? '−' : '+'}
                    </h2>

                    {showSkills && (
                        <div style={{ fontSize: '12px' }}>
                            AWS, Terraform, Docker, Node.js, React, Python, Product Research, Architecture Design,
                            Delivery Management
                        </div>
                    )}
                </div>

                {/* Some things I believe */}
                <div style={{ marginBottom: '15px' }}>
                    <h2
                        onClick={() => setShowBeliefs(!showBeliefs)}
                        style={{
                            margin: '0 0 10px 0',
                            fontSize: '16px',
                            borderBottom: '1px solid #ccc',
                            paddingBottom: '5px',
                            cursor: 'pointer',
                            userSelect: 'none'
                        }}
                    >
                        Some things I believe: {showBeliefs ? '−' : '+'}
                    </h2>

                    {showBeliefs && (
                        <div style={{ fontSize: '12px', lineHeight: '1.6' }}>
                            <div style={{ marginBottom: '8px' }}>
                                • Technology is a tool for reshaping the world to better serve human needs
                            </div>
                            <div style={{ marginBottom: '8px' }}>
                                • Focus on raising the ceiling, not just the floor
                            </div>
                            <div style={{ marginBottom: '8px' }}>
                                • Enthusiasm matters—work on things that excite you, energy drives progress
                            </div>
                            <div style={{ marginBottom: '8px' }}>
                                • Speed matters: going fast forces focus on what's important, no time for bullshit
                            </div>
                            <div style={{ marginBottom: '8px' }}>
                                • Time is the denominator—a week is 2% of the year, use it wisely
                            </div>
                            <div style={{ marginBottom: '8px' }}>
                                • The best opportunities exist where conventional wisdom fails
                            </div>
                            <div style={{ marginBottom: '8px' }}>
                                • We know less than we think—many of our beliefs are wrong, stay humble
                            </div>
                            <div style={{ marginBottom: '8px' }}>
                                • Small teams are better: faster decisions, fewer meetings, more impact
                            </div>
                            <div style={{ marginBottom: '8px' }}>
                                • You can do more than you think—we're often limited by invisible orthodoxy
                            </div>
                            <div style={{ marginBottom: '8px' }}>
                                • Get dopamine from improving your ideas, not just validating them
                            </div>
                            <div style={{ marginBottom: '8px' }}>
                                • The laws of physics are the only true limit—everything else is negotiable
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div
                    style={{
                        marginTop: '15px',
                        paddingTop: '10px',
                        fontSize: '12px',
                        textAlign: 'center',
                        color: '#666'
                    }}
                >
                    <a href="/gallery" style={{ color: '#0066cc', textDecoration: 'none' }}>
                        Gallery
                    </a>{' '}
                    |{' '}
                    <a
                        href="https://www.linkedin.com/in/erald-calaj-5b642815b/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: '#0066cc', textDecoration: 'none' }}
                    >
                        LinkedIn
                    </a>{' '}
                    | &copy; {new Date().getFullYear()} Erald Calaj
                </div>
            </div>
        </>
    )
}
