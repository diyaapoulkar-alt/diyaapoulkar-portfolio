import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

def build_pdf():
    pdf_path = r"C:\Users\User\.gemini\antigravity\scratch\diyaapoulkar-portfolio\public\diya_poulkar_resume.pdf"
    os.makedirs(os.path.dirname(pdf_path), exist_ok=True)
    
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()

    # Color Palette
    COLOR_BLACK = colors.HexColor("#000000")       # Solid Black for Header & Body Text
    COLOR_ACCENT = colors.HexColor("#B45309")      # Amber Accent for Subtitles/Links
    COLOR_MUTED = colors.HexColor("#64748B")       # Slate Muted
    COLOR_LINK = colors.HexColor("#0284C7")        # Standard Blue for Clickable Links
    BG_LIGHT = colors.HexColor("#F8FAFC")          # Light Slate Table Header

    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=23,
        textColor=COLOR_BLACK
    )

    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=13,
        textColor=COLOR_ACCENT
    )

    # Upper Info Contact Style - Solid Black Font
    contact_style = ParagraphStyle(
        'ContactText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=COLOR_BLACK
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=13.5,
        textColor=COLOR_BLACK,
        spaceBefore=7,
        spaceAfter=3
    )

    body_style = ParagraphStyle(
        'Body',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        textColor=COLOR_BLACK
    )

    bold_body = ParagraphStyle(
        'BoldBody',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=13,
        textColor=COLOR_BLACK
    )

    bullet_style = ParagraphStyle(
        'Bullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12.5,
        leftIndent=12,
        firstLineIndent=-8,
        textColor=COLOR_BLACK,
        spaceAfter=2
    )

    story = []

    # 1. Header Section - Name & Subtitle
    story.append(Paragraph("<b>Diya Annasaheb Poulkar</b>", title_style))
    story.append(Paragraph("Computer Science Student • Developer • Problem Solver", subtitle_style))
    story.append(Spacer(1, 3))

    # 2. Contact Info - Black Font with Active Clickable Links
    story.append(Paragraph("Nashik, Maharashtra &nbsp;|&nbsp; diyaapoulkar@gmail.com &nbsp;|&nbsp; +91 8080332392", contact_style))
    story.append(Paragraph(
        "Portfolio: <a href='https://diyaapoulkar-portfolio.vercel.app/' color='#0284C7'>diyaapoulkar-portfolio.vercel.app</a> &nbsp;|&nbsp; "
        "LinkedIn: <a href='https://www.linkedin.com/in/diya-poulkar-05721037a/' color='#0284C7'>linkedin.com/in/diya-poulkar</a> &nbsp;|&nbsp; "
        "GitHub: <a href='https://github.com/diyaapoulkar-alt' color='#0284C7'>github.com/diyaapoulkar-alt</a>",
        contact_style
    ))

    # 3. Straight Horizontal Divider Line Above CAREER OBJECTIVE
    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=1.5, color=COLOR_BLACK, spaceBefore=3, spaceAfter=6))

    # 4. Career Objective
    story.append(Paragraph("CAREER OBJECTIVE", section_heading))
    story.append(Paragraph(
        "Aspiring software engineer focused on building strong problem-solving skills, developing efficient software applications, and learning modern web and AI technologies.",
        body_style
    ))
    story.append(Spacer(1, 4))

    # 5. Education
    story.append(Paragraph("EDUCATION", section_heading))
    edu_data = [
        [
            Paragraph("<b>Degree / Class</b>", bold_body),
            Paragraph("<b>Institution</b>", bold_body),
            Paragraph("<b>Tenure / Passing</b>", bold_body),
            Paragraph("<b>CGPA / Percentage</b>", bold_body)
        ],
        [
            Paragraph("B.Tech in Computer Science & Engineering", body_style),
            Paragraph("Vellore Institute of Technology-Bhopal", body_style),
            Paragraph("Aug 2025 – Ongoing", body_style),
            Paragraph("<b>9.31 CGPA</b>", bold_body)
        ],
        [
            Paragraph("Class XII (HSC)", body_style),
            Paragraph("Wisdom High International School & Jr. College", body_style),
            Paragraph("June 2025", body_style),
            Paragraph("74.00%", body_style)
        ],
        [
            Paragraph("Class X (SSC)", body_style),
            Paragraph("Boys’ Town Public School, Nashik", body_style),
            Paragraph("June 2023", body_style),
            Paragraph("90.00%", body_style)
        ]
    ]
    
    edu_table = Table(edu_data, colWidths=[150, 200, 100, 80])
    edu_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), BG_LIGHT),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor("#CBD5E1")),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
    ]))
    story.append(edu_table)
    story.append(Spacer(1, 4))

    # 6. Technical Skills & Languages
    story.append(Paragraph("TECHNICAL SKILLS & LANGUAGES", section_heading))
    story.append(Paragraph("• <b>Programming Languages:</b> C, C++, Java, Python, JavaScript, HTML, CSS", body_style))
    story.append(Paragraph("• <b>Frameworks & Tools:</b> Next.js, React, Streamlit, Tailwind CSS, Groq Cloud AI, Git, GitHub, VS Code", body_style))
    story.append(Paragraph("• <b>Core Competencies:</b> Object-Oriented Programming (C++, Java), Data Structures, Problem Solving, Web Engineering", body_style))
    story.append(Paragraph("• <b>Spoken Languages:</b> English, Hindi, Marathi", body_style))
    story.append(Spacer(1, 4))

    # 7. Featured Projects
    story.append(Paragraph("FEATURED PROJECTS", section_heading))

    story.append(Paragraph("<b>Saathi — Multimodal AI Accessibility Copilot</b> &nbsp;|&nbsp; <i>2nd Runner Up — SoCF 2.0 National Hackathon</i>", body_style))
    story.append(Paragraph("<i>Tech Stack: React 18, Vite, Groq Llama Vision, Web Speech API, Tesseract OCR</i>", ParagraphStyle('TS', parent=styles['Normal'], fontName='Helvetica-Oblique', fontSize=8.5, textColor=COLOR_MUTED)))
    story.append(Paragraph("• Built an accessibility application to assist students with visual, hearing, and cognitive learning needs.", bullet_style))
    story.append(Paragraph("• Integrated OCR for image reading, real-time subtitles, dyslexia-friendly fonts, and multi-language support (English, Hindi, Marathi).", bullet_style))
    story.append(Spacer(1, 3))

    story.append(Paragraph("<b>Smart News Assistant</b> &nbsp;|&nbsp; <i>AI-Powered News Platform</i>", body_style))
    story.append(Paragraph("<i>Tech Stack: Python, Streamlit, Groq AI, NewsAPI, Google News RSS, BeautifulSoup</i>", ParagraphStyle('TS2', parent=styles['Normal'], fontName='Helvetica-Oblique', fontSize=8.5, textColor=COLOR_MUTED)))
    story.append(Paragraph("• Created a Python web application that fetches, filters, and summarizes news using NewsAPI and Google News RSS feeds.", bullet_style))
    story.append(Paragraph("• Added automatic language translation, 3-bullet AI summaries, and sentiment analysis for news articles.", bullet_style))
    story.append(Spacer(1, 3))

    story.append(Paragraph("<b>Smart Commute Assistant</b> &nbsp;|&nbsp; <i>Real-Road Route Planning Application</i>", body_style))
    story.append(Paragraph("<i>Tech Stack: Python, Streamlit, OSRM Engine, OpenStreetMap, Folium</i>", ParagraphStyle('TS3', parent=styles['Normal'], fontName='Helvetica-Oblique', fontSize=8.5, textColor=COLOR_MUTED)))
    story.append(Paragraph("• Developed a commute planning tool using Streamlit and OSRM (Open Source Routing Machine) to calculate real road routes and travel times.", bullet_style))
    story.append(Paragraph("• Included transport mode comparison (Car, Bike, Transit, Walking), traffic rush estimation, and eco CO₂ footprint calculations.", bullet_style))
    story.append(Spacer(1, 4))

    # 8. Leadership & Experience
    story.append(Paragraph("LEADERSHIP & EXPERIENCE", section_heading))
    story.append(Paragraph("<b>Core Member – Technical Team</b> &nbsp;|&nbsp; <i>Linpack Club, VIT Bhopal</i> <font color='#B45309' size=8.5>(May 2026 – Present)</font>", body_style))
    story.append(Paragraph("• Contributing to web development and backend projects as a core technical team member.", bullet_style))
    story.append(Paragraph("• Collaborating with team members on technical events, web projects, and peer workshops.", bullet_style))
    story.append(Spacer(1, 3))

    story.append(Paragraph("<b>Software Intern</b> &nbsp;|&nbsp; <i>Minitek Systems India Pvt. Ltd., Nashik</i> <font color='#B45309' size=8.5>(July 2025 – August 2025)</font>", body_style))
    story.append(Paragraph("• Assisted in software installation and system configuration for enterprise tools.", bullet_style))
    story.append(Paragraph("• Learned about IT operations, troubleshooting, and software deployment processes.", bullet_style))
    story.append(Spacer(1, 4))

    # 9. Key Achievements & Awards
    story.append(Paragraph("KEY ACHIEVEMENTS & AWARDS", section_heading))
    story.append(Paragraph("• <b>2nd Runner Up in AI Agents Track</b> — Won at Summer of Code Fest 2.0 (SoCF 2.0), a National Level Hackathon with 2,500+ registered and 700+ offline participants at VIT Bhopal, organized by GSoC Innovators Club.", bullet_style))
    story.append(Paragraph("• <b>Infosys STEM Stars Scholarship</b> — Awarded the Infosys STEM Stars Scholarship by Infosys Foundation for academic excellence in B.Tech CSE.", bullet_style))
    story.append(Paragraph("• <b>Generative AI Mastermind Certification</b> — Completed certification covering LLMs, prompt engineering, and practical AI tool integration.", bullet_style))
    story.append(Paragraph("• <b>Professional Certifications</b> — Completed Python Essentials, Digital Literacy, and Fundamentals in AI & ML on Vityarthi Platform.", bullet_style))
    story.append(Paragraph("• <b>Public Speaking & Elocution</b> — Won multiple prizes in English elocution and public speaking competitions.", bullet_style))

    doc.build(story)
    print("Resume PDF generated successfully at:", pdf_path)

if __name__ == "__main__":
    build_pdf()
