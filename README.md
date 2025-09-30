# Azure Portfolio Project

Ett modernt portfolio byggt med React och deployat i Microsoft Azure Static Web Apps. Detta projekt demonstrerar kunskaper inom frontend-utveckling, molntjänster och CI/CD.

## 🔗 Live Demo

**Deployed på Azure:** [https://polite-tree-06d4a3a10.1.azurestaticapps.net](https://polite-tree-06d4a3a10.1.azurestaticapps.net)

## 📋 Projektöversikt

Detta portfolio skapades som en del av kursen **Molntjänster** på Stockholms Tekniska Institut. Projektet visar färdigheter inom:

- React-utveckling med komponenter och hooks
- Azure Static Web Apps deployment
- GitHub Actions CI/CD pipeline
- Responsiv webbdesign
- Modern UI/UX

## 🛠️ Teknologier

- **Frontend:** React, JavaScript, HTML5, CSS3
- **Cloud Platform:** Microsoft Azure Static Web Apps
- **Version Control:** Git, GitHub
- **CI/CD:** GitHub Actions
- **Deployment:** Automatisk deployment via GitHub integration

## 📸 Screenshots

### Live Portfolio

#### Hero Section
![Hero Section](screenshots/hero-section.png)

#### Projects Section
![Projects Section](screenshots/projects-section.png)

#### Skills Section
![Skills Section](screenshots/skills-section.png)

#### Contact Section
![Contact Section](screenshots/contact-section.png)

### Azure Deployment

![Azure Portal Overview](screenshots/azure-overview.png)
*Azure Static Web App resurs med deployment-status och live URL*

### GitHub Actions CI/CD

![GitHub Actions](screenshots/github-actions.png)
*Automatisk deployment via GitHub Actions workflow*

### Project Structure

![VS Code Structure](screenshots/vscode-structure.png)
*React-projektets komponentstruktur*

## 🚀 Deployment Process

### 1. Skapa React-applikation
```bash
npx create-react-app azure-portfolio-project
cd azure-portfolio-project
```

### 2. Utveckla komponenter
Skapade följande komponenter:
- `Hero.js` - Presentation och introduktion
- `Projects.js` - Projektportfölj med GitHub-länkar
- `Skills.js` - Tekniska färdigheter kategoriserade
- `Contact.js` - Kontaktinformation och sociala länkar

### 3. Versionshantering med Git och GitHub

Projektet versionshanteras med Git och hostas på GitHub, vilket möjliggör integration med Azure Static Web Apps för automatisk deployment.

### 4. Deploya till Azure Static Web Apps

Skapade en Azure Static Web App resurs via Azure Portal och kopplade den till GitHub-repot. Azure identifierade automatiskt att projektet är en React-applikation och konfigurerade build-processen därefter. Vid skapandet genererade Azure automatiskt en GitHub Actions workflow-fil som hanterar all CI/CD.

### 5. Automatisk CI/CD Pipeline

GitHub Actions workflow körs automatiskt vid varje push till main branch och hanterar hela deployment-processen från build till publicering. Detta ger en sömlös utvecklingsupplevelse där ändringar i koden automatiskt reflekteras på live-sajten inom några minuter.

## 📁 Projektstruktur

```
azure-portfolio-project/
├── public/
├── src/
│   ├── components/
│   │   ├── Hero.js
│   │   ├── Hero.css
│   │   ├── Projects.js
│   │   ├── Projects.css
│   │   ├── Skills.js
│   │   ├── Skills.css
│   │   ├── Contact.js
│   │   └── Contact.css
│   ├── App.js
│   ├── App.css
│   └── index.js
├── screenshots/
├── package.json
└── README.md
```

## 💡 Vad jag lärt mig

### Cloud Computing & Azure
- Skillnaden mellan IaaS, PaaS och SaaS
- Azure Static Web Apps och dess användningsområden
- Fördelar med molnbaserad infrastruktur (skalbarhet, kostnadseffektivitet)
- Azures prismodell och Free tier-möjligheter

### CI/CD med GitHub Actions
- Automatisk deployment vid code changes
- GitHub Actions workflow-konfiguration
- Integration mellan GitHub och Azure

### React & Frontend
- Komponentbaserad arkitektur
- Props och state management
- Responsiv design med CSS
- Modern UI/UX principer

## 🎯 Framtida förbättringar

- Lägga till custom domain
- Implementera darkmode
- Lägga till fler projekt när de blir klara
- Förbättra laddningstider med lazy loading
- Lägga till animationer och transitions

## 👨‍💻 Om mig

Jag är student på Stockholms Tekniska Institut och läser till Javautvecklare. Detta portfolio visar mina kunskaper inom både backend (Java, Spring Boot) och frontend (React, TypeScript) samt molntjänster med Azure.

## 📞 Kontakt

- **GitHub:** [gustavnybergs](https://github.com/gustavnybergs)
- **Email:** gustavnybergs@gmail.com
- **LinkedIn:** [Gustav Nyberg](https://www.linkedin.com/in/gustav-nyberg-310958382/)

## 📝 Licens

Detta projekt är skapat som en del av utbildningen på Yrkeshögskolan.

---

**Byggt med ❤️ och deployat i Azure**