fetch('projects.json')
.then(response => response.json())
.then(data => {
  // Get the last 3 projects
  const latestProjects = data;

  const container = document.getElementById('projectFullContainer');
  latestProjects.forEach(project => {
    const div = document.createElement('div');
    div.className = 'project-detail-full';

    div.innerHTML = `
      <h3>${project.title}</h3>
      <div class="project-img">
        <img src="${project.image}" alt="project image" />
      </div>
      <p>${project.description}</p>
      <div class="pro-button">
        <button class="live" onclick="window.open('${project.livePreview}', '_blank')">Live Preview</button>
      </div>
    `;

    container.appendChild(div);
  });
})
.catch(error => console.error('Error loading projects:', error));