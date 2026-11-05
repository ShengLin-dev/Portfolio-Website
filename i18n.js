/**
 * INTERNATIONALIZATION (i18n) DICTIONARY & CONTROLLER
 * Song ngữ Tiếng Việt (VI) & English (EN) cho Portfolio tương tác cao
 */

const I18N_TRANSLATIONS = {
  vi: {
    meta: {
      title: "Yi Sheng — Chuyên gia UI/UX & Kỹ sư Front-end",
      description: "Portfolio cá nhân tương tác cao của Yi Sheng - Chuyên gia UI/UX & Kỹ sư Front-end bậc cao. Tuân thủ tiêu chuẩn EAA & WCAG 2.2 AA."
    },
    a11y: {
      skipToContent: "Chuyển đến nội dung chính (Skip to content)",
      pageLoadedLive: "Trang web đã tải xong. Chào mừng bạn đến với portfolio tương tác của Yi Sheng.",
      modalOpenLive: "Đã mở chi tiết dự án: {title}. Nhấn Escape để đóng.",
      modalCloseLive: "Đã đóng hộp thoại chi tiết dự án.",
      timelineFilterLive: "Hiển thị {count} mục trong dòng thời gian theo danh mục {filter}.",
      downloadResumeLive: "Quá trình tải tệp CV định dạng PDF đã bắt đầu.",
      langChangedLive: "Đã chuyển đổi ngôn ngữ sang Tiếng Việt.",
      formSuccessLive: "Tin nhắn liên hệ của bạn đã được gửi thành công.",
      menuOpenLive: "Đã mở menu điều hướng di động. Nhấn Escape để đóng.",
      menuCloseLive: "Đã đóng menu điều hướng di động.",
      toggleLangAria: "Chuyển đổi ngôn ngữ sang Tiếng Anh (Current: Tiếng Việt)"
    },
    cursor: {
      view: "XEM",
      drag: "CUỘN"
    },
    preloader: {
      subtitle: "Yi Sheng • Portfolio",
      ariaLoading: "Màn hình đang tải dữ liệu"
    },
    nav: {
      logoRole: "UI/UX & Front-end Architect",
      logoAria: "Yi Sheng - Quay lại đầu trang",
      projects: "Dự án",
      about: "Về tôi",
      timeline: "Kinh nghiệm",
      contact: "Liên hệ",
      downloadCv: "Tải CV (PDF)",
      downloadCvAria: "Tải xuống bản CV đầy đủ định dạng PDF (919 KB)",
      openMenuAria: "Mở menu điều hướng",
      closeMenuAria: "Đóng menu điều hướng"
    },
    hero: {
      badge: "Sẵn sàng cho các dự án mới & Hợp tác chiến lược",
      titleLine1: "Sáng tạo trải nghiệm số",
      titleLine2: "Tiếp cận & Chuẩn hóa",
      description: "Tôi là <strong class=\"text-content-primary font-semibold\">Yi Sheng</strong>, Chuyên gia UI/UX kiêm Kỹ sư Front-end. Tôi đồng hành cùng các sản phẩm số quy mô lớn bằng sự kết hợp giữa <em>Tư duy Thiết Kế Hệ thống (Design Systems)</em>, chuẩn mực tiếp cận quốc tế <strong class=\"text-brand-cyan\">EAA & WCAG 2.2 AA</strong>, và kỹ thuật mã hóa CSS/Tailwind.",
      ctaProjects: "Khám phá Dự án",
      ctaCv: "Tải CV cá nhân (PDF)",
      ctaCvAria: "Tải hồ sơ năng lực đầy đủ dạng PDF",
      metrics: {
        years: "06+",
        yearsLabel: "Năm kinh nghiệm chuyên sâu",
        a11y: "100%",
        a11yLabel: "Tuân thủ WCAG 2.2 AA / EAA",
        users: "40M+",
        usersLabel: "Lượt người dùng tương tác UI",
        cls: "0.0ms",
        clsLabel: "Layout shift (CLS tuyệt đối 0)"
      }
    },
    showcase: {
      tag: "Selected Works (2023 - 2026)",
      heading: "Không Gian Dự Án Nổi Bật",
      scrollHint: "Cuộn chuột để lướt ngang",
      viewCaseStudy: "Chi tiết Case Study &rarr;",
      metrics: {
        devVelocity: "+140% Dev Velocity",
        activeUsers: "300k+ Active Users",
        timeOnPage: "+220% Time On Page",
        realtimeSvg: "Real-time SVG Charts"
      }
    },
    projects: {
      'project-1': {
        title: 'Aura Design System & FinTech NextGen',
        category: 'Design System / Enterprise Web',
        year: '2025 - 2026',
        client: 'Nordic Bank & FinTech Global',
        role: 'Lead Front-end & UI/UX Architect',
        impact: 'Tăng 140% tốc độ bàn giao mã UI; 100% đạt chuẩn tiếp cận WCAG 2.2 AAA',
        summary: 'Xây dựng kiến trúc hệ thống thiết kế đa nền tảng dựa trên không gian màu OKLCH, tích hợp Fluid Typography và bộ thư viện React / Tailwind chuẩn tiếp cận quốc tế.',
        challenge: 'Đảm bảo tỷ lệ tương phản động trong cả Dark/Light mode cho các biểu đồ tài chính thời gian thực mà không làm giảm tốc độ render của hàng chục nghìn điểm dữ liệu.',
        solution: 'Áp dụng Perceptual Uniformity của không gian OKLCH giúp cân bằng độ chói (Luminance) hoàn hảo. Triển khai CSS Subgrid và Container Queries giảm 65% CSS phát sinh.',
        stack: ['Tailwind CSS', 'OKLCH Tokens', 'TypeScript', 'Web Components', 'WCAG 2.2 AA'],
        badge: 'Enterprise FinTech',
        cardDesc: 'Kiến trúc hệ thống thiết kế ngân hàng số hiện đại ứng dụng không gian màu OKLCH, tích hợp Fluid Typography và chuẩn tiếp cận WCAG 2.2 AAA.',
        image: 'image/fintech.png'
      },
      'project-2': {
        title: 'Nova AI Health Companion',
        category: 'Interactive Web App / AI UX',
        year: '2025',
        client: 'LifePulse HealthTech',
        role: 'Senior Product Designer & Creative Developer',
        impact: '98% điểm hài lòng người dùng; hỗ trợ hơn 300,000 bệnh nhân cao tuổi',
        summary: 'Ứng dụng trợ lý y tế thông minh kết nối bác sĩ và người bệnh. Thiết kế giao diện siêu tiếp cận cho người suy giảm thị lực và khả năng vận động tinh.',
        challenge: 'Tạo ra trải nghiệm trò chuyện tương tác giọng nói kết hợp thị giác có nhịp độ tự nhiên, không gây cảm giác áp lực hay phức tạp về công nghệ y tế.',
        solution: 'Thiết kế hệ thống vi tương tác phản hồi âm thanh/thị giác nhẹ nhàng, vùng chạm tối thiểu 56x56px, tương thích hoàn toàn thiết bị đọc màn hình NVDA & VoiceOver.',
        stack: ['Accessible Voice UI', 'Tailwind CSS', 'Web Audio API', 'WCAG 2.2 AA'],
        badge: 'AI Healthcare',
        cardDesc: 'Giao diện trợ lý y tế thông minh tối ưu cho bệnh nhân cao tuổi và người suy giảm thị lực, tuân thủ nghiêm ngặt chỉ dẫn tiếp cận EAA.',
        image: 'image/nova.png'
      },
      'project-3': {
        title: 'Verve Spatial E-Commerce Platform',
        category: 'Immersive Web / 3D Experience',
        year: '2024 - 2025',
        client: 'Verve Audio Luxury',
        role: 'Front-end Engineer & Interaction Specialist',
        impact: 'Tăng 220% thời gian lưu trang (Time on page); Doanh thu quý 3 tăng 48%',
        summary: 'Trang web thương mại điện tử trải nghiệm âm thanh không gian cao cấp với kỹ thuật dựng hình Canvas tối ưu và hiệu ứng Parallax cuộn chiều sâu.',
        challenge: 'Mang trải nghiệm sản phẩm xa xỉ vào trình duyệt mà vẫn duy trì tải trang dưới 1.2s trên mạng di động 4G.',
        solution: 'Tối ưu hoá SVG vector nguyên bản, kỹ thuật lazy-loading thích ứng và pure CSS transformations thay thế thư viện 3D cồng kềnh.',
        stack: ['CSS Transitions', 'Spatial Audio API', 'Responsive Fluid Layout', 'EAA Compliant'],
        badge: 'Luxury Audio',
        cardDesc: 'Nền tảng thương mại thiết bị âm thanh xa xỉ với hiệu ứng Parallax cuộn chiều sâu và chuyển động CSS mượt mà 120 FPS.',
        image: 'image/verve.png'

      },
      'project-4': {
        title: 'EcoTrack Sustainability Dashboard',
        category: 'Data Visualization / SaaS',
        year: '2024',
        client: 'ClimateWorks Initiative',
        role: 'UI/UX Consultant & Front-end Developer',
        impact: 'Tiết kiệm 450+ tấn CO2 thông qua cơ chế tự động hóa báo cáo ESG',
        summary: 'Bảng điều khiển trực quan hoá lượng phát thải carbon và năng lượng tái tạo của doanh nghiệp với các biểu đồ tương tác thời gian thực.',
        challenge: 'Truyền tải hàng triệu luồng dữ liệu phức tạp thành những chỉ số rõ ràng, hành động được đối với các nhà quản trị phi kỹ thuật.',
        solution: 'Cấu trúc phân cấp thông tin kim tự tháp (Pyramid Principle), áp dụng micro-interactions tinh tế và bảng màu OKLCH tương phản cao dễ đọc.',
        stack: ['Tailwind CSS', 'SVG Charts', 'Fluid Architecture', 'WCAG 2.2 AA'],
        badge: 'ESG SaaS',
        cardDesc: 'Bảng điều khiển trực quan hoá lượng phát thải và năng lượng tái tạo, cấu trúc thông tin hình kim tự tháp rõ ràng cho ban điều hành.',
        image: 'image/dash.png'
      }
    },
    modal: {
      clientLabel: "Khách hàng / Tổ chức:",
      roleLabel: "Vai trò thực hiện:",
      impactLabel: "Tác động đo lường:",
      sec1Heading: "1. Tổng Quan & Mục Tiêu",
      sec2Heading: "2. Thách Thức Nghiên Cứu & Trải Nghiệm (UX Challenge)",
      sec3Heading: "3. Giải Pháp Kỹ Thuật & Kiến Trúc Front-end",
      sec4Heading: "4. Công Nghệ & Tiêu Chuẩn Thực Thi",
      closeAria: "Đóng hộp thoại chi tiết dự án (Phím Escape)"
    },
    about: {
      tag: "Design Philosophy",
      heading: "Giao thoa giữa Thẩm mỹ Cảm xúc & Kỹ thuật Chuẩn xác",
      p1: "Tôi tin rằng một trải nghiệm web xuất sắc không chỉ nằm ở vẻ ngoài thu hút mà bắt nguồn từ <strong>khả năng tiếp cận bình đẳng (Universal Accessibility)</strong> và hiệu năng tải trang tức thì.",
      p2: "Khi xây dựng giao diện, tôi coi các tiêu chuẩn <strong>EAA (European Accessibility Act)</strong> và <strong>WCAG 2.2 AA</strong> là nguyên lý kiến trúc cơ bản ngay từ nét vẽ đầu tiên, chứ không phải một danh sách kiểm tra sau cùng.",
      commitmentTitle: "Cam kết Tiếp cận & Tương thích",
      commitment1: "Bảng màu OKLCH tương phản tối thiểu 4.5:1 (AA) & 7:1 (AAA)",
      commitment2: "Điều hướng bàn phím 100% không bẫy tiêu điểm (No keyboard traps)",
      commitment3: "Hỗ trợ đầy đủ prefers-reduced-motion & Windows High Contrast",
      processHeading: "Quy Trình Thiết Kế & Thực Thi (Double Diamond Framework)",
      step1Tag: "01 / DISCOVER",
      step1Title: "Thấu cảm & Nghiên cứu",
      step1Desc: "Phỏng vấn người dùng, phân tích hành vi với trợ lý tiếp cận (Screen Readers), và thiết lập ma trận yêu cầu EAA.",
      step2Tag: "02 / DEFINE",
      step2Title: "Kiến trúc Thông tin (IA)",
      step2Desc: "Thiết lập Wireframe phân tầng trên Desktop (1440px) & Mobile (390px), xây dựng Design Token trong không gian màu OKLCH.",
      step3Tag: "03 / DEVELOP",
      step3Title: "Mã hóa Front-end Tối ưu",
      step3Desc: "Triển khai Tailwind CSS, fluid typography clamp(), hoạt ảnh CSS thuần tăng tốc phần cứng (GPU accelerated).",
      step4Tag: "04 / DELIVER",
      step4Title: "Kiểm thử Tiếp cận & Đóng gói",
      step4Desc: "Đánh giá Axe DevTools, Lighthouse 100/100, kiểm thử bàn phím thực tế và phát hành sản phẩm không phụ thuộc thư viện nặng.",
      stackHeading: "Hệ Sinh Thái Kỹ Thuật (Tech Stack & Toolkit)"
    },
    timeline: {
      tag: "Career Path & Milestones",
      heading: "Hành Trình Sự Nghiệp & Học Vấn",
      subtitle: "Theo dõi quá trình tích lũy kinh nghiệm thiết kế, kiến trúc kỹ thuật và các chứng chỉ chuyên môn quốc tế.",
      filterGroupAria: "Bộ lọc dòng thời gian",
      filterAll: "Tất cả (All)",
      filterExperience: "Kinh nghiệm (Work)",
      filterEducation: "Học vấn & Chứng chỉ",
      item1Date: "2023 — Hiện tại (Present)",
      item1Title: "Lead UI/UX & Front-end Architect",
      item1Company: "Aura Global FinTech Lab",
      item1Desc: "Chịu trách nhiệm kiến trúc Design System đa nền tảng cho 12 ứng dụng tài chính ngân hàng. Thiết lập chuẩn tiếp cận WCAG 2.2 Level AA trên toàn bộ mã nguồn front-end.",
      item2Date: "2021 — 2023",
      item2Title: "Senior Interaction Designer & Front-end",
      item2Company: "Nexus Digital Studio",
      item2Desc: "Thiết kế giao diện người dùng tương tác cao, nguyên mẫu vi tương tác (micro-interactions) và tối ưu hóa hiệu năng render Canvas/CSS.",
      item3Date: "2018 — 2022",
      item3Title: "Cử nhân Kỹ thuật Phần mềm",
      item3Company: "Fujen Catholic University, Taiwan",
      item3Desc: "Tốt nghiệp loại Xuất sắc với đồ án nghiên cứu chuyên sâu: <em>\"Kiến trúc giao diện web có thể tiếp cận phổ quát (Universal Web Accessibility Architecture)\"</em>.",
      item4Date: "2023 — 2026",
      item4Title: "Chứng chỉ Chuyên gia Tiếp cận Quốc tế (IAAP CPACC)",
      item4Company: "International Association of Accessibility Professionals",
      item4Desc: "Chứng chỉ chuyên gia đánh giá và thực thi luật tiếp cận kỹ thuật số EAA, tiêu chuẩn WCAG 2.2 Cấp độ AA & AAA cho các hệ thống phần mềm quy mô lớn.",
      cvCardTitle: "Tải Hồ Sơ Năng Lực (Resume PDF)",
      cvCardMeta: "Định dạng PDF • Cập nhật Tháng 11/2026 • Dung lượng: 919 KB • Tuân thủ chuẩn tiếp cận ATS",
      cvCardCta: "Tải Tệp CV Ngay",
      cvCardCtaAria: "Tải xuống tập tin CV của YiSheng định dạng PDF dung lượng 919 KB"
    },
    contact: {
      tag: "Get In Touch",
      heading: "Khởi đầu một dự án mang tính đột phá",
      subtitle: "Bạn đang tìm kiếm một chuyên gia định hình kiến trúc trải nghiệm số, xây dựng hệ thống thiết kế hoặc kiểm thử đạt chuẩn EAA / WCAG 2.2? Hãy gửi lời chào ngay hôm nay.",
      emailLabel: "Email Trực tiếp",
      emailAria: "Gửi email đến contact@yisheng.dev",
      locationLabel: "Khu vực làm việc",
      locationVal: "Taipei City, Taiwan (Remote Worldwide)",
      socialHeading: "Mạng xã hội & Nền tảng chuyên môn",
      socialGithubAria: "Trang GitHub cá nhân của YiSheng (mở trong tab mới)",
      socialLinkedinAria: "Trang LinkedIn của YiSheng (mở trong tab mới)",
      socialFigmaAria: "Cộng đồng Figma của YiSheng (mở trong tab mới)",
      socialDribbbleAria: "Dribbble Showcase của YiSheng (mở trong tab mới)",
      formTitle: "Gửi Tin Nhắn Nhanh",
      formSubtitle: "Mọi thông tin gửi đi đều được bảo mật và phản hồi nhanh chóng.",
      nameLabel: "Họ và tên của bạn",
      namePlaceholder: "Ví dụ: shawnJr",
      emailLabelInput: "Địa chỉ Email",
      emailPlaceholder: "name@company.com",
      messageLabel: "Thông điệp hoặc Nội dung Dự án",
      messagePlaceholder: "Mô tả ngắn gọn về nhu cầu thiết kế hoặc mục tiêu dự án của bạn...",
      submitBtn: "Gửi Đi Lời Nhắn",
      errName: "Vui lòng nhập họ và tên của bạn.",
      errEmail: "Vui lòng nhập định dạng email hợp lệ (ví dụ: name@example.com).",
      errMessage: "Nội dung tin nhắn tối thiểu 10 ký tự để mô tả dự án.",
      toastSuccess: "Cảm ơn bạn! Tin nhắn đã được gửi thành công. YiSheng sẽ phản hồi trong vòng 24 giờ.",
      toastDownload: "Đang tải xuống tệp CV của YiSheng (resume-yisheng.pdf - 919 KB)..."
    },
    footer: {
      copyright: "© 2026 YiSheng. Tất cả các quyền được bảo lưu.",
      a11yNote: "Tuân thủ tiêu chuẩn EAA & WCAG 2.2 Cấp độ AA • OKLCH Color Engine",
      backToTop: "Về đầu trang ↑"
    }
  },

  en: {
    meta: {
      title: "Yi Sheng — Senior UI/UX Specialist & Front-end Architect",
      description: "Immersive personal portfolio of Yi Sheng - Senior UI/UX Specialist & Front-end Architect. Strictly compliant with EAA & WCAG 2.2 Level AA standards."
    },
    a11y: {
      skipToContent: "Skip to main content",
      pageLoadedLive: "Page loaded successfully. Welcome to Yi Sheng's interactive portfolio.",
      modalOpenLive: "Opened project details for: {title}. Press Escape to close.",
      modalCloseLive: "Closed project details dialog.",
      timelineFilterLive: "Displaying {count} timeline items in category {filter}.",
      downloadResumeLive: "Resume PDF download has started.",
      langChangedLive: "Language switched to English.",
      formSuccessLive: "Your contact message has been sent successfully.",
      menuOpenLive: "Mobile navigation menu opened. Press Escape to close.",
      menuCloseLive: "Mobile navigation menu closed.",
      toggleLangAria: "Switch language to Vietnamese (Current: English)"
    },
    cursor: {
      view: "VIEW",
      drag: "DRAG"
    },
    preloader: {
      subtitle: "Yi Sheng • Portfolio",
      ariaLoading: "Data is loading"
    },
    nav: {
      logoRole: "UI/UX & Front-end Architect",
      logoAria: "Yi Sheng - Back to top",
      projects: "Projects",
      about: "About",
      timeline: "Experience",
      contact: "Contact",
      downloadCv: "Download CV (PDF)",
      downloadCvAria: "Download complete resume in PDF format (919 KB)",
      openMenuAria: "Open navigation menu",
      closeMenuAria: "Close navigation menu"
    },
    hero: {
      badge: "Available for new opportunities & Strategic Partnerships 2026",
      titleLine1: "Digital Experience Creation",
      titleLine2: "Approach & Standardization",
      description: "I am <strong class=\"text-content-primary font-semibold\">Yi Sheng</strong>, Senior UI/UX Specialist and Front-end Architect. I elevate large-scale digital products by bridging <em>Design Systems Thinking</em>, international accessibility standards <strong class=\"text-brand-cyan\">EAA & WCAG 2.2 AA</strong>, and high-performance CSS/Tailwind engineering.",
      ctaProjects: "Explore Projects",
      ctaCv: "Download Resume (PDF)",
      ctaCvAria: "Download full professional resume in PDF format",
      metrics: {
        years: "06+",
        yearsLabel: "Years of Deep Experience",
        a11y: "100%",
        a11yLabel: "WCAG 2.2 AA / EAA Compliant",
        users: "40M+",
        usersLabel: "UI User Interactions Served",
        cls: "0.0ms",
        clsLabel: "Cumulative Layout Shift (Zero CLS)"
      }
    },
    showcase: {
      tag: "Selected Works (2024 - 2026)",
      heading: "Featured Project Showcase",
      scrollHint: "Scroll vertically to navigate horizontally",
      viewCaseStudy: "View Case Study &rarr;",
      metrics: {
        devVelocity: "+140% Dev Velocity",
        activeUsers: "300k+ Active Users",
        timeOnPage: "+220% Time On Page",
        realtimeSvg: "Real-time SVG Charts"
      }
    },
    projects: {
      'project-1': {
        title: 'Aura Design System & FinTech NextGen',
        category: 'Design System / Enterprise Web',
        year: '2025 - 2026',
        client: 'Nordic Bank & FinTech Global',
        role: 'Lead Front-end & UI/UX Architect',
        impact: '+140% Dev Delivery Velocity; 100% WCAG 2.2 AAA Compliance',
        summary: 'Architected a cross-platform enterprise design system powered by OKLCH color spaces, fluid typography scales, and highly accessible React/Tailwind UI component libraries.',
        challenge: 'Maintaining dynamic contrast ratios across dark/light modes for real-time financial charts without degrading rendering performance on thousands of streaming telemetry points.',
        solution: 'Leveraged OKLCH Perceptual Uniformity for mathematically balanced luminance. Implemented CSS Subgrid and Container Queries to trim 65% of redundant CSS.',
        stack: ['Tailwind CSS', 'OKLCH Tokens', 'TypeScript', 'Web Components', 'WCAG 2.2 AA'],
        badge: 'Enterprise FinTech',
        cardDesc: 'Modern banking design system powered by OKLCH color space, fluid typography, and WCAG 2.2 AAA accessibility.',
        image: 'image/fintech.png'
      },
      'project-2': {
        title: 'Nova AI Health Companion',
        category: 'Interactive Web App / AI UX',
        year: '2025',
        client: 'LifePulse HealthTech',
        role: 'Senior Product Designer & Creative Developer',
        impact: '98% User Satisfaction Score; 300,000+ Elderly Patients Empowered',
        summary: 'Smart healthcare companion connecting clinicians and patients. Engineered a hyper-accessible tactile & voice interface tailored for low-vision and motor-impaired users.',
        challenge: 'Designing a natural multi-modal voice & visual interaction cadence that eliminates anxiety and clinical complexity for vulnerable senior demographics.',
        solution: 'Built gentle haptic & audio-visual micro-interactions with 56x56px minimum touch targets and flawless screen reader compatibility across NVDA and VoiceOver.',
        stack: ['Accessible Voice UI', 'Tailwind CSS', 'Web Audio API', 'WCAG 2.2 AA'],
        badge: 'AI Healthcare',
        cardDesc: 'Smart healthcare assistant interface optimized for elderly and vision-impaired patients, adhering strictly to EAA requirements.',
        image: 'image/nova.png'
      },
      'project-3': {
        title: 'Verve Spatial E-Commerce Platform',
        category: 'Immersive Web / 3D Experience',
        year: '2024 - 2025',
        client: 'Verve Audio Luxury',
        role: 'Front-end Engineer & Interaction Specialist',
        impact: '+220% Time On Page; Q3 Digital Revenue Increased by 48%',
        summary: 'Ultra-luxury spatial acoustic e-commerce flagship featuring optimized Canvas mesh rendering and fluid parallax depth scrolling.',
        challenge: 'Bringing high-fidelity luxury spatial product interactions to mobile browsers while maintaining sub-1.2s First Contentful Paint over 4G connections.',
        solution: 'Engineered native SVG geometry, adaptive lazy loading, and pure CSS hardware transformations to eliminate bulky 3D engine overhead.',
        stack: ['CSS Transitions', 'Spatial Audio API', 'Responsive Fluid Layout', 'EAA Compliant'],
        badge: 'Luxury Audio',
        cardDesc: 'Luxury audio e-commerce flagship with parallax depth scrolling and silky smooth 120 FPS CSS animations.',
        image: 'image/verve.png'
      },
      'project-4': {
        title: 'EcoTrack Sustainability Dashboard',
        category: 'Data Visualization / SaaS',
        year: '2024',
        client: 'ClimateWorks Initiative',
        role: 'UI/UX Consultant & Front-end Developer',
        impact: '450+ Metric Tons of CO2 Mitigated via Automated ESG Auditing',
        summary: 'Enterprise carbon footprint and renewable energy telemetry dashboard with high-density real-time interactive SVG charts.',
        challenge: 'Translating millions of complex sensor telemetry data points into crystal-clear, executive-actionable decision matrices for non-technical leadership.',
        solution: 'Applied Pyramid Principle information architecture, tasteful micro-interactions, and high-contrast OKLCH visualization palettes.',
        stack: ['Tailwind CSS', 'SVG Charts', 'Fluid Architecture', 'WCAG 2.2 AA'],
        badge: 'ESG SaaS',
        cardDesc: 'Enterprise carbon emission and renewable energy dashboard featuring pyramid information architecture for executive teams.',
        image: 'image/dash.png'
      }
    },
    modal: {
      clientLabel: "Client / Organization:",
      roleLabel: "Role Performed:",
      impactLabel: "Measurable Impact:",
      sec1Heading: "1. Overview & Objectives",
      sec2Heading: "2. UX & Research Challenges",
      sec3Heading: "3. Technical & Front-end Architecture Solution",
      sec4Heading: "4. Technologies & Compliance Standards",
      closeAria: "Close project details dialog (Escape key)"
    },
    about: {
      tag: "Design Philosophy",
      heading: "Where Emotional Aesthetics Converge with Technical Rigor",
      p1: "I believe exceptional web experiences transcend superficial visuals—they stem from <strong>Universal Accessibility</strong> and instant page load velocity.",
      p2: "When architecting user interfaces, I treat <strong>EAA (European Accessibility Act)</strong> and <strong>WCAG 2.2 AA</strong> guidelines as non-negotiable foundations from the very first sketch, never as an afterthought checklist.",
      commitmentTitle: "Accessibility & Compatibility Commitment",
      commitment1: "OKLCH color palettes with 4.5:1 (AA) & 7:1 (AAA) minimum contrast",
      commitment2: "100% keyboard navigable with zero keyboard focus traps",
      commitment3: "Full prefers-reduced-motion & Windows High Contrast compatibility",
      processHeading: "Design & Execution Methodology (Double Diamond Framework)",
      step1Tag: "01 / DISCOVER",
      step1Title: "Empathy & Research",
      step1Desc: "Conducting user interviews, analyzing screen reader interactions, and establishing EAA accessibility compliance matrices.",
      step2Tag: "02 / DEFINE",
      step2Title: "Information Architecture (IA)",
      step2Desc: "Crafting tiered wireframes for Desktop (1440px) & Mobile (390px), configuring Design Tokens in OKLCH color space.",
      step3Tag: "03 / DEVELOP",
      step3Title: "Optimal Front-end Engineering",
      step3Desc: "Implementing Tailwind CSS utilities, fluid typography clamp(), and GPU-accelerated pure CSS animations.",
      step4Tag: "04 / DELIVER",
      step4Title: "Accessibility Audits & Packaging",
      step4Desc: "Verifying with Axe DevTools, achieving 100/100 Lighthouse audits, rigorous keyboard testing, and zero-bloat deployment.",
      stackHeading: "Core Engineering Ecosystem (Tech Stack & Toolkit)"
    },
    timeline: {
      tag: "Career Path & Milestones",
      heading: "Professional Journey & Education",
      subtitle: "Tracing professional design leadership, technical architecture accomplishments, and international certifications.",
      filterGroupAria: "Timeline Category Filter",
      filterAll: "All Milestones",
      filterExperience: "Work Experience",
      filterEducation: "Education & Certs",
      item1Date: "2023 — Present",
      item1Title: "Lead UI/UX & Front-end Architect",
      item1Company: "Aura Global FinTech Lab",
      item1Desc: "Spearheaded cross-platform Design System architecture for 12 enterprise banking applications. Enforced WCAG 2.2 Level AA accessibility standards across all front-end codebases.",
      item2Date: "2021 — 2023",
      item2Title: "Senior Interaction Designer & Front-end",
      item2Company: "Nexus Digital Studio",
      item2Desc: "Crafted high-interaction digital products, interactive micro-interaction prototypes, and optimized Canvas/CSS rendering pipelines.",
      item3Date: "2018 — 2022",
      item3Title: "Bachelor of Software Engineering",
      item3Company: "Polytechnic University / Computer Science",
      item3Desc: "Graduated with High Honors with thesis research: <em>\"Universal Web Accessibility Architecture in Enterprise Web Ecosystems\"</em>.",
      item4Date: "2023 — 2026",
      item4Title: "Certified Professional in Accessibility Core Competencies (IAAP CPACC)",
      item4Company: "International Association of Accessibility Professionals",
      item4Desc: "Global accessibility credential covering digital accessibility laws, European Accessibility Act (EAA), and WCAG 2.2 AA & AAA implementation.",
      cvCardTitle: "Download Professional Resume (PDF)",
      cvCardMeta: "PDF Format • Updated Nov 2026 • File Size: 919 KB • ATS-Optimized",
      cvCardCta: "Download Resume Now",
      cvCardCtaAria: "Download  YiSheng's resume in PDF format (919 KB)"
    },
    contact: {
      tag: "Get In Touch",
      heading: "Let's Build Something Extraordinary",
      subtitle: "Looking for an architect to shape immersive digital experiences, build scalable design systems, or conduct EAA / WCAG 2.2 audits? Say hello today.",
      emailLabel: "Direct Email",
      emailAria: "Send email to contact@yisheng.dev",
      locationLabel: "Location Base",
      locationVal: "Taipei City, Taiwan (Available Worldwide Remote)",
      socialHeading: "Social Channels & Professional Networks",
      socialGithubAria: "Yi Sheng's GitHub profile (opens in new tab)",
      socialLinkedinAria: "Yi Sheng's LinkedIn profile (opens in new tab)",
      socialFigmaAria: "Yi Sheng's Figma community profile (opens in new tab)",
      socialDribbbleAria: "Yi Sheng's Dribbble portfolio (opens in new tab)",
      formTitle: "Quick Message Form",
      formSubtitle: "All inquiries are kept confidential and replied to promptly within 24 hours.",
      nameLabel: "Your Full Name",
      namePlaceholder: "e.g. Yi Sheng",
      emailLabelInput: "Email Address",
      emailPlaceholder: "name@company.com",
      messageLabel: "Project Brief or Inquiry",
      messagePlaceholder: "Briefly describe your design system needs or project goals...",
      submitBtn: "Send Message Now",
      errName: "Please enter your full name.",
      errEmail: "Please enter a valid email address (e.g. name@example.com).",
      errMessage: "Message must contain at least 10 characters to describe your project.",
      toastSuccess: "Thank you! Your message has been sent successfully. Yi Sheng will get back to you within 24 hours.",
      toastDownload: "Downloading Yi Sheng's resume (resume-yi-sheng.pdf - 919 KB)..."
    },
    footer: {
      copyright: "© 2026 Yi Sheng. All rights reserved.",
      a11yNote: "Compliant with EAA & WCAG 2.2 Level AA standards • OKLCH Color Engine",
      backToTop: "Back to top ↑"
    }
  }
};

/**
 * i18n Core State Management
 */
class I18nManager {
  constructor() {
    this.storageKey = 'portfolio_preferred_lang';
    this.currentLang = this.getSavedLang() || 'vi';
    this.listeners = [];
  }

  getSavedLang() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved === 'vi' || saved === 'en') return saved;
    } catch (e) {
      console.warn('localStorage not accessible for i18n:', e);
    }
    return null;
  }

  setLang(lang) {
    if (lang !== 'vi' && lang !== 'en') return;
    this.currentLang = lang;
    try {
      localStorage.setItem(this.storageKey, lang);
    } catch (e) {
      console.warn('localStorage not accessible for i18n:', e);
    }
    this.applyTranslations();
    this.notifyListeners(lang);
  }

  toggleLang() {
    const nextLang = this.currentLang === 'vi' ? 'en' : 'vi';
    this.setLang(nextLang);
    return nextLang;
  }

  get(keyPath, lang = this.currentLang) {
    const dict = I18N_TRANSLATIONS[lang] || I18N_TRANSLATIONS['vi'];
    const parts = keyPath.split('.');
    let cur = dict;
    for (const p of parts) {
      if (cur && cur[p] !== undefined) {
        cur = cur[p];
      } else {
        return keyPath; // Fallback to key name
      }
    }
    return cur;
  }

  onLangChange(callback) {
    this.listeners.push(callback);
  }

  notifyListeners(lang) {
    this.listeners.forEach(fn => fn(lang));
  }

  applyTranslations() {
    const lang = this.currentLang;
    const t = I18N_TRANSLATIONS[lang];

    // 1. Cập nhật thẻ <html lang="...">
    document.documentElement.lang = lang;

    // 2. Cập nhật <title> và meta description
    if (t.meta) {
      document.title = t.meta.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', t.meta.description);
    }

    // 3. Cập nhật các phần tử HTML có thuộc tính data-i18n
    const textElements = document.querySelectorAll('[data-i18n]');
    textElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = this.get(key, lang);
      if (val !== undefined && typeof val === 'string') {
        el.innerHTML = val;
      }
    });

    // 4. Cập nhật các thuộc tính như placeholder, aria-label qua data-i18n-attr
    const attrElements = document.querySelectorAll('[data-i18n-attr]');
    attrElements.forEach(el => {
      // Format: "placeholder:contact.namePlaceholder|aria-label:nav.logoAria"
      const mapping = el.getAttribute('data-i18n-attr').split('|');
      mapping.forEach(pair => {
        const [attr, key] = pair.split(':');
        if (attr && key) {
          const val = this.get(key, lang);
          if (val) el.setAttribute(attr, val);
        }
      });
    });

    // 5. Cập nhật trạng thái hiển thị của nút đổi ngôn ngữ
    this.updateToggleButtons();

    // 6. Thông báo cho trình đọc màn hình
    const liveRegion = document.getElementById('a11y-live-region');
    if (liveRegion && t.a11y) {
      liveRegion.textContent = t.a11y.langChangedLive;
    }
  }

  updateToggleButtons() {
    const langToggles = document.querySelectorAll('.lang-toggle-btn');
    langToggles.forEach(btn => {
      const isVi = this.currentLang === 'vi';
      const viSpan = btn.querySelector('.lang-label-vi');
      const enSpan = btn.querySelector('.lang-label-en');
      const pill = btn.querySelector('.lang-toggle-pill');

      if (viSpan && enSpan) {
        if (isVi) {
          viSpan.classList.add('text-content-inverse', 'font-bold');
          viSpan.classList.remove('text-content-muted');
          enSpan.classList.remove('text-content-inverse', 'font-bold');
          enSpan.classList.add('text-content-muted');
        } else {
          enSpan.classList.add('text-content-inverse', 'font-bold');
          enSpan.classList.remove('text-content-muted');
          viSpan.classList.remove('text-content-inverse', 'font-bold');
          viSpan.classList.add('text-content-muted');
        }
      }

      if (pill) {
        if (isVi) {
          pill.style.transform = 'translateX(0%)';
        } else {
          pill.style.transform = 'translateX(100%)';
        }
      }

      const ariaLabel = this.get('a11y.toggleLangAria', this.currentLang);
      btn.setAttribute('aria-label', ariaLabel);
    });
  }
}

// Khởi tạo thực thể i18n toàn cục
window.I18N_TRANSLATIONS = I18N_TRANSLATIONS;
window.i18n = new I18nManager();

