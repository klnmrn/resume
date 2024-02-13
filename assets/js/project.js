function openModal(projectId) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalImage = document.getElementById('modal-image');
    const modalLink1 = document.getElementById('modal-link1');
    const modalLink2 = document.getElementById('modal-link2');
  
    // Set the project details based on the projectId
    // You can use a switch statement or an array of objects to store project details
    // Then, update the modal's content using JavaScript
  
    switch (projectId) {
      case 'project1':
        modalTitle.textContent = "Road safety of vulnerable";
        modalDescription.textContent = 'Project 1 description';
        modalImage.src = 'images/Marina.png';
        modalLink1.href = 'https://github.com/klnmrn/urbanroadsafety';
        modalLink2.href = 'https://github.com/klnmrn/urbanroadsafety'; // Optional, may be empty or not needed
        break;
      case 'project2':
        modalTitle.textContent = 'Project 2';
        modalDescription.textContent = 'Project 2 description';
        modalImage.src = 'path/to/project2/image.jpg';
        modalLink1.href = 'https://project2.com';
        modalLink2.href = ''; // Optional, may be empty or not needed
        break;
      case 'project3':
        modalTitle.textContent = 'Project 3';
        modalDescription.textContent = 'Project 3 description';
        modalImage.src = 'path/to/project3/image.jpg';
        modalLink1.href = 'https://project3.com';
        modalLink2.href = ''; // Optional, may be empty or not needed
        break;
      case 'project4':
        modalTitle.textContent = 'Project 4';
        modalDescription.textContent = 'Project 4 description';
        modalImage.src = 'path/to/project4/image.jpg';
        modalLink1.href = 'https://project4.com';
        modalLink2.href = ''; // Optional, may be empty or not needed
        break;
      case 'project5':
        modalTitle.textContent = 'Project 5';
        modalDescription.textContent = 'Project 5 description';
        modalImage.src = 'path/to/project5/image.jpg';
        modalLink1.href = 'https://project5.com';
        modalLink2.href = ''; // Optional, may be empty or not needed
        break;
      case 'project6':
        modalTitle.textContent = 'Project 6';
        modalDescription.textContent = 'Project 6 description';
        modalImage.src = 'path/to/project6/image.jpg';
        modalLink1.href = 'https://project6.com';
        modalLink2.href = ''; // Optional, may be empty or not needed
        break;
    }
  
    // Show the modal
    modal.style.display = 'block';
}


// Close the modal when the user clicks on the close button or outside the modal
const closeModalButton = document.getElementById('modal-close');
closeModalButton.addEventListener('click', function() {
  const modal = document.getElementById("modal");
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  const modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});