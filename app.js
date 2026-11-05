/**
 * PORTFOLIO TƯƠNG TÁC CAO - NATIVE FLUID LAYOUT & WCAG 2.2 AA
 * Chuyên gia UI/UX & Kỹ sư Front-end bậc cao
 * Tích hợp Hệ thống Đa ngôn ngữ (i18n State-based Language Switching)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 0. KHỞI TẠO BỘ CHUYỂN ĐỔI NGÔN NGỮ (i18n)
  initLanguageToggle();

  // 0.1. MENU ĐIỀU HƯỚNG DI ĐỘNG & BẪY TIÊU ĐIỂM (MOBILE MENU DRAWER & A11Y FOCUS TRAP)
  initMobileMenu();

  // 1. QUẢN LÝ MÀN HÌNH TẢI TRANG (PRELOADER)
  initPreloader();

  // 2. CON TRỎ CHUỘT TÙY CHỈNH THEO NGỮ CẢNH (CUSTOM CURSOR)
  initCustomCursor();

  // 3. KHÔNG GIAN TRƯNG BÀY DỰ ÁN CUỘN NGANG (HORIZONTAL SCROLL)
  initHorizontalScroll();

  // 4. MODAL CHI TIẾT DỰ ÁN TRÀN MÀN HÌNH (CASE STUDY OVERLAY & FOCUS TRAP)
  initProjectModal();

  // 5. HIỆU ỨNG TƯƠNG TÁC TỪ TÍNH (MAGNETIC HOVER)
  initMagneticHover();

  // 6. BỘ LỌC DÒNG THỜI GIAN CV ĐỘNG (DYNAMIC CV TIMELINE)
  initTimelineFilter();

  // 7. XỬ LÝ TẢI CV & THÔNG BÁO TIẾP CẬN (ACCESSIBLE RESUME DOWNLOAD)
  initResumeDownload();

  // 8. HOẠT ẢNH XUẤT HIỆN KHI CUỘN (SCROLL-TRIGGERED REVEAL)
  initScrollReveal();

  // 9. FORM LIÊN HỆ TIẾP CẬN (ACCESSIBLE CONTACT FORM)
  initContactForm();
});

/* ==========================================================================
   0. LANGUAGE TOGGLE (VI / EN STATE-BASED SWITCHING)
   ========================================================================== */
function initLanguageToggle() {
  if (!window.i18n) return;

  // Áp dụng ngôn ngữ khởi tạo (từ localStorage hoặc mặc định 'vi')
  window.i18n.applyTranslations();

  const toggleBtns = document.querySelectorAll('.lang-toggle-btn');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      window.i18n.toggleLang();
    });

    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.i18n.toggleLang();
      }
    });
  });
}

/* ==========================================================================
   0.1. MOBILE MENU DRAWER & WCAG 2.2 AA FOCUS TRAP
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const menuModal = document.getElementById('mobile-menu');
  const backdrop = document.getElementById('mobile-menu-backdrop');
  const drawer = document.getElementById('mobile-menu-drawer');
  const closeBtn = document.getElementById('mobile-menu-close');
  const navLinks = document.querySelectorAll('.mobile-nav-link');
  const liveRegion = document.getElementById('a11y-live-region');

  if (!toggleBtn || !menuModal || !drawer || !closeBtn) return;

  let isOpen = false;
  let lastFocusedElement = null;

  function openMenu() {
    if (isOpen) return;
    isOpen = true;
    lastFocusedElement = document.activeElement;

    // Cập nhật thuộc tính tiếp cận WCAG 2.2 AA
    toggleBtn.setAttribute('aria-expanded', 'true');
    menuModal.setAttribute('aria-hidden', 'false');

    // Kích hoạt hiển thị container
    menuModal.classList.remove('invisible', 'pointer-events-none');
    menuModal.classList.add('visible', 'pointer-events-auto');

    // Chuyển động mượt mà cho backdrop và drawer
    requestAnimationFrame(() => {
      backdrop.classList.remove('opacity-0', 'pointer-events-none');
      backdrop.classList.add('opacity-100', 'pointer-events-auto');
      drawer.classList.remove('translate-x-full');
      drawer.classList.add('translate-x-0');
    });

    // Khóa cuộn trang nền
    document.body.style.overflow = 'hidden';

    // Focus Trap: Đặt tiêu điểm vào nút đóng hoặc mục đầu tiên
    setTimeout(() => {
      closeBtn.focus();
    }, 100);

    // Thông báo cho trình đọc màn hình
    if (liveRegion && window.i18n) {
      liveRegion.textContent = window.i18n.get('a11y.menuOpenLive');
    }
  }

  function closeMenu() {
    if (!isOpen) return;
    isOpen = false;

    // Cập nhật thuộc tính tiếp cận WCAG 2.2 AA
    toggleBtn.setAttribute('aria-expanded', 'false');
    menuModal.setAttribute('aria-hidden', 'true');

    // Chuyển động thu drawer và làm mờ backdrop
    drawer.classList.remove('translate-x-0');
    drawer.classList.add('translate-x-full');
    backdrop.classList.remove('opacity-100', 'pointer-events-auto');
    backdrop.classList.add('opacity-0', 'pointer-events-none');

    // Sau khi kết thúc animation 300ms, ẩn hoàn toàn khỏi accessibility tree
    setTimeout(() => {
      if (!isOpen) {
        menuModal.classList.remove('visible', 'pointer-events-auto');
        menuModal.classList.add('invisible', 'pointer-events-none');
      }
    }, 300);

    // Mở khóa cuộn trang
    document.body.style.overflow = '';

    // Khôi phục tiêu điểm bàn phím về nút mở menu (WCAG 2.4.3 Focus Order)
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }

    // Thông báo cho trình đọc màn hình
    if (liveRegion && window.i18n) {
      liveRegion.textContent = window.i18n.get('a11y.menuCloseLive');
    }
  }

  toggleBtn.addEventListener('click', () => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  closeBtn.addEventListener('click', closeMenu);

  if (backdrop) {
    backdrop.addEventListener('click', closeMenu);
  }

  // Tự động đóng menu khi nhấp vào bất kỳ link nào
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Xử lý Focus Trap và phím Escape (WCAG 2.1 / 2.2 AA)
  document.addEventListener('keydown', (e) => {
    if (!isOpen) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      closeMenu();
      return;
    }

    if (e.key === 'Tab') {
      const focusables = drawer.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables.length) return;

      const firstElement = focusables[0];
      const lastElement = focusables[focusables.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  });

  // Tự động đóng khi resize màn hình lên desktop (>= 768px)
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && isOpen) {
      closeMenu();
    }
  });
}

/* ==========================================================================
   1. PRELOADER CONTROLLER
   ========================================================================== */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  const counterEl = document.getElementById('preloader-counter');
  const liveRegion = document.getElementById('a11y-live-region');
  if (!preloader) return;

  let progress = 0;
  const startTime = performance.now();
  const duration = 1600; // 1.6s mượt mà

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    progress = Math.min(Math.round((elapsed / duration) * 100), 100);
    if (counterEl) {
      counterEl.textContent = `${progress}%`;
    }

    if (progress < 100) {
      requestAnimationFrame(updateCounter);
    } else {
      setTimeout(() => {
        preloader.classList.add('is-loaded');
        if (liveRegion && window.i18n) {
          liveRegion.textContent = window.i18n.get('a11y.pageLoadedLive');
        }
        // Cho phép cuộn trang sau khi preloader kết thúc
        document.body.style.overflow = '';
      }, 250);
    }
  }

  requestAnimationFrame(updateCounter);
}

/* ==========================================================================
   2. CON TRỎ CHUỘT TÙY CHỈNH (CUSTOM CURSOR VỚI MORPHOLOGY)
   ========================================================================== */
function initCustomCursor() {
  // Bỏ qua nếu là thiết bị màn hình cảm ứng (WCAG & Performance)
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const dot = document.getElementById('custom-cursor-dot');
  const ring = document.getElementById('custom-cursor-ring');
  if (!dot || !ring) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let isMoving = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    if (!isMoving) {
      isMoving = true;
      requestAnimationFrame(renderRing);
    }
  });

  // Chuyển động quán tính mượt mà (Linear Interpolation)
  function renderRing() {
    const ease = 0.18;
    ringX += (mouseX - ringX) * ease;
    ringY += (mouseY - ringY) * ease;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

    if (Math.abs(mouseX - ringX) > 0.1 || Math.abs(mouseY - ringY) > 0.1) {
      requestAnimationFrame(renderRing);
    } else {
      isMoving = false;
    }
  }

  // Tương tác ngữ cảnh (Morphing states)
  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('[data-cursor]');
    if (!target) {
      document.body.classList.remove('cursor-hover', 'cursor-view', 'cursor-drag');
      ring.textContent = '';
      return;
    }

    const cursorType = target.getAttribute('data-cursor');
    if (cursorType === 'pointer') {
      document.body.classList.add('cursor-hover');
      ring.textContent = '';
    } else if (cursorType === 'view') {
      document.body.classList.add('cursor-view');
      ring.textContent = window.i18n ? window.i18n.get('cursor.view') : 'XEM';
    } else if (cursorType === 'drag') {
      document.body.classList.add('cursor-drag');
      ring.textContent = window.i18n ? window.i18n.get('cursor.drag') : 'CUỘN';
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (!e.relatedTarget || e.relatedTarget.nodeName === 'HTML') {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    }
  });

  document.addEventListener('mouseenter', () => {
    dot.style.opacity = '1';
    ring.style.opacity = '1';
  });

  // Cập nhật lại nhãn con trỏ khi đổi ngôn ngữ
  if (window.i18n) {
    window.i18n.onLangChange(() => {
      if (document.body.classList.contains('cursor-view')) {
        ring.textContent = window.i18n.get('cursor.view');
      } else if (document.body.classList.contains('cursor-drag')) {
        ring.textContent = window.i18n.get('cursor.drag');
      }
    });
  }
}

/* ==========================================================================
   3. IMMERSIVE PROJECT SHOWCASE (HORIZONTAL SCROLL TRÊN DESKTOP)
   ========================================================================== */
function initHorizontalScroll() {
  const container = document.querySelector('.horizontal-scroll-container');
  const sticky = document.querySelector('.horizontal-scroll-sticky');
  const track = document.querySelector('.horizontal-track');
  const progressBar = document.getElementById('project-scroll-progress');

  if (!container || !sticky || !track) return;

  function handleScroll() {
    if (window.innerWidth < 1024) {
      track.style.transform = 'none';
      return;
    }

    const rect = container.getBoundingClientRect();
    const containerTop = rect.top;
    const totalDist = container.offsetHeight - window.innerHeight;

    if (containerTop <= 0 && Math.abs(containerTop) <= totalDist) {
      const progress = Math.abs(containerTop) / totalDist;
      const maxTranslate = track.scrollWidth - window.innerWidth + 120;
      const currentX = progress * maxTranslate;

      track.style.transform = `translate3d(-${currentX}px, 0, 0)`;

      if (progressBar) {
        progressBar.style.width = `${Math.min(progress * 100, 100)}%`;
      }

      // Parallax nhẹ cho hình ảnh bên trong thumbnail
      const cards = track.querySelectorAll('.project-card-item');
      cards.forEach((card, idx) => {
        const thumb = card.querySelector('.project-card-thumb');
        if (thumb) {
          const shift = (progress - idx * 0.25) * 24;
          thumb.style.transform = `scale(1.02) translateX(${shift}px)`;
        }
      });
    } else if (containerTop > 0) {
      track.style.transform = 'translate3d(0, 0, 0)';
      if (progressBar) progressBar.style.width = '0%';
    } else {
      const maxTranslate = track.scrollWidth - window.innerWidth + 120;
      track.style.transform = `translate3d(-${maxTranslate}px, 0, 0)`;
      if (progressBar) progressBar.style.width = '100%';
    }
  }

  window.addEventListener('scroll', () => {
    requestAnimationFrame(handleScroll);
  }, { passive: true });

  window.addEventListener('resize', handleScroll);
}

/* ==========================================================================
   4. MODAL CHI TIẾT DỰ ÁN TRÀN MÀN HÌNH (CASE STUDY OVERLAY & A11Y FOCUS TRAP)
   ========================================================================== */
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const triggers = document.querySelectorAll('[data-project-id]');
  let lastFocusedElement = null;
  let currentOpenProjectId = null;

  if (!modal || !closeBtn) return;

  function getProjectData(projectId) {
    if (window.i18n) {
      return window.i18n.get(`projects.${projectId}`);
    }
    return null;
  }

  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = trigger.getAttribute('data-project-id');
      const data = getProjectData(projectId);
      if (!data) return;

      lastFocusedElement = trigger;
      currentOpenProjectId = projectId;
      openModal(data);
    });
  });

  function openModal(data) {
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-category').textContent = `${data.category} • ${data.year}`;
    document.getElementById('modal-client').textContent = data.client;
    document.getElementById('modal-role').textContent = data.role;
    document.getElementById('modal-impact').textContent = data.impact;
    document.getElementById('modal-summary').textContent = data.summary;
    document.getElementById('modal-challenge').textContent = data.challenge;
    document.getElementById('modal-solution').textContent = data.solution;

    // Render Tech Stack Badges
    const stackContainer = document.getElementById('modal-stack');
    stackContainer.innerHTML = '';
    data.stack.forEach(tech => {
      const span = document.createElement('span');
      span.className = 'px-3 py-1 text-xs rounded-full bg-canvas-elevated border border-border-subtle text-brand-cyan font-mono';
      span.textContent = tech;
      stackContainer.appendChild(span);
    });

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // A11y Focus Trap: Chuyển focus vào nút đóng modal
    setTimeout(() => {
      closeBtn.focus();
    }, 100);

    // Thông báo cho thiết bị đọc màn hình
    const liveRegion = document.getElementById('a11y-live-region');
    if (liveRegion && window.i18n) {
      const openMsg = window.i18n.get('a11y.modalOpenLive').replace('{title}', data.title);
      liveRegion.textContent = openMsg;
    }
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    currentOpenProjectId = null;

    // Khôi phục tiêu điểm bàn phím cho phần tử đã kích hoạt
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }

    const liveRegion = document.getElementById('a11y-live-region');
    if (liveRegion && window.i18n) {
      liveRegion.textContent = window.i18n.get('a11y.modalCloseLive');
    }
  }

  closeBtn.addEventListener('click', closeModal);

  // Đóng khi click ngoài vùng modal content
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Hỗ trợ phím Escape (Tiêu chuẩn WCAG 2.1 / 2.2)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }

    // Xử lý Focus Trap Tab / Shift+Tab
    if (modal.classList.contains('is-open') && e.key === 'Tab') {
      const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  });

  // Tự động cập nhật nội dung Modal nếu người dùng chuyển ngôn ngữ khi modal đang mở
  if (window.i18n) {
    window.i18n.onLangChange(() => {
      if (currentOpenProjectId && modal.classList.contains('is-open')) {
        const freshData = getProjectData(currentOpenProjectId);
        if (freshData) openModal(freshData);
      }
    });
  }
}

/* ==========================================================================
   5. HIỆU ỨNG TƯƠNG TÁC TỪ TÍNH (MAGNETIC HOVER)
   ========================================================================== */
function initMagneticHover() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const magneticElements = document.querySelectorAll('.magnetic-target');

  magneticElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * 0.32;
      const deltaY = (e.clientY - centerY) * 0.32;

      el.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate3d(0, 0, 0)';
      el.style.transition = 'transform 0.5s var(--ease-out-expo)';
      setTimeout(() => {
        el.style.transition = '';
      }, 500);
    });
  });
}

/* ==========================================================================
   6. BỘ LỌC DÒNG THỜI GIAN CV ĐỘNG (DYNAMIC CV TIMELINE)
   ========================================================================== */
function initTimelineFilter() {
  const filterBtns = document.querySelectorAll('.timeline-filter-btn');
  const items = document.querySelectorAll('.timeline-item');
  const liveRegion = document.getElementById('a11y-live-region');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-brand-cyan', 'text-content-inverse', 'font-bold');
        b.classList.add('bg-canvas-surface', 'text-content-secondary');
        b.setAttribute('aria-pressed', 'false');
      });

      btn.classList.add('bg-brand-cyan', 'text-content-inverse', 'font-bold');
      btn.classList.remove('bg-canvas-surface', 'text-content-secondary');
      btn.setAttribute('aria-pressed', 'true');

      const filter = btn.getAttribute('data-filter');
      let count = 0;

      items.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
          item.style.opacity = '0';
          item.style.transform = 'translateY(16px)';
          setTimeout(() => {
            item.style.transition = 'opacity 0.4s ease, transform 0.4s var(--ease-out-expo)';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 50);
          count++;
        } else {
          item.style.display = 'none';
        }
      });

      if (liveRegion && window.i18n) {
        const filterMsg = window.i18n.get('a11y.timelineFilterLive')
          .replace('{count}', count)
          .replace('{filter}', btn.textContent.trim());
        liveRegion.textContent = filterMsg;
      }
    });
  });
}

/* ==========================================================================
   7. XỬ LÝ TẢI CV & THÔNG BÁO TIẾP CẬN (RESUME DOWNLOAD)
   ========================================================================== */
function initResumeDownload() {
  const downloadBtns = document.querySelectorAll('.resume-download-btn');
  const liveRegion = document.getElementById('a11y-live-region');

  downloadBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const toastMsg = window.i18n ? window.i18n.get('contact.toastDownload') : 'Đang tải xuống tệp CV của Alex Nguyen...';
      showToast(toastMsg);

      if (liveRegion && window.i18n) {
        liveRegion.textContent = window.i18n.get('a11y.downloadResumeLive');
      }
    });
  });
}

function showToast(message) {
  let toast = document.getElementById('accessible-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'accessible-toast';
    toast.className = 'fixed bottom-6 right-6 z-50 px-5 py-3 rounded-xl bg-canvas-elevated border border-brand-cyan text-content-primary shadow-2xl flex items-center gap-3 transition-all duration-300 transform translate-y-12 opacity-0';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg class="w-5 h-5 text-brand-cyan shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
    </svg>
    <span class="text-sm font-medium">${message}</span>
  `;

  toast.classList.remove('translate-y-12', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-12', 'opacity-0');
  }, 4000);
}

/* ==========================================================================
   8. HOẠT ẢNH XUẤT HIỆN KHI CUỘN (SCROLL-TRIGGERED REVEAL)
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.scroll-reveal');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   9. FORM LIÊN HỆ TIẾP CẬN (ACCESSIBLE CONTACT FORM)
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const liveRegion = document.getElementById('a11y-live-region');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const messageInput = document.getElementById('contact-message');

    const errNameMsg = window.i18n ? window.i18n.get('contact.errName') : 'Vui lòng nhập họ và tên của bạn.';
    const errEmailMsg = window.i18n ? window.i18n.get('contact.errEmail') : 'Vui lòng nhập định dạng email hợp lệ.';
    const errMessageMsg = window.i18n ? window.i18n.get('contact.errMessage') : 'Nội dung tin nhắn tối thiểu 10 ký tự.';

    // Kiểm tra tên
    if (!nameInput.value.trim()) {
      showInputError(nameInput, errNameMsg);
      isValid = false;
    } else {
      clearInputError(nameInput);
    }

    // Kiểm tra email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      showInputError(emailInput, errEmailMsg);
      isValid = false;
    } else {
      clearInputError(emailInput);
    }

    // Kiểm tra nội dung
    if (messageInput.value.trim().length < 10) {
      showInputError(messageInput, errMessageMsg);
      isValid = false;
    } else {
      clearInputError(messageInput);
    }

    if (isValid) {
      const toastSuccessMsg = window.i18n ? window.i18n.get('contact.toastSuccess') : 'Cảm ơn bạn! Tin nhắn đã được gửi thành công.';
      showToast(toastSuccessMsg);
      form.reset();
      if (liveRegion && window.i18n) {
        liveRegion.textContent = window.i18n.get('a11y.formSuccessLive');
      }
    }
  });

  function showInputError(input, msg) {
    input.setAttribute('aria-invalid', 'true');
    input.classList.add('border-status-error');
    const errorEl = document.getElementById(`${input.id}-error`);
    if (errorEl) {
      errorEl.textContent = msg;
      errorEl.classList.remove('hidden');
    }
  }

  function clearInputError(input) {
    input.removeAttribute('aria-invalid');
    input.classList.remove('border-status-error');
    const errorEl = document.getElementById(`${input.id}-error`);
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.classList.add('hidden');
    }
  }
}
