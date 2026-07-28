import { Component, ViewEncapsulation, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { TrustBannerComponent } from './components/trust-banner/trust-banner.component';
import { WhyChooseComponent } from './components/why-choose/why-choose.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { BookingInfoComponent } from './components/booking-info/booking-info.component';
import { AstrologersComponent } from './components/astrologers/astrologers.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-live-astrology-consultation',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule,
    NavbarComponent,
    BannerComponent,
    TrustBannerComponent,
    WhyChooseComponent,
    QuestionsComponent,

    BookingInfoComponent,
    AstrologersComponent,
    TestimonialsComponent,
    FaqComponent,
    FooterComponent
  ],
  templateUrl: './live-astrology-consultation.html',
  styleUrl: './live-astrology-consultation.css',
})
export class LiveAstrologyConsultation {
  isStickyVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isStickyVisible = offset > 500;
  }

  scrollToAstrologers() {
    const el = document.getElementById('expert-astrologers');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
