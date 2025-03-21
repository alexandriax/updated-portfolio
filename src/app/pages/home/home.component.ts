import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('bannerTrack') bannerTrack!: ElementRef;

  ngAfterViewInit(): void {
    this.createInfiniteScroll();
  }

  private createInfiniteScroll(): void {
    const bannerTrack = this.bannerTrack.nativeElement as HTMLElement;
    const originalContent = bannerTrack.firstElementChild as HTMLElement;

    if (originalContent) {
      const minDuplication = 4; // Ensures enough copies to always overflow

      for (let i = 0; i < minDuplication; i++) {
        const duplicateContent = originalContent.cloneNode(true) as HTMLElement;
        bannerTrack.appendChild(duplicateContent);
      }
    }

    // Ensure the banner track width is dynamically set to fit all copies
    bannerTrack.style.width = `100%`;
  }
  
  scrollToProjects() {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

}

export default HomeComponent;




