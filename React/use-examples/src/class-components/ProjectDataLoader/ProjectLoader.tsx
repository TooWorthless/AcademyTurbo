import React, { Component } from 'react';

interface Project {
    id: number;
    name: string;
    budget: number;
}

interface ProjectLoaderState {
    projects: Project[];
    loading: boolean;
}

class ProjectLoader extends Component<{}, ProjectLoaderState> {
    state: ProjectLoaderState = { projects: [], loading: true };

    async componentDidMount() {
        const projects = await new Promise<Project[]>((resolve) =>
            setTimeout(() => resolve([{ id: 1, name: 'CRM', budget: 50000 }]), 1000)
        );
        this.setState({ projects, loading: false });
    }

    render() {
        const { projects, loading } = this.state;
        if (loading) return <div>Loading...</div>;
        return (
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        {project.name} - ${project.budget}
                    </li>
                ))}
            </ul>
        );
    }
}

export default ProjectLoader;