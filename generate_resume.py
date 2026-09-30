import os
import re
import pypdf
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import parse_xml

def generate_pdf(filename="Abhishek_M_R_Resume.pdf"):
    # Letter size: 612 x 792 pt
    # Target 1-page fit: 22pt margins (0.3 in), tight leading and padding
    margin = 22
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=margin,
        rightMargin=margin,
        topMargin=20,
        bottomMargin=20,
    )

    PRIMARY = colors.HexColor("#0D1424")
    TEXT_DARK = colors.HexColor("#1A202C")
    TEXT_MUTED = colors.HexColor("#4A5568")
    ACCENT = colors.HexColor("#102A6B")
    LINE_COLOR = colors.HexColor("#CBD5E0")

    name_style = ParagraphStyle(
        "NameStyle",
        fontName="Helvetica-Bold",
        fontSize=14.5,
        leading=16.5,
        alignment=1, # Center
        textColor=PRIMARY,
        spaceAfter=1.5,
    )

    contact_style = ParagraphStyle(
        "ContactStyle",
        fontName="Helvetica",
        fontSize=8.3,
        leading=10.5,
        alignment=1, # Center
        textColor=TEXT_DARK,
        spaceAfter=1,
    )

    links_style = ParagraphStyle(
        "LinksStyle",
        fontName="Helvetica",
        fontSize=8.3,
        leading=10.5,
        alignment=1, # Center
        textColor=ACCENT,
        spaceAfter=3,
    )

    section_heading_style = ParagraphStyle(
        "SectionHeading",
        fontName="Helvetica-Bold",
        fontSize=9.0,
        leading=10.8,
        textColor=PRIMARY,
        spaceBefore=3,
        spaceAfter=1.5,
        textTransform="uppercase",
    )

    body_style = ParagraphStyle(
        "BodyTextCustom",
        fontName="Helvetica",
        fontSize=8.0,
        leading=10.0,
        textColor=TEXT_DARK,
        spaceAfter=1,
    )

    item_title_style = ParagraphStyle(
        "ItemTitle",
        fontName="Helvetica-Bold",
        fontSize=8.2,
        leading=10.0,
        textColor=PRIMARY,
    )

    item_sub_style = ParagraphStyle(
        "ItemSub",
        fontName="Helvetica-Oblique",
        fontSize=7.8,
        leading=9.5,
        textColor=TEXT_MUTED,
    )

    item_date_style = ParagraphStyle(
        "ItemDate",
        fontName="Helvetica",
        fontSize=7.8,
        leading=9.5,
        alignment=2, # Right
        textColor=TEXT_MUTED,
    )

    bullet_style = ParagraphStyle(
        "BulletText",
        fontName="Helvetica",
        fontSize=7.8,
        leading=9.6,
        textColor=TEXT_DARK,
        leftIndent=9,
        firstLineIndent=-6,
        spaceAfter=1.0,
    )

    skills_label_style = ParagraphStyle(
        "SkillsLabel",
        fontName="Helvetica-Bold",
        fontSize=7.8,
        leading=9.6,
        textColor=PRIMARY,
    )

    skills_val_style = ParagraphStyle(
        "SkillsVal",
        fontName="Helvetica",
        fontSize=7.8,
        leading=9.6,
        textColor=TEXT_DARK,
    )

    story = []

    # 1. HEADER
    story.append(Paragraph("ABHISHEK M R", name_style))
    story.append(Paragraph(
        "Bengaluru, India &nbsp;|&nbsp; +91 7259371549 &nbsp;|&nbsp; <a href='mailto:mrabhisheak@gmail.com' color='#102A6B'>mrabhisheak@gmail.com</a>",
        contact_style
    ))
    story.append(Paragraph(
        "<a href='https://abhishekmr.vercel.app/' color='#102A6B'>Portfolio: abhishekmr.vercel.app</a> &nbsp;|&nbsp; "
        "<a href='https://github.com/abhi-byte62' color='#102A6B'>GitHub: github.com/abhi-byte62</a> &nbsp;|&nbsp; "
        "<a href='https://www.linkedin.com/in/abhishekmr029/' color='#102A6B'>LinkedIn: in/abhishekmr029</a> &nbsp;|&nbsp; "
        "<a href='https://leetcode.com/u/playboldAbhi/' color='#102A6B'>LeetCode: u/playboldAbhi</a>",
        links_style
    ))
    story.append(HRFlowable(width="100%", thickness=0.7, color=LINE_COLOR, spaceBefore=1.5, spaceAfter=2.5))

    # 2. PROFESSIONAL SUMMARY
    story.append(Paragraph("PROFESSIONAL SUMMARY", section_heading_style))
    story.append(Paragraph(
        "Software Engineer with a strong Computer Science foundation specializing in backend architectures, distributed systems, and low-latency C++/Java applications. Experienced in developing deterministic limit order book matching engines, event-driven microservices with RabbitMQ, stream backpressure pipelines, and optimistic concurrency control systems. Proficient in Data Structures, Algorithms, System Design, and building verified, high-throughput software.",
        body_style
    ))
    story.append(HRFlowable(width="100%", thickness=0.4, color=LINE_COLOR, spaceBefore=2.5, spaceAfter=2.5))

    # 3. TECHNICAL SKILLS
    story.append(Paragraph("TECHNICAL SKILLS", section_heading_style))
    skills_data = [
        [
            Paragraph("<b>Languages:</b>", skills_label_style),
            Paragraph("C++17, Java 21, JavaScript (ES6+), TypeScript, Python 3, C, SQL", skills_val_style),
        ],
        [
            Paragraph("<b>Backend & Distributed:</b>", skills_label_style),
            Paragraph("Spring Boot 3, Node.js, Express, FastAPI, RabbitMQ, WebSockets, RESTful APIs", skills_val_style),
        ],
        [
            Paragraph("<b>Databases & Caching:</b>", skills_label_style),
            Paragraph("PostgreSQL 16/17, MySQL, Redis 7 (Pub/Sub & Caching), Prisma ORM", skills_val_style),
        ],
        [
            Paragraph("<b>Systems & Architecture:</b>", skills_label_style),
            Paragraph("Limit Order Books (LOB), Fixed-Point Math, Stream Backpressure, Concurrency, Zero-Copy Buffers, WebGL", skills_val_style),
        ],
        [
            Paragraph("<b>Infrastructure & Tools:</b>", skills_label_style),
            Paragraph("Docker & Compose, Git, GitHub Actions, Linux / POSIX Shell, Postman, Vitest", skills_val_style),
        ],
        [
            Paragraph("<b>Core CS Foundations:</b>", skills_label_style),
            Paragraph("Data Structures & Algorithms, OOP, OS (Memory, I/O), DBMS, Computer Networks, System Design, OCC", skills_val_style),
        ],
    ]
    t_skills = Table(skills_data, colWidths=[105, 463])
    t_skills.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('TOPPADDING', (0,0), (-1,-1), 0.3),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.3),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_skills)
    story.append(HRFlowable(width="100%", thickness=0.4, color=LINE_COLOR, spaceBefore=2.5, spaceAfter=2.5))

    # 4. SELECTED PROJECTS
    story.append(Paragraph("SELECTED ENGINEERING PROJECTS", section_heading_style))

    def add_project(title, tech, links, bullets):
        header_table_data = [
            [
                Paragraph(f"<b>{title}</b> | <i>{tech}</i>", item_title_style),
                Paragraph(links, item_date_style),
            ]
        ]
        ht = Table(header_table_data, colWidths=[436, 132])
        ht.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
            ('TOPPADDING', (0,0), (-1,-1), 0),
            ('BOTTOMPADDING', (0,0), (-1,-1), 0.8),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ]))
        story.append(ht)
        for b in bullets:
            story.append(Paragraph(f"• {b}", bullet_style))
        story.append(Spacer(1, 1.5))

    # Project 1: StackLens
    add_project(
        "StackLens — Website Architecture Inference & Intelligence Engine",
        "Java 21, Spring Boot 3, RabbitMQ, PostgreSQL, Redis, React 19, TypeScript",
        "<a href='https://github.com/abhi-byte62/stackl' color='#102A6B'>[GitHub]</a> &nbsp; <a href='https://abhishekmr.vercel.app/stacklens' color='#102A6B'>[Demo]</a>",
        [
            "Architected an asynchronous multi-vector probe engine reverse-engineering public web applications across 200+ weighted signatures.",
            "Implemented SSRF and DNS-rebinding perimeter defense by validating resolved target IPs against private RFC 1918 subnets prior to worker dispatch.",
            "Decoupled long-running external HTTP/TLS crawlers from client APIs using RabbitMQ message queues and Redis caching tiers.",
            "Synthesized PostgreSQL DDL schemas and REST/GraphQL API contracts from detected access patterns with interactive DAG topology generation.",
        ]
    )

    # Project 2: LiquidityLens
    add_project(
        "LiquidityLens — Market Microstructure Simulator & Matching Engine",
        "C++17, Python 3.10, FastAPI, Fixed-Point Math, Hawkes Processes, WebSockets",
        "<a href='https://github.com/abhi-byte62/liqudity' color='#102A6B'>[GitHub]</a> &nbsp; <a href='https://abhishekmr.vercel.app/liquiditylens' color='#102A6B'>[Demo]</a>",
        [
            "Developed a deterministic C++17 limit order book (LOB) matching engine supporting 4.5M+ events/s with ~220ns match latency.",
            "Utilized int64_t fixed-point arithmetic across matching and accounting pipelines, eliminating IEEE-754 floating-point drift.",
            "Simulated clustered order arrival dynamics with synthetic Hawkes processes and modeled FIFO queue priority across 10µs–500µs latency slips.",
            "Calculated zero look-ahead adverse selection markout curves at 10ms, 100ms, and 1s post-trade horizons; streamed L2 depth via WebSockets.",
        ]
    )

    # Project 3: TaskFlow
    add_project(
        "TaskFlow — Real-Time Collaborative Kanban & Distributed State Engine",
        "React 18, Node.js, PostgreSQL 17, Prisma ORM, Socket.io, TanStack Query",
        "<a href='https://github.com/abhi-byte62/taskflow' color='#102A6B'>[GitHub]</a> &nbsp; <a href='https://abhishekmr.vercel.app/taskflow' color='#102A6B'>[Demo]</a>",
        [
            "Engineered a real-time collaborative workspace with Optimistic Concurrency Control (OCC) using integer revision tags to reject stale writes.",
            "Implemented fractional midpoint indexing for O(1) card drag reordering, preventing expensive cascading updates across database rows.",
            "Integrated room-scoped Socket.io state synchronization with role-based access control (RBAC) enforced in atomic Prisma transactions.",
        ]
    )

    # Project 4: Specter Proxy
    add_project(
        "Specter Proxy — Stream Backpressure & Ephemeral TLS Interception Proxy",
        "Node.js Streams, HTTP/HTTPS, TLS Termination, Dynamic SNI, Backpressure",
        "<a href='https://github.com/abhi-byte62/specter-proxy' color='#102A6B'>[GitHub]</a> &nbsp; <a href='https://abhishekmr.vercel.app/specter-proxy' color='#102A6B'>[Demo]</a>",
        [
            "Built a stream-oriented forward proxy for real-time packet inspection, latency injection, and synthetic network resilience testing.",
            "Enforced strict highWaterMark stream backpressure flow control to prevent heap bloat, maintaining a bounded ~35MB memory footprint.",
            "Implemented dynamic on-the-fly X.509 SNI certificate generation signed by an ephemeral local CA for seamless TLS MITM inspection.",
        ]
    )

    story.append(HRFlowable(width="100%", thickness=0.4, color=LINE_COLOR, spaceBefore=2.0, spaceAfter=2.5))

    # 5. EDUCATION
    story.append(Paragraph("EDUCATION", section_heading_style))
    edu_table_data = [
        [
            Paragraph("<b>Presidency University</b> — Bengaluru, India", item_title_style),
            Paragraph("Sept 2023 – Present", item_date_style),
        ],
        [
            Paragraph("<i>Bachelor of Technology (B.Tech) in Computer Science & Engineering</i>", item_sub_style),
            Paragraph("Expected 2027", item_date_style),
        ]
    ]
    et = Table(edu_table_data, colWidths=[436, 132])
    et.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.3),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(et)
    story.append(Paragraph(
        "<b>Relevant Coursework:</b> Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Database Management Systems (DBMS), Computer Networks, System Design, Software Engineering.",
        ParagraphStyle("EduCourse", fontName="Helvetica", fontSize=7.6, leading=9.4, textColor=TEXT_DARK, spaceBefore=1)
    ))

    story.append(HRFlowable(width="100%", thickness=0.4, color=LINE_COLOR, spaceBefore=2.5, spaceAfter=2.5))

    # 6. PROBLEM SOLVING & CERTIFICATIONS
    story.append(Paragraph("PROBLEM SOLVING & CERTIFICATIONS", section_heading_style))
    
    cert_text = (
        "• <b>Competitive Programming:</b> Active problem solver on <b>LeetCode</b> (<a href='https://leetcode.com/u/playboldAbhi/' color='#102A6B'>u/playboldAbhi</a>) and <b>Codeforces</b> (<a href='https://codeforces.com/profile/playboldAbhi' color='#102A6B'>playboldAbhi</a>), focusing on Graph Algorithms, Dynamic Programming, and Amortized Complexity.<br/>"
        "• <b>HackerRank Certifications:</b> SQL (Advanced), Rest API (Intermediate), Problem Solving (Intermediate), Java (Basic)."
    )
    story.append(Paragraph(cert_text, bullet_style))

    # Build PDF
    doc.build(story)
    print(f"Generated {filename}")

def generate_docx(filename="Abhishek_M_R_Resume.docx"):
    doc = docx.Document()
    
    # 0.35 in margins
    for section in doc.sections:
        section.top_margin = Inches(0.32)
        section.bottom_margin = Inches(0.32)
        section.left_margin = Inches(0.38)
        section.right_margin = Inches(0.38)
        section.page_width = Inches(8.5)
        section.page_height = Inches(11.0)

    normal_style = doc.styles['Normal']
    normal_style.font.name = 'Calibri'
    normal_style.font.size = Pt(9.0)
    normal_style.font.color.rgb = RGBColor(0x1A, 0x20, 0x2C)

    def add_heading(text):
        p = doc.add_paragraph()
        p.paragraph_format.space_before = Pt(3.5)
        p.paragraph_format.space_after = Pt(1.5)
        p.paragraph_format.line_spacing = 1.0
        run = p.add_run(text.upper())
        run.bold = True
        run.font.name = 'Calibri'
        run.font.size = Pt(10.0)
        run.font.color.rgb = RGBColor(0x0D, 0x14, 0x24)
        
        pPr = p._p.get_or_add_pPr()
        pBdr = parse_xml(r'<w:pBdr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">'
                         r'<w:bottom w:val="single" w:sz="4" w:space="1" w:color="CBD5E0"/>'
                         r'</w:pBdr>')
        pPr.append(pBdr)
        return p

    # Header
    hp = doc.add_paragraph()
    hp.alignment = WD_ALIGN_PARAGRAPH.CENTER
    hp.paragraph_format.space_before = Pt(0)
    hp.paragraph_format.space_after = Pt(1.5)
    name_run = hp.add_run("ABHISHEK M R\n")
    name_run.bold = True
    name_run.font.size = Pt(15.0)
    name_run.font.color.rgb = RGBColor(0x0D, 0x14, 0x24)
    
    c_run = hp.add_run("Bengaluru, India | +91 7259371549 | mrabhisheak@gmail.com\n")
    c_run.font.size = Pt(8.8)
    
    l_run = hp.add_run("Portfolio: abhishekmr.vercel.app | GitHub: github.com/abhi-byte62 | LinkedIn: in/abhishekmr029 | LeetCode: u/playboldAbhi")
    l_run.font.size = Pt(8.8)
    l_run.font.color.rgb = RGBColor(0x10, 0x2A, 0x6B)

    # Summary
    add_heading("Professional Summary")
    sp = doc.add_paragraph()
    sp.paragraph_format.space_before = Pt(1.5)
    sp.paragraph_format.space_after = Pt(3.0)
    sp.paragraph_format.line_spacing = 1.05
    sp_run = sp.add_run(
        "Software Engineer with a strong Computer Science foundation specializing in backend architectures, distributed systems, and low-latency C++/Java applications. Experienced in developing deterministic limit order book matching engines, event-driven microservices with RabbitMQ, stream backpressure pipelines, and optimistic concurrency control systems. Proficient in Data Structures, Algorithms, System Design, and building verified, high-throughput software."
    )
    sp_run.font.size = Pt(8.8)

    # Technical Skills
    add_heading("Technical Skills")
    skills = [
        ("Languages", "C++17, Java 21, JavaScript (ES6+), TypeScript, Python 3, C, SQL"),
        ("Backend & Distributed", "Spring Boot 3, Node.js, Express, FastAPI, RabbitMQ, WebSockets, RESTful APIs"),
        ("Databases & Caching", "PostgreSQL 16/17, MySQL, Redis 7 (Pub/Sub & Caching), Prisma ORM"),
        ("Systems & Architecture", "Limit Order Books (LOB), Fixed-Point Math, Stream Backpressure, Concurrency, Zero-Copy Buffers, WebGL"),
        ("Infrastructure & Tools", "Docker & Compose, Git, GitHub Actions, Linux / POSIX Shell, Postman, Vitest"),
        ("Core CS Foundations", "Data Structures & Algorithms, OOP, OS (Memory, I/O), DBMS, Computer Networks, System Design, OCC"),
    ]
    for cat, val in skills:
        sk_p = doc.add_paragraph()
        sk_p.paragraph_format.space_before = Pt(0)
        sk_p.paragraph_format.space_after = Pt(1.0)
        sk_p.paragraph_format.line_spacing = 1.0
        r_cat = sk_p.add_run(f"• {cat}: ")
        r_cat.bold = True
        r_cat.font.size = Pt(8.5)
        r_val = sk_p.add_run(val)
        r_val.font.size = Pt(8.5)

    # Projects
    add_heading("Selected Engineering Projects")
    projects = [
        (
            "StackLens — Website Architecture Inference & Intelligence Engine",
            "Java 21, Spring Boot 3, RabbitMQ, PostgreSQL, Redis, React 19, TypeScript",
            "[GitHub: abhi-byte62/stackl]  [Demo: abhishekmr.vercel.app/stacklens]",
            [
                "Architected an asynchronous multi-vector probe engine reverse-engineering public web applications across 200+ weighted signatures.",
                "Implemented SSRF and DNS-rebinding perimeter defense by validating resolved target IPs against private RFC 1918 subnets prior to worker dispatch.",
                "Decoupled long-running external HTTP/TLS crawlers from client APIs using RabbitMQ message queues and Redis caching tiers.",
                "Synthesized PostgreSQL DDL schemas and REST/GraphQL API contracts from detected access patterns with interactive DAG topology generation.",
            ]
        ),
        (
            "LiquidityLens — Market Microstructure Simulator & Matching Engine",
            "C++17, Python 3.10, FastAPI, Fixed-Point Math, Hawkes Processes, WebSockets",
            "[GitHub: abhi-byte62/liqudity]  [Demo: abhishekmr.vercel.app/liquiditylens]",
            [
                "Developed a deterministic C++17 limit order book (LOB) matching engine supporting 4.5M+ events/s with ~220ns match latency.",
                "Utilized int64_t fixed-point arithmetic across matching and accounting pipelines, eliminating IEEE-754 floating-point drift.",
                "Simulated clustered order arrival dynamics with synthetic Hawkes processes and modeled FIFO queue priority across 10µs–500µs latency slips.",
                "Calculated zero look-ahead adverse selection markout curves at 10ms, 100ms, and 1s post-trade horizons; streamed L2 depth via WebSockets.",
            ]
        ),
        (
            "TaskFlow — Real-Time Collaborative Kanban & Distributed State Engine",
            "React 18, Node.js, PostgreSQL 17, Prisma ORM, Socket.io, TanStack Query",
            "[GitHub: abhi-byte62/taskflow]  [Demo: abhishekmr.vercel.app/taskflow]",
            [
                "Engineered a real-time collaborative workspace with Optimistic Concurrency Control (OCC) using integer revision tags to reject stale writes.",
                "Implemented fractional midpoint indexing for O(1) card drag reordering, preventing expensive cascading updates across database rows.",
                "Integrated room-scoped Socket.io state synchronization with role-based access control (RBAC) enforced in atomic Prisma transactions.",
            ]
        ),
        (
            "Specter Proxy — Stream Backpressure & Ephemeral TLS Interception Proxy",
            "Node.js Streams, HTTP/HTTPS, TLS Termination, Dynamic SNI, Backpressure",
            "[GitHub: abhi-byte62/specter-proxy]  [Demo: abhishekmr.vercel.app/specter-proxy]",
            [
                "Built a stream-oriented forward proxy for real-time packet inspection, latency injection, and synthetic network resilience testing.",
                "Enforced strict highWaterMark stream backpressure flow control to prevent heap bloat, maintaining a bounded ~35MB memory footprint.",
                "Implemented dynamic on-the-fly X.509 SNI certificate generation signed by an ephemeral local CA for seamless TLS MITM inspection.",
            ]
        ),
    ]

    for p_title, p_tech, p_links, p_bullets in projects:
        pp = doc.add_paragraph()
        pp.paragraph_format.space_before = Pt(2.5)
        pp.paragraph_format.space_after = Pt(0.8)
        pp.paragraph_format.line_spacing = 1.0
        r_title = pp.add_run(p_title)
        r_title.bold = True
        r_title.font.size = Pt(8.8)
        
        r_tech = pp.add_run(f" | {p_tech}\n")
        r_tech.italic = True
        r_tech.font.size = Pt(8.2)
        
        r_links = pp.add_run(p_links)
        r_links.font.size = Pt(7.8)
        r_links.font.color.rgb = RGBColor(0x10, 0x2A, 0x6B)

        for b in p_bullets:
            bp = doc.add_paragraph()
            bp.paragraph_format.space_before = Pt(0)
            bp.paragraph_format.space_after = Pt(0.8)
            bp.paragraph_format.line_spacing = 1.0
            bp.paragraph_format.left_indent = Inches(0.18)
            r_b = bp.add_run(f"• {b}")
            r_b.font.size = Pt(8.2)

    # Education
    add_heading("Education")
    ep = doc.add_paragraph()
    ep.paragraph_format.space_before = Pt(1.5)
    ep.paragraph_format.space_after = Pt(0.8)
    r_uni = ep.add_run("Presidency University — Bengaluru, India")
    r_uni.bold = True
    r_uni.font.size = Pt(8.8)
    
    r_dates = ep.add_run("  [Sept 2023 – Present | Expected 2027]\n")
    r_dates.font.size = Pt(8.2)
    r_dates.italic = True
    
    r_deg = ep.add_run("Bachelor of Technology (B.Tech) in Computer Science & Engineering\n")
    r_deg.font.size = Pt(8.5)
    
    r_course = ep.add_run("Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Database Management Systems (DBMS), Computer Networks, System Design, Software Engineering.")
    r_course.font.size = Pt(8.0)

    # Problem Solving & Certifications
    add_heading("Problem Solving & Certifications")
    cp1 = doc.add_paragraph()
    cp1.paragraph_format.space_before = Pt(1.5)
    cp1.paragraph_format.space_after = Pt(0.8)
    cp1.paragraph_format.left_indent = Inches(0.18)
    r_cp1 = cp1.add_run("• Competitive Programming: Active problem solver on LeetCode (u/playboldAbhi) and Codeforces (playboldAbhi), focusing on Graph Algorithms, Dynamic Programming, and Amortized Complexity.")
    r_cp1.font.size = Pt(8.2)

    cp2 = doc.add_paragraph()
    cp2.paragraph_format.space_before = Pt(0)
    cp2.paragraph_format.space_after = Pt(1.5)
    cp2.paragraph_format.left_indent = Inches(0.18)
    r_cp2 = cp2.add_run("• HackerRank Certifications: SQL (Advanced), Rest API (Intermediate), Problem Solving (Intermediate), Java (Basic).")
    r_cp2.font.size = Pt(8.2)

    doc.save(filename)
    print(f"Generated {filename}")

def generate_txt(filename="Abhishek_M_R_Resume.txt"):
    text = """ABHISHEK M R
Bengaluru, India | +91 7259371549 | mrabhisheak@gmail.com
Portfolio: https://abhishekmr.vercel.app/
GitHub: https://github.com/abhi-byte62
LinkedIn: https://www.linkedin.com/in/abhishekmr029/
LeetCode: https://leetcode.com/u/playboldAbhi/

================================================================================
PROFESSIONAL SUMMARY
================================================================================
Software Engineer with a strong Computer Science foundation specializing in backend architectures, distributed systems, and low-latency C++/Java applications. Experienced in developing deterministic limit order book matching engines, event-driven microservices with RabbitMQ, stream backpressure pipelines, and optimistic concurrency control systems. Proficient in Data Structures, Algorithms, System Design, and building verified, high-throughput software.

================================================================================
TECHNICAL SKILLS
================================================================================
• Languages: C++17, Java 21, JavaScript (ES6+), TypeScript, Python 3, C, SQL
• Backend & Distributed: Spring Boot 3, Node.js, Express, FastAPI, RabbitMQ, WebSockets, RESTful APIs
• Databases & Caching: PostgreSQL 16/17, MySQL, Redis 7 (Pub/Sub & Caching), Prisma ORM
• Systems & Architecture: Limit Order Books (LOB), Fixed-Point Math, Stream Backpressure, Concurrency, Zero-Copy Buffers, WebGL
• Infrastructure & Tools: Docker & Compose, Git, GitHub Actions, Linux / POSIX Shell, Postman, Vitest
• Core CS Foundations: Data Structures & Algorithms, OOP, OS (Memory, I/O), DBMS, Computer Networks, System Design, OCC

================================================================================
SELECTED ENGINEERING PROJECTS
================================================================================
StackLens — Website Architecture Inference & Intelligence Engine
Technologies: Java 21, Spring Boot 3, RabbitMQ, PostgreSQL, Redis, React 19, TypeScript
GitHub: https://github.com/abhi-byte62/stackl | Case Study: https://abhishekmr.vercel.app/stacklens
• Architected an asynchronous multi-vector probe engine reverse-engineering public web applications across 200+ weighted signatures.
• Implemented SSRF and DNS-rebinding perimeter defense by validating resolved target IPs against private RFC 1918 subnets prior to worker dispatch.
• Decoupled long-running external HTTP/TLS crawlers from client APIs using RabbitMQ message queues and Redis caching tiers.
• Synthesized PostgreSQL DDL schemas and REST/GraphQL API contracts from detected access patterns with interactive DAG topology generation.

LiquidityLens — Market Microstructure Simulator & Matching Engine
Technologies: C++17, Python 3.10, FastAPI, Fixed-Point Math, Hawkes Processes, WebSockets
GitHub: https://github.com/abhi-byte62/liqudity | Case Study: https://abhishekmr.vercel.app/liquiditylens
• Developed a deterministic C++17 limit order book (LOB) matching engine supporting 4.5M+ events/s with ~220ns match latency.
• Utilized int64_t fixed-point arithmetic across matching and accounting pipelines, eliminating IEEE-754 floating-point drift.
• Simulated clustered order arrival dynamics with synthetic Hawkes processes and modeled FIFO queue priority across 10µs–500µs latency slips.
• Calculated zero look-ahead adverse selection markout curves at 10ms, 100ms, and 1s post-trade horizons; streamed L2 depth via WebSockets.

TaskFlow — Real-Time Collaborative Kanban & Distributed State Engine
Technologies: React 18, Node.js, PostgreSQL 17, Prisma ORM, Socket.io, TanStack Query
GitHub: https://github.com/abhi-byte62/taskflow | Case Study: https://abhishekmr.vercel.app/taskflow
• Engineered a real-time collaborative workspace with Optimistic Concurrency Control (OCC) using integer revision tags to reject stale writes.
• Implemented fractional midpoint indexing for O(1) card drag reordering, preventing expensive cascading updates across database rows.
• Integrated room-scoped Socket.io state synchronization with role-based access control (RBAC) enforced in atomic Prisma transactions.

Specter Proxy — Stream Backpressure & Ephemeral TLS Interception Proxy
Technologies: Node.js Streams, HTTP/HTTPS, TLS Termination, Dynamic SNI, Backpressure
GitHub: https://github.com/abhi-byte62/specter-proxy | Case Study: https://abhishekmr.vercel.app/specter-proxy
• Built a stream-oriented forward proxy for real-time packet inspection, latency injection, and synthetic network resilience testing.
• Enforced strict highWaterMark stream backpressure flow control to prevent heap bloat, maintaining a bounded ~35MB memory footprint.
• Implemented dynamic on-the-fly X.509 SNI certificate generation signed by an ephemeral local CA for seamless TLS MITM inspection.

================================================================================
EDUCATION
================================================================================
Presidency University — Bengaluru, India
Bachelor of Technology (B.Tech) in Computer Science & Engineering [Sept 2023 – Present | Expected 2027]
Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Database Management Systems (DBMS), Computer Networks, System Design, Software Engineering.

================================================================================
PROBLEM SOLVING & CERTIFICATIONS
================================================================================
• Competitive Programming: Active problem solver on LeetCode (u/playboldAbhi) and Codeforces (playboldAbhi), focusing on Graph Algorithms, Dynamic Programming, and Amortized Complexity.
• HackerRank Certifications: SQL (Advanced), Rest API (Intermediate), Problem Solving (Intermediate), Java (Basic).
"""
    with open(filename, "w", encoding="utf-8") as f:
        f.write(text.strip())
    print(f"Generated {filename}")

def validate_and_test():
    print("=== VALIDATING GENERATED RESUME ===")
    reader = pypdf.PdfReader("Abhishek_M_R_Resume.pdf")
    page_count = len(reader.pages)
    print(f"1. PDF Page Count: {page_count} (Single-page target: {'PASS' if page_count == 1 else 'FAIL'})")
    
    extracted_text = ""
    for page in reader.pages:
        extracted_text += page.extract_text()
    
    print(f"2. Extracted text length: {len(extracted_text)} characters")
    
    # Check key sections
    sections = [
        "ABHISHEK M R", "PROFESSIONAL SUMMARY", "TECHNICAL SKILLS",
        "SELECTED ENGINEERING PROJECTS", "StackLens", "LiquidityLens",
        "TaskFlow", "Specter Proxy", "EDUCATION", "Presidency University",
        "PROBLEM SOLVING & CERTIFICATIONS", "LeetCode", "Codeforces", "HackerRank"
    ]
    missing_sections = [s for s in sections if s.lower() not in extracted_text.lower()]
    print(f"3. Sections check: {'ALL PRESENT' if not missing_sections else f'MISSING: {missing_sections}'}")
    
    # Check contact details
    contacts = ["mrabhisheak@gmail.com", "+91 7259371549", "Bengaluru", "abhishekmr.vercel.app", "abhi-byte62"]
    missing_contacts = [c for c in contacts if c.lower() not in extracted_text.lower()]
    print(f"4. Contact details check: {'ALL PRESENT' if not missing_contacts else f'MISSING: {missing_contacts}'}")
    
    # ATS Keyword scan across targeted roles
    roles = {
        "Software Engineer": ["Java", "C++", "Python", "Data Structures", "Algorithms", "Git", "OOP", "Testing"],
        "Backend Engineer": ["Spring Boot", "Node.js", "PostgreSQL", "Redis", "RabbitMQ", "RESTful APIs", "WebSockets"],
        "Systems Engineer": ["Concurrency", "Memory", "Backpressure", "Operating Systems", "Computer Networks", "C++17"],
        "Quant Developer": ["C++17", "Limit Order Book", "Fixed-Point", "Latency", "Algorithms", "FIFO", "Data Structures"]
    }
    
    print("\n--- ATS KEYWORD COVERAGE SIMULATION ---")
    for role, kw_list in roles.items():
        covered = [k for k in kw_list if k.lower() in extracted_text.lower()]
        missing = [k for k in kw_list if k.lower() not in extracted_text.lower()]
        score = (len(covered) / len(kw_list)) * 100
        print(f"• {role}: {len(covered)}/{len(kw_list)} covered ({score:.0f}%) | Covered: {', '.join(covered)}")
        if missing:
            print(f"  Missing: {', '.join(missing)}")

if __name__ == "__main__":
    generate_pdf()
    generate_docx()
    generate_txt()
    validate_and_test()
